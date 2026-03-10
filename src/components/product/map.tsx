"use client"

import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet"
import "leaflet/dist/leaflet.css"

function LocationMarker({ form }: any) {

  const { setValue } = form

  useMapEvents({
    click(e) {
      setValue("latitude", e.latlng.lat)
      setValue("longitude", e.latlng.lng)
    }
  })

  return null
}

export default function Map({ form }: any) {

  return (

    <MapContainer
      center={[55.751244, 37.618423]}
      zoom={5}
      style={{ height: "300px" }}
    >

      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LocationMarker form={form} />

    </MapContainer>

  )
}