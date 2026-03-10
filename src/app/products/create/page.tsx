import ProductForm from "@/components/product/product-form"

export default function CreateProductPage() {

  return (

    <div className="max-w-3xl mx-auto p-10">

      <h1 className="text-3xl font-bold mb-8">
        Создание карточки товара
      </h1>

      <ProductForm />

    </div>

  )
}