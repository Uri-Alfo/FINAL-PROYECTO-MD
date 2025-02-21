import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/MetroPage.css";
import RecargaMetro from "./RecargaMetro";

function MetroPage() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [showRecarga, setShowRecarga] = useState(false);

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

  const toggleTable = () => {
    setShowTable(!showTable);
  };

  const horarios = [
    { linea: "Línea 1", dia: "Lunes a Viernes", horario: "5:00 AM - 11:59 PM" },
    { linea: "Línea 1", dia: "Sábados", horario: "6:00 AM - 11:59 PM" },
    { linea: "Línea 1", dia: "Domingos y Feriados", horario: "6:00 AM - 10:59 PM" },
    { linea: "Línea 2", dia: "Lunes a Viernes", horario: "5:00 AM - 11:59 PM" },
    { linea: "Línea 2", dia: "Sábados", horario: "5:00 AM - 11:59 PM" },
    { linea: "Línea 2", dia: "Domingos y Feriados", horario: "6:00 AM - 10:59 PM" },
  ];

  const groupByLine = (data) => {
    const grouped = {};
    data.forEach((item) => {
      if (!grouped[item.linea]) {
        grouped[item.linea] = [];
      }
      grouped[item.linea].push(item);
    });
    return grouped;
  };

  const groupedHorarios = groupByLine(horarios);

  return (
    <div className="metro-page">
      <Link to="/" className="back-link" title="Volver al inicio">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M15 19l-7-7 7-7" stroke="blue" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
      <nav className="sidebar">
        <h2>METRO DE LIMA</h2>
        <div className="menu-section">
          <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            Línea 1 <span className={`chevron ${isMenuOpen ? "rotated" : ""}`}>▼</span>
          </button>
          {isMenuOpen && (
            <div className="submenu">
              {["ubicacion", "estaciones", "ruta", "distritos"].map((option) => (
                <label key={option} className="submenu-item">
                  <input type="checkbox" checked={selectedOptions.includes(option)} onChange={() => toggleOption(option)} className="form-checkbox" />
                  <span>{getOptionLabel(option)}</span>
                </label>
              ))}
            </div>
          )}
        </div>
        <button className="action-button" onClick={toggleTable}>Horario de atención</button>
        <button className="action-button" onClick={() => setShowRecarga(!showRecarga)}>
          {showRecarga ? "Volver al mapa" : "Recarga tu tarjeta"}
        </button>
        <div className="logos">
          <img src="/images/Logo_linea1.png" alt="Línea 1" className="logo" />
          <img src="/images/Logo_linea2.png" alt="Línea 2" className="logo" />
        </div>
      </nav>
      <main className="content">
        {!showRecarga && !showTable && <h1>Mapa del Metro de Lima</h1>}
        {showRecarga && <RecargaMetro onClose={() => setShowRecarga(false)} />}
        {showTable && (
          <div className="table-container">
            <h2 className="table-title">Horarios de atención del Metro de Lima</h2>
            <table border="1" className="horario-table">
              <thead>
                <tr>
                  <th>Línea</th>
                  <th>Día</th>
                  <th>Horario</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(groupedHorarios).map((linea) => (
                  <React.Fragment key={linea}>
                    {groupedHorarios[linea].map((horario, index) => (
                      <tr key={`${linea}-${index}`}>
                        {index === 0 && <td rowSpan={groupedHorarios[linea].length}>{linea}</td>}
                        <td>{horario.dia}</td>
                        <td>{horario.horario}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
            <img src="images/Horario_Metro_de_Lima.webp" alt="Información adicional del metro" className="info-image" />
          </div>
        )}
      </main>
    </div>
  );
}

export default MetroPage;
