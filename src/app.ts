import fastify, { FastifyRequest, FastifyReply } from 'fastify'
import { transactionRouter } from './infra/controllers/transaction/router'
import { statisticRouter } from './infra/controllers/statistic/router'

export const app = fastify({ logger: true })

app.register(transactionRouter)
app.register(statisticRouter)

app.get('/hello', (request:FastifyRequest, reply:FastifyReply) => {
  reply.send({ hello: 'Hello Itaú' })
})
