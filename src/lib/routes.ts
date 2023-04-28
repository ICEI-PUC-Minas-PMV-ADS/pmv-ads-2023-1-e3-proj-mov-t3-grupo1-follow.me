import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from "./prisma"
import dayjs from 'dayjs'
import { request } from 'http'

export async function appRoutes(app: FastifyInstance) {
    app.post('/atividade', async (request) => {
        const createAtividadeBody = z.object ({
            nome: z.string(),
            diaSemanaAtividade: z.array(z.number().min(0).max(6))               
        })

                const { nome, diaSemanaAtividade } = createAtividadeBody.parse(request.body)

                const today = dayjs().startOf('day').toDate()

                await prisma.atividade.create({
                  data: {
                    nome,
                    data_criacao: today,
                    DiaSemanaAtividade: {
                        create: diaSemanaAtividade.map(diaSemanaAtividade => {
                            return {
                                dia_semana: diaSemanaAtividade
                            }
                        })
                    }
                  }  
                })
              })

    app.get('/dia', async (request) => {
      const getDayParams = z.object({
        data: z.coerce.date()
      })

      const { data } = getDayParams.parse(request.query)
      
      const parsedDate = dayjs(data).startOf('day')
      const diaSemanaAtividade = parsedDate.get('day')

    
      // todas atividades possíveis
      // atividades que já foram completadas

      const atividadesPossiveis = await prisma.atividade.findMany({
        where: {
          data_criacao: {
            lte: data, 
          },
          DiaSemanaAtividade: {
            some: {
              dia_semana: diaSemanaAtividade,
            }
          }
        }
      })

      const dia = await prisma.dia.findUnique({
        where: {
        data: parsedDate.toDate(),
      },
      include: {
        DiaAtividade: true,
      }
      })

      const atividadesCompletas = dia?.DiaAtividade.map(DiaAtividade => {
        return DiaAtividade.id_atividade
      })

      return {
        atividadesPossiveis,
        atividadesCompletas,
      }

    })
 }