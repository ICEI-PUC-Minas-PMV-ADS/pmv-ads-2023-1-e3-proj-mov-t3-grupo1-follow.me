import Fastify from 'fastify'; 
const app = Fastify();

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

import cors from '@fastify/cors'


app.register(cors)


// -- rotas
app.get('/hello', async () =>{
    const habits = await prisma.habit.findMany()

    return habits
})

// -- configurando porta
app.listen({
    port: 3333,
}).then(() => {
    console.log("HTTP Server rodando!")
})


