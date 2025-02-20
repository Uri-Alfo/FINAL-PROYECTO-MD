import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Importa los estilos de Leaflet
import "../styles/Mapa.css"; // Asegura que se importe el CSS

const Mapa = () => {
  return (
    <MapContainer
      center={[-12.0464, -77.0428]} // Lima, Perú
      zoom={13}
      className="mapa-container" // Se usa la clase correcta
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default Mapa;
