import { z } from 'zod';

export const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: 'Password Must be a 8 or more' }),
});
