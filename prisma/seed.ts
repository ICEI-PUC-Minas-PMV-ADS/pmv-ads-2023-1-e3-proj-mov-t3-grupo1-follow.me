import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const primeiraAtividadeId = '0730ffac-d039-4194-9571-01aa2aa0efbd'
const primeiraAtividadeCreationDate = new Date('2022-12-31T03:00:00.000')

const segundaAtividadeId = '00880d75-a933-4fef-94ab-e05744435297'
const segundaAtividadeCreationDate = new Date('2023-01-03T03:00:00.000')

const terceiraAtividadeId = 'fa1a1bcf-3d87-4626-8c0d-d7fd1255ac00'
const terceiraAtividadeCreationDate = new Date('2023-01-08T03:00:00.000')

async function run() {
  await prisma.atividade.deleteMany()
  await prisma.dia.deleteMany()

  /**
   * Create habits
   */
  await Promise.all([
    prisma.atividade.create({
      data: {
        id: primeiraAtividadeId,
        nome: 'Beber 2L água',
        data_criacao: primeiraAtividadeCreationDate,
        DiaSemanaAtividade: {
          create: [
            { dia_semana: 1 },
            { dia_semana: 2 },
            { dia_semana: 3 },
          ]
        }
      }
    }),

    prisma.atividade.create({
      data: {
        id: segundaAtividadeId,
        nome: 'Exercitar',
        data_criacao: segundaAtividadeCreationDate,
        DiaSemanaAtividade: {
          create: [
            { dia_semana: 3 },
            { dia_semana: 4 },
            { dia_semana: 5 },
          ]
        }
      }
    }),

    prisma.atividade.create({
      data: {
        id: terceiraAtividadeId,
        nome: 'Dormir 8h',
        data_criacao: terceiraAtividadeCreationDate,
        DiaSemanaAtividade: {
          create: [
            { dia_semana: 1 },
            { dia_semana: 2 },
            { dia_semana: 3 },
            { dia_semana: 4 },
            { dia_semana: 5 }
          ]
        }
      }
    })
  ])

  await Promise.all([
    /**
     * Habits (Complete/Available): 1/1
     */
    prisma.dia.create({
      data: {
        /** Monday */
        data: new Date('2023-01-02T03:00:00.000z'),
        DiaAtividade: {
          create: {
            id_atividade: primeiraAtividadeId,
          }
        }
      }
    }),

    /**
     * Habits (Complete/Available): 1/1
     */
    prisma.dia.create({
      data: {
        /** Friday */
        data: new Date('2023-01-06T03:00:00.000z'),
        DiaAtividade: {
          create: {
            id_atividade: primeiraAtividadeId,
          }
        }
      }
    }),

    /**
     * Habits (Complete/Available): 2/2
     */
    prisma.dia.create({
      data: {
        /** Wednesday */
        data: new Date('2023-01-04T03:00:00.000z'),
        DiaAtividade: {
          create: [
            { id_atividade: primeiraAtividadeId },
            { id_atividade: segundaAtividadeId },
          ]
        }
      }
    }),
  ])
}

run()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })