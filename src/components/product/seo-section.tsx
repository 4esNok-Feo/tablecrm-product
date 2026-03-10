export default function SeoSection({ form }:any){

  return(

    <div className="bg-white border rounded-xl p-6 space-y-4">

      <h2 className="text-lg font-semibold">
        SEO
      </h2>

      <input
        placeholder="SEO Title"
        {...form.register("seo_title")}
        className="w-full border rounded-md p-2"
      />

      <textarea
        placeholder="SEO Description"
        {...form.register("seo_description")}
        className="w-full border rounded-md p-2"
      />

      <input
        placeholder="SEO keywords (через запятую)"
        {...form.register("seo_keywords")}
        className="w-full border rounded-md p-2"
      />

    </div>

  )
}