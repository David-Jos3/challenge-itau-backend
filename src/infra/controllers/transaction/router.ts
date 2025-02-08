/* eslint-disable @stylistic/max-len */
import { app } from '../../../app'
import { DeleteTransactionController } from './delete-transaction.controller'
import { RegisterTransactionsController } from './register-transaction.controller'

export async function transactionRouter() {
  app.post('/transactions', RegisterTransactionsController.register)
  app.delete('/transactions/:id', DeleteTransactionController.delete)
}
