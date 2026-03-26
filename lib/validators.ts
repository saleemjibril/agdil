import { z } from "zod";

export const cacFormSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(8, "Phone is required"),
  businessName: z.string().min(2, "Business name is required"),
  businessType: z.string().min(2, "Business type is required"),
  notes: z.string().optional(),
});

export const creditFormSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(8, "Phone is required"),
  monthlyRevenue: z.enum(["under-100k", "100k-500k", "500k-2m", "2m-plus", "prefer-not"]),
  yearsInBusiness: z.string().min(1, "Select an option"),
  notes: z.string().optional(),
});

export type CacFormInput = z.infer<typeof cacFormSchema>;
export type CreditFormInput = z.infer<typeof creditFormSchema>;
