import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/AdquiereTarjetaPage.css";

function AdquiereTarjetaPage() {
  const [isHovered, setIsHovered] = useState("");

  return (
    <div className="adquiere-tarjeta-page">
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
        <h2>ADQUIERE TU TARJETA</h2>

       <div className="menu-buttons">
                 {[
                   { path: "/metro", label: "Metro de Lima" },
                   { path: "/corredores", label: "Corredores" },
                   { path: "/atencion", label: "Atención al pasajero" },
                   { path: "/tarifas", label: "Tarifas" }
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
        <h1>Centros de Adquisición de Tarjetas</h1>
        <TarjetaTable />
      </main>
    </div>
  );
}

function TarjetaTable() {
  return (
    <div className="table-container">
    <table className="tarjeta-table">
      <thead>
        <tr>
          <th>TRANSPORTE</th>
          <th>TIPO DE TARJETA</th>
          <th>ESTACIÓN</th>
          <th>HORARIO</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan="2" className="green">Línea 1</td>
          <td>Tarjeta para público general</td>
          <td>Todas las estaciones</td>
          <td>
            Lunes a sábado <br /> 05:00 - 22:00 <br /> Domingos y feriados <br /> 05:30 - 22:00
          </td>
        </tr>
        <tr>
          <td>Tarjeta para escolares y universitarios</td>
          <td>
            Pumacahua, Jorge Chávez, <br /> San Borja Sur, Los Postes, El Ángel
          </td>
          <td>
            Lunes a viernes <br /> 08:00 - 20:00 <br /> Sábados <br /> 08:00 - 13:00
          </td>
        </tr>
        <tr>
          <td rowSpan="2" className="yellow">Línea 2</td>
          <td>Tarjeta para público general</td>
          <td>
            Evitamiento, Óvalo Santa Anita, <br /> Colectora Industrial, Hermilio Valdizán, <br /> Mercado Santa Anita
          </td>
          <td>
            Lunes a domingo <br /> 06:00 - 23:00
          </td>
        </tr>
        <tr>
          <td>Tarjeta para escolares y universitarios</td>
          <td>Mismo que público general</td>
          <td>Mismo horario</td>
        </tr>
        <tr>
          <td rowSpan="2" className="red">Corredor</td>
          <td>Tarjeta para público general</td>
          <td>
            Terminal Chimpu Ocllo, Terminal Naranjal, <br /> Estación Central, Terminal Matellini
          </td>
          <td>
            Lunes a sábado <br /> 06:00 - 22:00
          </td>
        </tr>
        <tr>
          <td>Tarjeta para escolares y universitarios</td>
          <td>Estación Central, Estación Javier Prado</td>
          <td>
            Lunes a viernes <br /> 06:30 - 18:00
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}

export default AdquiereTarjetaPage;
