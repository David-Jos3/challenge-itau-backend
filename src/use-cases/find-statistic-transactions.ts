/* eslint-disable @stylistic/max-len */
import { Statistic } from '../domain/entities/statistic'
import { TransactionRepository } from '../domain/repositories/transaction-repository'

interface FindStatisticTransactionsUseCaseResponse {
  statistic: Statistic
}

export class FindStatisticTransactionsUseCase {
  constructor(private transactionRepository: TransactionRepository) {}

  async execute(): Promise<FindStatisticTransactionsUseCaseResponse> {
    const transaction = await this.transactionRepository.findAll()
    const recentTransactions = transaction.filter(transaction => {
      const timeStemp = new Date().getTime() - (60 * 1000)
      const transactionTime = new Date(transaction.dateTime).getTime()

      return transactionTime >= timeStemp
    })

    console.log('recente Transaction', recentTransactions.length)
    if (recentTransactions.length === 0) {
      return {
        statistic: Statistic.create({
          count: 0,
          sum: 0,
          avg: 0,
          max: 0,
          min: 0,
        }),
      }
    }
    const count = recentTransactions.length
    const sum = recentTransactions.reduce((acc, transaction) => acc + transaction.value, 0)
    const avg = sum / count
    const max = Math.max(...recentTransactions.map(transaction => transaction.value))
    const min = Math.min(...recentTransactions.map(transaction => transaction.value))

    return {
      statistic: Statistic.create({ count, sum, avg, max, min }),
    }
  }
}
