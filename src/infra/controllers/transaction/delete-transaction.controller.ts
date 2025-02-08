/* eslint-disable @stylistic/max-len */
import { FastifyReply, FastifyRequest } from 'fastify'
import { DeleteTransactionParamsDto } from '../../../dtos/transaction-dto'
import { DeleteTransactionUseCase } from '../../../use-cases/delete-transaction'
import { InMemoryTransactionsRepository } from '../../repositories/in-memory-transactions-repository'

export class DeleteTransactionController {
  static async delete(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { transactionId } = request.params as DeleteTransactionParamsDto

      const inMemoryTransactionsRepository = new InMemoryTransactionsRepository()
      const deleteTransactionUseCase = new DeleteTransactionUseCase(inMemoryTransactionsRepository)

      await deleteTransactionUseCase.execute({ transactionId })
      reply.status(200).send({ message: 'transaction deleted successfully' })
    } catch (err) {
      console.log(err)
      reply.status(500).send({ message: 'Internal Server Error' })
    }
  }
}
