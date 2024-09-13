import { z } from 'zod'

export const registerSchema = z.object({
    nickname: z.string().min(3, 'Nickname must be at least 3 characters long'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
  });