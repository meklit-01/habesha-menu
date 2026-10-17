"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";

const RESTAURANT = [8.999, 38.7896];

const DELIVERY = [8.991, 38.7905];

export default function DeliveryMap() {
  return (
    <MapContainer center={RESTAURANT} zoom={14} style={{ height: "420px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />

      <Marker position={RESTAURANT}>
        <Popup>Mesob Habesha Kitchen — Bole</Popup>
      </Marker>

      <Marker position={DELIVERY}>
        <Popup>Delivery address — Mexico</Popup>
      </Marker>
    </MapContainer>
  );
}
