/* eslint-disable no-redeclare */
/* eslint-disable @stylistic/max-len */
import { z } from 'zod'

const TransactionDto = z.object({
  value: z.number().min(1, { message: 'Required' }),
  dateTime: z.string().date().trim().min(1, { message: 'Required' }),
})

export type TransactionDto = z.infer<typeof TransactionDto>

const DeleteTransactionParamsDto = z.object({
  transactionId: z.string().uuid({ message: 'Invalid transaction ID format' }),
})

export type DeleteTransactionParamsDto = z.infer<typeof DeleteTransactionParamsDto>
