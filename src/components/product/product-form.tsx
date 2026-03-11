"use client"

import { useForm } from "react-hook-form"
import { useWatch } from "react-hook-form"
import SeoSection from "./seo-section"
import MapSection from "./map-section"
import ProductPreview from "./product-preview"

export default function ProductForm() {

  const form = useForm({
    defaultValues:{
      name:"",
      description_short:"",
      description_long:"",
      code:"",
      marketplace_price:0,
      seo_title:"",
      seo_description:"",
      seo_keywords:[],
      latitude:null,
      longitude:null
    }
  })

  const preview = useWatch({ control: form.control })

const onSubmit = async (data:any)=>{

  const payload = {

    ...data,

    type:"product",
    unit:116,
    category:2477,
    cashback_type:"lcard_cashback",
    global_category_id:127,

    seo_keywords: data.seo_keywords
      ? data.seo_keywords.split(",").map((k:string)=>k.trim())
      : []
  }

  const res = await fetch("/api/create-product",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(payload)
  })

  const result = await res.json()

  console.log("RESULT:", JSON.stringify(result,null,2))

}

  return (

    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="grid grid-cols-3 gap-8"
    >

      {/* LEFT SIDE FORM */}
      <div className="col-span-2 space-y-6">

        <div className="bg-white rounded-xl border p-6 space-y-4">

          <h2 className="text-lg font-semibold">
            Основная информация
          </h2>

          <input
            placeholder="Название товара"
            {...form.register("name")}
            className="w-full border rounded-md p-2"
          />

          <input
            placeholder="Артикул"
            {...form.register("code")}
            className="w-full border rounded-md p-2"
          />

          <input
            placeholder="Цена"
            type="number"
            {...form.register("marketplace_price")}
            className="w-full border rounded-md p-2"
          />

          <textarea
            placeholder="Краткое описание"
            {...form.register("description_short")}
            className="w-full border rounded-md p-2"
          />

          <textarea
            placeholder="Полное описание"
            {...form.register("description_long")}
            className="w-full border rounded-md p-2"
          />

        </div>

        <SeoSection form={form}/>

        <MapSection form={form}/>

        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Создать товар
        </button>

      </div>

      {/* RIGHT SIDE PREVIEW */}
      <ProductPreview data={preview}/>

    </form>
  )
}