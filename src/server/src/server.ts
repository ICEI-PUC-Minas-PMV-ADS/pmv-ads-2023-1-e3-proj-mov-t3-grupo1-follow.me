import Fastify from 'fastify';
const app = Fastify();
import cors from '@fastify/cors'


app.register(cors)


// -- rotas
app.get('/', () =>{
    return "Teste"
})

// -- configurando porta
app.listen({
    port: 3333,
}).then(() => {
    console.log("HTTP Server rodando!")
})


