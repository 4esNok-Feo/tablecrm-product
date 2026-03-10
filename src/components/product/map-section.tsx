"use client"

import dynamic from "next/dynamic"

const Map = dynamic(
  ()=>import("./map"),
  { ssr:false }
)

export default function MapSection({ form }:any){

  return(

    <div className="bg-white border rounded-xl p-6 space-y-4">

      <h2 className="text-lg font-semibold">
        Геолокация
      </h2>

      <Map form={form}/>

    </div>

  )
}