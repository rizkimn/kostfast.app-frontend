'use client';

import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import "@assets/style/custom-leaflet.css"

function MapPlaceholder() : React.ReactElement

{
  return (
    <p>
      <noscript>You need to enable JavaScript to see this map.</noscript>
    </p>
  )
}

export default function Map() : React.ReactElement
{
  return (
    <MapContainer className="w-full h-full" center={[0.7862307052910213, 127.37196452395239]} zoom={14} scrollWheelZoom={true} placeholder={ <MapPlaceholder /> }>
      <TileLayer
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[0.7862307052910213, 127.37196452395239]} title="Fenakopa Home">
        <Popup>
          Fenakopa Home
        </Popup>
      </Marker>
    </MapContainer>
  );
}