/* eslint-disable @stylistic/max-len */
import { Transaction } from '../domain/entities/transaction'
import { TransactionRepository } from '../domain/repositories/transaction-repository'
import { ValidationError } from './errors/validation-error'

interface RegisterTransactionsUseCaseRequest {
  value: number,
  dateTime: string
}

export class RegisterTransactionsUseCase {
  constructor(private transactionRepository: TransactionRepository) {}

  async execute({ dateTime, value }:RegisterTransactionsUseCaseRequest) {
    if (value == null) {
      throw new ValidationError('The "value" field is mandatory.')
    }

    if (value < 0) {
      throw new ValidationError('Transaction Failed')
    }
    const transactionDate = new Date(dateTime)

    const now = new Date()

    if (transactionDate.getTime() > now.getTime()) {
      throw new ValidationError('The date entered cannot be in the future.')
    }

    const transaction = Transaction.create(
      {
        value,
        dateTime: transactionDate.toISOString(),
      },
    )

    await this.transactionRepository.create(transaction)
  }
}
