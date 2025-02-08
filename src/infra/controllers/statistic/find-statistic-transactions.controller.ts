/* eslint-disable @stylistic/max-len */
import { FastifyReply, FastifyRequest } from 'fastify'
import { InMemoryTransactionsRepository } from '../../repositories/in-memory-transactions-repository'
import { FindStatisticTransactionsUseCase } from '../../../use-cases/find-statistic-transactions'

export class FindStatisticTransactionsController {
  static async findAll(request: FastifyRequest, reply: FastifyReply) {
    try {
      const transactionRepository = InMemoryTransactionsRepository.getInstance()
      const findStatisticTransactionsUseCase = new FindStatisticTransactionsUseCase(transactionRepository)

      const statistics = await findStatisticTransactionsUseCase.execute()

      reply.status(200).send(statistics)
    } catch (err) {
      if (err instanceof Error) {
        return reply.status(400).send({ message: err.message })
      }
      return reply.status(500).send({ message: 'Internal Server Error' })
    }
  }
}
