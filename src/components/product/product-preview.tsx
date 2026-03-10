export default function ProductPreview({ data }:any){

  return(

    <div className="sticky top-6 h-fit">

      <div className="border rounded-xl p-6 bg-white">

        <h2 className="text-lg font-semibold mb-4">
          Предпросмотр карточки
        </h2>

        <div className="border rounded-lg p-4 space-y-3">

          <div className="h-40 bg-gray-100 rounded-md flex items-center justify-center text-sm">
            Изображение товара
          </div>

          <h3 className="font-semibold text-lg">
            {data.name || "Название товара"}
          </h3>

          <p className="text-gray-500 text-sm">
            {data.description_short || "Краткое описание"}
          </p>

          <div className="text-xl font-bold">
            {data.marketplace_price
              ? `${data.marketplace_price} ₽`
              : "Цена"}
          </div>

          <div className="text-xs text-gray-400">
            Артикул: {data.code || "—"}
          </div>

        </div>

      </div>

    </div>

  )
}