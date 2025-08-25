import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  company: z
    .string()
    .max(100, 'Company name must be less than 100 characters')
    .optional(),
  service: z
    .string()
    .optional(),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters')
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export const validateContactForm = (data: unknown) => {
  return contactFormSchema.safeParse(data)
}

// Newsletter subscription schema
export const newsletterSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
})

export type NewsletterData = z.infer<typeof newsletterSchema>

// Portfolio management inquiry schema
export const portfolioInquirySchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .optional(),
  investmentAmount: z
    .string()
    .min(1, 'Please specify investment amount'),
  riskTolerance: z
    .enum(['conservative', 'moderate', 'aggressive']),
  timeHorizon: z
    .enum(['short', 'medium', 'long']),
  goals: z
    .string()
    .min(10, 'Please describe your investment goals')
})

export type PortfolioInquiryData = z.infer<typeof portfolioInquirySchema> 