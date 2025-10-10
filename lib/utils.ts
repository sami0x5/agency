import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as z from 'zod';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const contactValidation = z.object({
  name: z
    .string()
    .trim()
    .nonempty('Name required')
    .min(3, 'Name is too short.')
    .max(25, 'Name is too long.'),
  email: z
    .string()
    .trim()
    .nonempty('Email required')
    .email('Please provide a valid email'),
  phone: z
    .string('Phone number required')
    .trim()
    .min(7, 'Invalid phone number')
    .max(16, 'Invalid phone number'),
  company: z.string().trim().optional(),
  service: z.string().refine(val => val !== 'placeholder', {
    message: 'You must select a service.',
  }),
  budget: z.string().refine(val => val !== 'placeholder', {
    message: 'You must select a budget.',
  }),
  details: z.string().trim().optional(),
});

export type contactType = z.infer<typeof contactValidation>;
