/* eslint-disable @stylistic/max-len */
import { Transaction } from '../../domain/entities/transaction'
import { TransactionRepository } from '../../domain/repositories/transaction-repository'

export class InMemoryTransactionsRepository implements TransactionRepository {
  // eslint-disable-next-line no-use-before-define
  private static instance: InMemoryTransactionsRepository
  private transactions: Transaction[] = []

  static getInstance(): InMemoryTransactionsRepository {
    if (!InMemoryTransactionsRepository.instance) {
      InMemoryTransactionsRepository.instance = new InMemoryTransactionsRepository()
    }
    return InMemoryTransactionsRepository.instance
  }

  async create(transaction: Transaction): Promise<void> {
    this.transactions.push(transaction)
  }

  async delete(transactionId: string): Promise<void> {
    this.transactions = this.transactions.filter(item => item.id !== transactionId)
  }

  async findAll(): Promise<Transaction[]> {
    return this.transactions
  }
}
