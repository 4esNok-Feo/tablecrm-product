import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function BasicSection({ form }: any) {

  const { register } = form

  return (

    <div className="space-y-4">

      <h2 className="text-lg font-semibold">
        Основная информация
      </h2>

      <Input
        placeholder="Название товара"
        {...register("name")}
      />

      <Input
        placeholder="Артикул"
        {...register("code")}
      />

      <Textarea
        placeholder="Краткое описание"
        {...register("description_short")}
      />

      <Textarea
        placeholder="Полное описание"
        {...register("description_long")}
      />

    </div>
  )
}