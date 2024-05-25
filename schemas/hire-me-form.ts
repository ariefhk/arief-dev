import { z } from "zod"

export const HireMeFormValidation = z.object({
  email: z
    .string({ required_error: "Email must be submitted!" })
    .email({ message: "Please input valid email format!" }),
  subject: z
    .string({ required_error: "Subject must be submitted!" })
    .min(8, "Subject must long from this!"),
  messages: z
    .string({ required_error: "Messages must be submitted!" })
    .min(8, { message: "Messages must long fron this!" }),
})
