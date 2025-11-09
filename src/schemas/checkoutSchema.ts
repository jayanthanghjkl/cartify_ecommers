import { z } from 'zod';

export const checkoutSchema = z.object({
  firstName: z.string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters'),
  lastName: z.string()
    .min(1, 'Last name must be at least 1 characters')
    .max(50, 'Last name must be less than 50 characters'),
  email: z.string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters'),
  phone: z.string()
    .min(10, 'Phone number must be at least 10 digits')
    .regex(/^[0-9\s\-\+\(\)]+$/, 'Please enter a valid phone number'),
  address: z.string()
    .min(5, 'Address must be at least 5 characters')
    .max(100, 'Address must be less than 100 characters'),
  city: z.string()
    .min(2, 'City must be at least 2 characters')
    .max(50, 'City must be less than 50 characters'),
  zipCode: z.string()
    .min(4, 'ZIP code must be at least 4 characters')
    .max(10, 'ZIP code must be less than 10 characters'),
  country: z.string()
    .min(2, 'Please select a country'),
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;
