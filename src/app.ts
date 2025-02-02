import fastify, {FastifyRequest, FastifyReply} from "fastify";


export const app = fastify({ logger: true })

app.get('/hello', (request:FastifyRequest, reply:FastifyReply) => {
  reply.send({hello: 'Hello Itaú'})
})

