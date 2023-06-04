import dayjs from 'dayjs';
import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { compare } from 'bcrypt';
import bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { authenticateUser } from '../middlewares/authUser';


import dotenv from 'dotenv';

dotenv.config();

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export async function appRoutes(app: FastifyInstance) {


  app.post('/habits', async (request) => {
    const createHabitBody = z.object({
      title: z.string(),
      weekDays: z.array(z.number().min(0).max(6))
    });

    const { title, weekDays } = createHabitBody.parse(request.body);

    const today = dayjs().startOf('day').toDate();

    await prisma.habit.create({
      data: {
        title,
        created_at: today,
        weekDays: {
          create: weekDays.map(weekDay => {
            return {
              week_day: weekDay
            }
          })
        }
      }
    })
  });

  app.get('/day', async (request) => {
    const getDayParams = z.object({
      date: z.coerce.date()
    });


    
    
    const { date } = getDayParams.parse(request.query);

    const parsedDate = dayjs(date).startOf('day');
    const weekDay = parsedDate.get('day');

    const possibleHabits = await prisma.habit.findMany({
      where: {
        created_at: {
          lte: date,
        },
        weekDays: {
          some: {
            week_day: weekDay,
          }
        }
      }
    });

    const day = await prisma.day.findFirst({
      where: {
        date: parsedDate.toDate(),
      },
      include: {
        dayHabits: true,
      }
    })

    const completedHabits = day?.dayHabits.map(dayHabit => {
      return dayHabit.habit_id
    }) ?? [];

    return {
      possibleHabits,
      completedHabits,
    }

    return {
      possibleHabits,
    }

  });

  app.patch('/habits/:id/toggle', async (request) => {
    const toggleHabitParams = z.object({
      id: z.string().uuid(),
    });

    const { id } = toggleHabitParams.parse(request.params);
    const today = dayjs().startOf('day').toDate();

    let day = await prisma.day.findUnique({
      where: {
        date: today,
      }
    });

    if (!day) {
      day = await prisma.day.create({
        data: {
          date: today
        }
      });
    }

    const dayHabit = await prisma.dayHabit.findUnique({
      where: {
        day_id_habit_id: {
          day_id: day.id,
          habit_id: id,
        }
      }
    });

    if (dayHabit) {
      await prisma.dayHabit.delete({
        where: {
          id: dayHabit.id,
        }
      });
    } else {
      await prisma.dayHabit.create({
        data: {
          day_id: day.id,
          habit_id: id,
        }
      });
    }

  });

  app.get('/summary', { preHandler: authenticateUser }, async () => {
    const summary = await prisma.$queryRaw`
      SELECT 
        D.id, 
        D.date,
        (
          SELECT
            cast(count(*) as float)
          FROM day_habits DH
          WHERE DH.day_id = D.id
        ) as completed,
        (
          SELECT
            cast(count(*) as float)
          FROM habit_week_days HWD
          JOIN habits H
            ON H.id = HWD.habit_id
          WHERE 
            HWD.week_day = cast(strftime('%w', D.date/1000.0, 'unixepoch') as int)
            AND H.created_at <= D.date
        ) as amount
      FROM days D
    `
    return summary;
  });

  app.post('/login', async (request) => {
    const getUser = z.object({
      email: z.string(),
      password: z.string()
    });
    const { email, password } = getUser.parse(request.body);
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      }
    });
  
    if (!user) {
      return 'login não cadastrado';
    }
  
    const passwordMatch = await compare(password, user.password);
  
    if (passwordMatch) {
      // Senha está correta, gerar um token de acesso para o user

      const token = sign({ user: user.email }, process.env.JWT_SECRET!);
  
      return {
        message: 'login efetuado com sucesso',
        token: token,
      };
    } else {
      return 'usuário ou senha incorretos';
    }
  });

// -- rota para registro de usuario
app.post('/register', async (request) => {
  const registerUserBody = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

  const { email, password } = registerUserBody.parse(request.body);

  // Verificar se o email já está cadastrado no banco de dados
  const existingUser = await prisma.user.findUnique({
    where: {
      email: email
    },
  });

  if (existingUser) {
    return 'Este email já está cadastrado. Por favor, escolha outro email.';
  }

  // Criar um hash da senha usando o bcrypt
  const hashedPassword = await bcrypt.hash(password, 10);

  // Criar o novo usuário no banco de dados

  const newUser = await prisma.user.create({
    data: {
      email: email,
      password: hashedPassword,
    },
  });

  const token = sign({ userId: newUser.id, email: newUser.email }, process.env.JWT_SECRET!);

  return {
    message: 'Registro concluído com sucesso!',
    token: token,
  };
});

app.get('/test', async (request, reply) => {
  return 'Servidor em funcionamento!';
});



app.get('/protected', { preHandler: authenticateUser }, async (request, reply) => {
  return 'Servidor em funcionamento!';
});

}

