import ProductForm from "@/components/product/product-form"

export default function CreateProductPage() {

  return (
    <div className="max-w-3xl mx-auto py-10">

      <h1 className="text-2xl font-bold mb-6">
        Создание товара
      </h1>

      <ProductForm />

    </div>
  )
}