'use client';

import { useRef } from "react";
import { MapContainer, TileLayer, Marker, ZoomControl } from "react-leaflet";
import { Carto } from "@/data/mapTileStyle";
import { ZoomInIcon, ZoomOutIcon, MainMarkerIcon } from "@/data/leafletIcons";

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
    long: 0.7857197009930765,
    lat: 127.3809882897151,
    center: [0.7857197009930765, 127.3809882897151],
    zoom: 14
  };  

  return (
    <MapContainer
      className="w-full h-full bg-neutral-100 rounded-xl overflow-hidden shadow-xl"
      whenReady={(mapInstance : any) => {
        mapRef.current = mapInstance;
      }}
      center={[state.long, state.lat]}
      zoom={state.zoom}
      zoomControl={false}
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
        url={Carto.scale2.light_all.url}
      />
      <ZoomControl 
        position="topright" 
        zoomInText={ZoomInIcon} 
        zoomOutText={ZoomOutIcon} 
      />
      <Marker
        position={[state.long, state.lat]} 
        draggable={false} 
        title="Fenakopa Home"
        icon={MainMarkerIcon}
      />
    </MapContainer>
  );
}