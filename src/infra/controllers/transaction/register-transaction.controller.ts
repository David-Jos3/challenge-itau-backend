/* eslint-disable @stylistic/max-len */
import { FastifyReply, FastifyRequest } from 'fastify'
import { InMemoryTransactionsRepository } from '../../repositories/in-memory-transactions-repository'
import { RegisterTransactionsUseCase } from './../../../use-cases/register-transactions'
import { TransactionDto } from '../../../dtos/transaction-dto'
import { ZodError } from 'zod'
import { ValidationError } from '../../../use-cases/errors/validation-error'

export class RegisterTransactionsController {
  static async register(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { value, dateTime } = request.body as TransactionDto

      const inMemoryTransactionsRepository = InMemoryTransactionsRepository.getInstance()
      const registerTransactionUseCase = new RegisterTransactionsUseCase(inMemoryTransactionsRepository)

      await registerTransactionUseCase.execute({ value, dateTime })

      reply.status(201).send({ message: 'transaction created successfully' })
    } catch (err) {
      if (err instanceof ZodError) {
        return reply.status(400).send({ message: err.message })
      }
      if (err instanceof ValidationError) {
        return reply.status(422).send({ message: err.message })
      }
      reply.status(500).send({ message: 'Internal Server Error' })
    }
  }
}
