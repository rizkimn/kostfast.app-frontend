'use client';

import { useMemo, useRef } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-rotate";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "@assets/style/custom-leaflet.css";
import { Icon, IconOptions } from "leaflet";
import { Carto, Osm, Esri, Stamen } from "@/utils/MapTileStyle";

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

  const ZoomInIcon : string = `
    <div class="w-full h-full flex justify-center items-center">
      <svg fill="#000000" width="18px" height="18px" viewBox="0 0 0.48 0.48" id="zoom-in-alt" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" class="icon line-color">
        <path id="secondary" d="M0.22 0.28V0.16m-0.06 0.06h0.12" style="fill: none; stroke: #000000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 0.03;"/>
        <path id="primary" d="m0.42 0.42 -0.087 -0.087M0.38 0.22a0.16 0.16 0 1 1 -0.16 -0.16 0.16 0.16 0 0 1 0.16 0.16" style="fill: none; stroke: #000000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 0.04;"/>
      </svg>
    </div>
  `;

  const ZoomOutIcon : string = `
    <div class="w-full h-full flex justify-center items-center">
      <svg fill="#000000" width="18px" height="18px" viewBox="0 0 0.54 0.54" id="zoom-out-alt" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" class="icon line-color">
        <path id="secondary" x1="8" y1="11" x2="14" y2="11" style="fill: none; stroke: #000000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 0.04;" d="M0.18 0.247L0.315 0.247"/>
        <path id="primary" d="M0.427 0.247a0.18 0.18 0 1 1 -0.18 -0.18 0.18 0.18 0 0 1 0.18 0.18m0.045 0.225 -0.098 -0.098" style="fill: none; stroke: #000000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 0.04;"/>
      </svg>
    </div>
  `;

  let MainMarkerIcon : Icon<IconOptions> = new Icon<IconOptions>({
    iconUrl: '/img/map/main-marker.png',
    shadowUrl: '/img/map/main-marker.shadow.png',
    iconSize: [20,30],
    shadowSize: [20,30],
    iconAnchor: [10,30],
  })

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
      <ZoomControl position="topright" zoomInText={ZoomInIcon} zoomOutText={ZoomOutIcon} />
      <Marker
        position={[state.long, state.lat]} 
        draggable={false} 
        title="Fenakopa Home"
        icon={MainMarkerIcon}
      />
    </MapContainer>
  );
}