import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Define types for the position
type LatLngTuple = [number, number];

// Fix for the missing marker icon by overriding the default icon options
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Define props interface for ChangeMapView
interface ChangeMapViewProps {
  center: LatLngTuple;
}

// This component will handle updating the map's center
function ChangeMapView({ center }: ChangeMapViewProps): null {
  const map = useMap();

  useEffect(() => {
    map.setView(center);
  }, [center, map]);

  return null;
}

// Define props interface for Map component
interface MapProps {
  position?: LatLngTuple;
}

// Extend the HTMLElement interface to include _leaflet_id
interface LeafletHTMLElement extends HTMLElement {
  _leaflet_id?: string | null;
}

export default function Map({
  position = [51.505, -0.09],
}: MapProps): JSX.Element {
  useEffect(() => {
    return () => {
      // This cleanup ensures that the map instance is properly destroyed.
      const mapContainer = document.querySelector(
        ".leaflet-container"
      ) as LeafletHTMLElement;
      if (mapContainer) {
        mapContainer._leaflet_id = null;
      }
    };
  }, []);

  return (
    <div className="h-screen container mx-auto">
      <MapContainer
        className="h-full"
        center={position}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <ChangeMapView center={position} />
      </MapContainer>
    </div>
  );
}
