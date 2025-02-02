import {number, z, ZodError} from "zod"
import 'dotenv/config'

const envSchema = z.object({
  NODE_ENV: z.string(),
  PORT: z.coerce.number().default(3333)
}) 

const parsedEnv = envSchema.safeParse(process.env)

if(parsedEnv.error) {
  throw new Error('Invalid environment variables')
}

export const env = parsedEnv.data

