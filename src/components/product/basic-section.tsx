export default function BasicSection({ form }:any) {

  const { register } = form

  return (

    <div className="space-y-3">

      <h2 className="text-lg font-semibold">
        Основная информация
      </h2>

      <input
        placeholder="Название"
        {...register("name")}
      />

      <input
        placeholder="Артикул"
        {...register("code")}
      />

      <textarea
        placeholder="Краткое описание"
        {...register("description_short")}
      />

      <textarea
        placeholder="Полное описание"
        {...register("description_long")}
      />

    </div>

  )
}