import { Transaction } from '../entities/transaction'

export abstract class TransactionRepository {
  abstract create(transaction: Transaction): Promise<void>
  abstract delete(transactionId: string): Promise<void>
  abstract findAll(): Promise<Transaction[]>
}
