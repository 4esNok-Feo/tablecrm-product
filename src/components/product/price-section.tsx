export default function PriceSection({ form }:any) {

  const { register } = form

  return (

    <div className="space-y-3">

      <h2 className="text-lg font-semibold">
        Цена
      </h2>

      <input
        type="number"
        placeholder="Marketplace price"
        {...register("marketplace_price")}
      />

      <input
        type="number"
        placeholder="Cashback %"
        {...register("chatting_percent")}
      />

    </div>

  )
}