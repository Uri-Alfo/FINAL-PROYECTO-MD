import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/CorredoresPage.css";
import Mapa from "../components/Mapa";
import RecargaCorredores from "./RecargaCorredores";

function CorredoresPage() {
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
      paraderos: "Paraderos-209",
      ruta: "Paradero más cercano",
      distritos: "Delimitar distritos",
    };
    return labels[option] || option;
  };

  const toggleTable = () => {
    setShowTable(!showTable);
  };

  const horarios = [
    { Corredor: "Corredor Rojo", dia: "Lunes a Viernes", horario: "5:00 AM - 11:59 PM" },
    { Corredor: "Corredor Rojo", dia: "Sábados", horario: "6:00 AM - 11:59 PM" },
    { Corredor: "Corredor Rojo", dia: "Domingos y Feriados", horario: "6:00 AM - 10:59 PM" },
    { Corredor: "Corredor Azul", dia: "Lunes a Viernes", horario: "5:00 AM - 11:59 PM" },
    { Corredor: "Corredor Azul", dia: "Sábados", horario: "5:00 AM - 11:59 PM" },
    { Corredor: "Corredor Azul", dia: "Domingos y Feriados", horario: "6:00 AM - 10:59 PM" },
    { Corredor: "Corredor Morado", dia: "Lunes a Viernes", horario: "5:00 AM - 11:59 PM" },
    { Corredor: "Corredor Morado", dia: "Sábados", horario: "5:00 AM - 11:59 PM" },
    { Corredor: "Corredor Morado", dia: "Domingos y Feriados", horario: "6:00 AM - 10:59 PM" },
  ];

  const groupByLine = (data) => {
    const grouped = {};
    data.forEach((item) => {
      if (!grouped[item.Corredor]) {
        grouped[item.Corredor] = [];
      }
      grouped[item.Corredor].push(item);
    });
    return grouped;
  };

  const groupedHorarios = groupByLine(horarios);

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
          <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
        <button className="action-button" onClick={toggleTable}>Horario de atención</button>
        <button className="action-button" onClick={() => setShowRecarga(!showRecarga)}>
          Recarga tu tarjeta
        </button>
        <div className="logos">
          <img src="/images/Logo_corre_rojo.jpg" alt="Corredor Rojo" className="logo" />
          <img src="/images/Logo_corre_azul.jpg" alt="Corredor Azul" className="logo" />
          <img src="/images/Logo_corre_morado.jpg" alt="Corredor Morado" className="logo" />
        </div>
      </nav>
      <main className="content">
        {showRecarga ? (
          <RecargaCorredores onClose={() => setShowRecarga(false)} />
        ) : showTable ? (
          <div className="table-container">
            <h2 className="table-title">Horarios de atención de los Corredores</h2>
            <table border="1" className="horario-table">
              <thead>
                <tr>
                  <th>Corredor</th>
                  <th>Día</th>
                  <th>Horario</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(groupedHorarios).map((Corredor) => (
                  <React.Fragment key={Corredor}>
                    {groupedHorarios[Corredor].map((horario, index) => (
                      <tr key={`${Corredor}-${index}`}>
                        {index === 0 && (
                          <td rowSpan={groupedHorarios[Corredor].length}>{Corredor}</td>
                        )}
                        <td>{horario.dia}</td>
                        <td>{horario.horario}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <h1>Mapa del corredor</h1>
            <div className="map-wrapper">
              <Mapa />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default CorredoresPage;
