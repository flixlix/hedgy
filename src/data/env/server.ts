import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  emptyStringAsUndefined: true,
  server: {
    DATABASE_URL: z.string().url(),
    EMAIL: z.string().email(),
    APP_PASSWORD: z.string(),
  },
  experimental__runtimeEnv: process.env,
})
