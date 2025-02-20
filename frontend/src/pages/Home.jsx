import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewsCarousel from "../components/NewsCarousel";
import "../styles/Home.css";

function Home() {
  const [isHovered, setIsHovered] = useState("");

  return (
    <div className="home-page">
      <nav className="sidebar">
        <Link
          to="/metro"
          className={`nav-button ${isHovered === "metro" ? "hovered" : ""}`}
          onMouseEnter={() => setIsHovered("metro")}
          onMouseLeave={() => setIsHovered("")}
        >
          Metro de Lima
        </Link>

        <Link
          to="/corredores"
          className={`nav-button ${
            isHovered === "corredores" ? "hovered" : ""
          }`}
          onMouseEnter={() => setIsHovered("corredores")}
          onMouseLeave={() => setIsHovered("")}
        >
          Corredores
        </Link>

        <button
          className={`nav-button ${isHovered === "atencion" ? "hovered" : ""}`}
          onMouseEnter={() => setIsHovered("atencion")}
          onMouseLeave={() => setIsHovered("")}
        >
          Atención al pasajero
        </button>

        <button
          className={`nav-button ${isHovered === "tarifas" ? "hovered" : ""}`}
          onMouseEnter={() => setIsHovered("tarifas")}
          onMouseLeave={() => setIsHovered("")}
        >
          Tarifas
        </button>

        <button
          className={`nav-button ${isHovered === "tarjeta" ? "hovered" : ""}`}
          onMouseEnter={() => setIsHovered("tarjeta")}
          onMouseLeave={() => setIsHovered("")}
        >
          Adquiere tu tarjeta
        </button>
      </nav>

      <main className="content">
        <h1>Bienvenido al Sistema de Transporte de Lima</h1>
        <div className="news-carousel-container">
          <NewsCarousel />
        </div>
      </main>
    </div>
  );
}

export default Home;
