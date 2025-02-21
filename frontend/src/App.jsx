import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Importa tus páginas o componentes
import Home from "./pages/Home";
import CorredoresPage from "./components/CorredoresPage";
import MetroPage from "./components/MetroPage";
import RecargaCorredores from "./components/RecargaCorredores";
import TarifasPage from "./components/TarifasPage";
import AdquiereTarjetaPage from "./components/AdquiereTarjetaPage";

function App() {
  return (
    <Layout>
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<Home />} />

        {/* Sección Corredores con subrutas */}
        <Route path="/corredores" element={<CorredoresPage />} />
        <Route path="/corredores/recarga" element={<RecargaCorredores />} />

        {/* Sección Metro */}
        <Route path="/metro" element={<MetroPage />} />

        {/* Sección Tarifas */}
        <Route path="/tarifas" element={<TarifasPage />} />

        {/* Sección AdquiereTarjeta */}
        <Route path="/tarjeta" element={<AdquiereTarjetaPage />} />
      </Routes>
    </Layout>
  );
}

export default App;

