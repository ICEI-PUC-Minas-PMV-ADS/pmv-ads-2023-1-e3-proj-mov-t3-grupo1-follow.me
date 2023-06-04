import { FastifyRequest } from 'fastify';
import { User } from './caminho/para/seu/modelo/user'; // Importe o modelo de usuário que você está usando

declare module 'fastify' {
  interface FastifyRequest {
    user: User; // Substitua 'User' pelo tipo correto do seu modelo de usuário
  }
}
