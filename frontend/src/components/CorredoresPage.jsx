import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/CorredoresPage.css";
import Mapa from "../components/Mapa"; // Importamos el mapa

function CorredoresPage() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleOption = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const getOptionLabel = (option) => {
    const labels = {
      ubicacion: "Tu ubicación actual",
      paraderos: "Paraderos-209",
      ruta: "Paradero más cercano",
      distritos: "Delimitar distritos",
    };
    return labels[option] || option;
  };

  return (
    <div className="corredores-page">
      <Link to="/" className="back-link" title="Volver al inicio">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M15 19l-7-7 7-7"
            stroke="blue"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
      <nav className="sidebar">
        <h2>CORREDORES</h2>
        <div className="menu-section">
          <button
            className="menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Corredor Rojo
            <span className={`chevron ${isMenuOpen ? "rotated" : ""}`}>▼</span>
          </button>
          {isMenuOpen && (
            <div className="submenu">
              {["ubicacion", "paraderos", "ruta", "distritos"].map((option) => (
                <label key={option} className="submenu-item">
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(option)}
                    onChange={() => toggleOption(option)}
                    className="form-checkbox"
                  />
                  <span>{getOptionLabel(option)}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        <button className="action-button">Horario de atención</button>

        {/* Convertimos el botón en un Link para que funcione */}
        <Link to="/corredores/recarga" className="action-button">
          Recarga tu tarjeta
        </Link>

        <div className="logos">
          <img
            src="/images/Logo_corre_rojo.jpg"
            alt="Corredor Rojo"
            className="logo"
          />
          <img
            src="/images/Logo_corre_azul.jpg"
            alt="Corredor Azul"
            className="logo"
          />
          <img
            src="/images/Logo_corre_morado.jpg"
            alt="Corredor Morado"
            className="logo"
          />
        </div>
      </nav>

      <main className="content">
  <h1>Mapa del corredor</h1>
  <div className="map-wrapper"> {/* Aquí se aplica la corrección */}
    <Mapa />
  </div>
</main>

    </div>
  );
}

export default CorredoresPage;
