import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/TarifasPage.css";

function TarifasPage() {
  const [isHovered, setIsHovered] = useState("");

  return (
    <div className="tarifas-page">
      {/* Sidebar */}
      <nav className="sidebar">
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
        <h2>TARIFAS</h2>

        <div className="menu-buttons">
          {[
            { path: "/metro", label: "Metro de Lima" },
            { path: "/corredores", label: "Corredores" },
            { path: "/atencion", label: "Atención al pasajero" },
            { path: "/tarjeta", label: "Adquiere tu tarjeta" }
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`action-button ${isHovered === item.path ? "hovered" : ""}`}
              onMouseEnter={() => setIsHovered(item.path)}
              onMouseLeave={() => setIsHovered("")}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="content">
        <h1>Tarifas del Transporte Público</h1>
        <TarifasTable />
      </main>
    </div>
  );
}

function TarifasTable() {
  return (
    <>
      <div className="table-container">
        <table className="tarifas-table">
          <thead>
            <tr>
              <th>METRO</th>
              <th>PASAJE ADULTO<br />(pasajeros en general)</th>
              <th>PASAJE MEDIO<br />(escolares y universitarios)</th>
              <th>TARJETA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="green">Línea 1</td>
              <td>S/1.50</td>
              <td>S/0.75</td>
              <td>S/5.00</td>
            </tr>
            <tr>
              <td className="yellow">Línea 2</td>
              <td>S/1.40</td>
              <td>S/0.70</td>
              <td>S/7.50</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="table-container">
        <table className="tarifas-table">
          <thead>
            <tr>
              <th>CORREDOR</th>
              <th>PASAJE ADULTO<br />(pasajeros en general)</th>
              <th>PASAJE MEDIO<br />(escolares y universitarios)</th>
              <th>TARJETA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="red">Rojo</td>
              <td>S/2.20</td>
              <td>S/1.10</td>
              <td rowSpan="3">S/4.50</td>
            </tr>
            <tr>
              <td className="purple">Morado</td>
              <td>S/2.50</td>
              <td>S/1.25</td>
            </tr>
            <tr>
              <td className="blue">Azul</td>
              <td>S/2.20</td>
              <td>S/1.10</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TarifasPage;
