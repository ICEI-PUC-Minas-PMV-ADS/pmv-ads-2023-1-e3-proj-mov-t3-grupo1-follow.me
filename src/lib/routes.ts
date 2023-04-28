import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from "./prisma"
import dayjs from 'dayjs'

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
            }