/* eslint-disable @stylistic/max-len */
import { TransactionRepository } from '../domain/repositories/transaction-repository'

interface DeleteTransactionUseCaseRequest {
  transactionId: string
}

export class DeleteTransactionUseCase {
  constructor(private transactionRepository: TransactionRepository) {}
  async execute(
    {
      transactionId,
    }: DeleteTransactionUseCaseRequest):Promise<void> {
    await this.transactionRepository.delete(transactionId)
  }
}
