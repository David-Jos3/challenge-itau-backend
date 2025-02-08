/* eslint-disable no-redeclare */
import { z } from 'zod'

const StatisticDto = z.object({
  count: z.number(),
  sum: z.number(),
  avg: z.number(),
  min: z.number(),
  max: z.number(),
})

export type StatisticDto = z.infer<typeof StatisticDto>
