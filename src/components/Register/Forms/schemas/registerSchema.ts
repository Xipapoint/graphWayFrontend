import { z } from 'zod'
// import { IRegiterUserRequestDto } from '../../../../dto/request/auth/RegisterUserRequestDTO.dto';

export const registerSchema = z.object({
    username: z.string().min(3, 'Username must be at least 3 characters long'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
  });