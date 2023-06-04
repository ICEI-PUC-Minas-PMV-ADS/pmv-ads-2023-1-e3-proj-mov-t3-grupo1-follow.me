import Fastify from 'fastify';
import { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';
import { appRoutes } from './routes/routes';
import { authenticateUser } from './middlewares/authUser';


const app: FastifyInstance = Fastify({ logger: true });
app.decorateRequest('user', null); // Define a propriedade 'user' no objeto de solicitação (request)

app.register(cors, {
  origin: true,
});
app.register(appRoutes);
app.addHook('preHandler', authenticateUser);



app.listen({
  port: 3333,
  host:"0.0.0.0"
}).then((url) => {
  console.log(`Server running in port: ${url}!`)
});



