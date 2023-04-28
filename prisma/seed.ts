import { PrismaClient } from '@prisma/client'
import { create } from 'domain'
import { title } from 'process'
const prisma = new PrismaClient()

async function main() {
  await prisma.atividade.create({
    data: {
      nome: 'Beber 2L de água',
      data_criacao: new Date('2023-01-10T00:00:00.000z')
    }
  })
   }
    
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })