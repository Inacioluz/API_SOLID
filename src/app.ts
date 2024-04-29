import { PrismaClient } from '@prisma/client';
import fastify from 'fastify';

export const app =  fastify()

const prisma = new PrismaClient()

prisma.user.create({
  data: {
    name: 'Inacio Silva',
    email: 'inacio@email.com.br',
    password_hash: '123'

  },
})
