// MapView.js
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export const MapView = () => {
  const position = [-6.8222, 107.1425]; // Contoh: Cianjur (lat, lng)

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "636px", width: "100%" }}
      className="rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Ini adalah Cianjur. 🏙️</Popup>
      </Marker>
    </MapContainer>
  );
};
