import Link from "next/link"

export default function Page() {
  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        TableCRM Product Module
      </h1>

      <Link
        href="/products/create"
        className="bg-black text-white px-4 py-2 rounded"
      >
        Create Product
      </Link>

    </div>
  )
}