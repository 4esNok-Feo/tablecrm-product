import { Input } from "@/components/ui/input"

export default function PriceSection({ form }: any) {

  const { register } = form

  return (

    <div className="space-y-4">

      <h2 className="text-lg font-semibold">
        Цена
      </h2>

      <Input
        type="number"
        placeholder="Цена"
        {...register("marketplace_price", {
          valueAsNumber: true
        })}
      />

    </div>
  )
}