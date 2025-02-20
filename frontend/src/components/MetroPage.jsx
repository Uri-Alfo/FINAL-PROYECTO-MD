import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/MetroPage.css";

function MetroPage() {
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
      estaciones: "Estaciones",
      ruta: "Estación más cercana",
      distritos: "Delimitar distritos",
    };
    return labels[option] || option;
  };

  return (
    <div className="metro-page">
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
        <h2>METRO DE LIMA</h2>
        <div className="menu-section">
          <button
            className="menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Línea 1
            <span className={`chevron ${isMenuOpen ? "rotated" : ""}`}>▼</span>
          </button>
          {isMenuOpen && (
            <div className="submenu">
              {["ubicacion", "estaciones", "ruta", "distritos"].map(
                (option) => (
                  <label key={option} className="submenu-item">
                    <input
                      type="checkbox"
                      checked={selectedOptions.includes(option)}
                      onChange={() => toggleOption(option)}
                      className="form-checkbox"
                    />
                    <span>{getOptionLabel(option)}</span>
                  </label>
                )
              )}
            </div>
          )}
        </div>
        <button className="action-button">Horario de atención</button>
        <button className="action-button">Recarga tu tarjeta</button>
        <div className="logos">
          <img src="/images/Logo_linea1.png" alt="Línea 1" className="logo" />
          <img src="/images/Logo_linea2.png" alt="Línea 2" className="logo" />
        </div>
      </nav>
      <main className="content">
        <h1>Mapa del Metro de Lima</h1>
      </main>
    </div>
  );
}

export default MetroPage;
