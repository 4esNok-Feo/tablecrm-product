"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { TagsInput } from "react-tag-input-component"

export default function SeoSection({ form }: any) {

  const { register, setValue, watch } = form

  const keywords = watch("seo_keywords")

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

      <TagsInput
        value={keywords}
        onChange={(tags) => setValue("seo_keywords", tags)}
        name="keywords"
        placeHolder="SEO keywords"
      />

    </div>
  )
}