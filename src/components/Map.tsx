'use client';

import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-rotate";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "@assets/style/custom-leaflet.css";

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
  let mapRef = useRef();

  let state = {
    long: 0.7862307052910213,
    lat: 127.37196452395239,
    center: [0.7862307052910213, 127.37196452395239],
    zoom: 14
  };

  return (
    <MapContainer
      className="w-full h-full"
      whenReady={(mapInstance : any) => {
        mapRef.current = mapInstance;
      }}
      center={[state.long, state.lat]}
      zoom={state.zoom}
      zoomControl={true}
      rotate={true}
      touchRotate={true}
      rotateControl={{
        closeOnZeroBearing: false,
        position: 'topright',
      }}
      bearing={0}
      placeholder={ <MapPlaceholder /> }
    >
      <TileLayer
        // Deafult Style
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        // attribution='&amp;copy <a href="https:/www./openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        
        // Real World Style 
        // url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        // attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
      />
      <Marker position={[state.long, state.lat]} draggable={false} title="Fenakopa Home">
        <Popup>
          <span className="font-bold">Fenakopa Home</span>
        </Popup>
      </Marker>
    </MapContainer>
  );
}