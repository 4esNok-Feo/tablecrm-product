"use client"

import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet"
import "leaflet/dist/leaflet.css"

function LocationMarker({ setValue }: any) {

  useMapEvents({
    click(e) {
      setValue("latitude", e.latlng.lat)
      setValue("longitude", e.latlng.lng)
    }
  })

  return null
}

export default function LocationPicker({ form }: any) {

  const { setValue } = form

  return (

    <div className="space-y-4">

      <h2 className="text-lg font-semibold">
        Локация
      </h2>

      <MapContainer
        center={[55.75, 37.61]}
        zoom={5}
        style={{ height: 300 }}
      >

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LocationMarker setValue={setValue} />

      </MapContainer>

    </div>
  )
}