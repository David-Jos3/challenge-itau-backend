/* eslint-disable @stylistic/max-len */
import { app } from '../../../app'
import { FindStatisticTransactionsController } from './find-statistic-transactions.controller'

export async function statisticRouter() {
  app.get('/statistics', FindStatisticTransactionsController.findAll)
}
