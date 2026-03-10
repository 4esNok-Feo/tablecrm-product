import { z } from "zod"

export const productSchema = z.object({
  name: z.string().min(3),
  code: z.string().min(2),
  description_short: z.string().min(5),
  description_long: z.string().min(10),
  marketplace_price: z.number().min(1),
  seo_title: z.string(),
  seo_description: z.string(),
  seo_keywords: z.array(z.string()),
  address: z.string(),
  latitude: z.number(),
  longitude: z.number()
})