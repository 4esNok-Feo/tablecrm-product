"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function SeoSection({ form }: any) {

  const { register } = form

  return (
    <div className="space-y-4">

      <h2 className="text-lg font-semibold">
        SEO
      </h2>

      <Input
        placeholder="SEO title"
        {...register("seo_title")}
      />

      <Textarea
        placeholder="SEO description"
        {...register("seo_description")}
      />

      <Input
        placeholder="SEO keywords (через запятую)"
        {...register("seo_keywords")}
      />

    </div>
  )
}