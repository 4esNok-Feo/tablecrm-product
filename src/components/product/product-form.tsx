"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { productSchema } from "@/schemas/product-schema"
import { createProduct } from "@/lib/api"
import { saveDraft, loadDraft } from "@/lib/draft"
import { useEffect } from "react"

import BasicSection from "./basic-section"
import PriceSection from "./price-section"
import SeoSection from "./seo-section"
import LocationPicker from "./location-picker"

import { Button } from "@/components/ui/button"

export default function ProductForm() {

  const form = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: loadDraft() ?? {
      seo_keywords: []
    }
  })

  const { handleSubmit, watch } = form

  useEffect(() => {
    const sub = watch((data) => saveDraft(data))
    return () => sub.unsubscribe()
  }, [watch])

  const onSubmit = async (data: any) => {

    await createProduct({
      ...data,
      type: "product",
      unit: 116,
      category: 2477,
      cashback_type: "lcard_cashback",
      global_category_id: 127,
      chatting_percent: 4
    })

    alert("Product created")
  }

  return (

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8"
    >

      <BasicSection form={form} />

      <PriceSection form={form} />

      <SeoSection form={form} />

      <LocationPicker form={form} />

      <Button type="submit">
        Создать товар
      </Button>

    </form>
  )
}