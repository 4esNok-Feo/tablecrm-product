"use client"

import { useMapEvents } from "react-leaflet"
import type { LeafletMouseEvent } from "leaflet"

export default function LocationPicker({ form }: any) {

  const { setValue } = form

  useMapEvents({
    click(e: LeafletMouseEvent) {

      setValue("latitude", e.latlng.lat)
      setValue("longitude", e.latlng.lng)

    }
  })

  return null
}