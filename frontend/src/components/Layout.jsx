import React from "react";
import { Link } from "react-router-dom";
import "../styles/Layout.css";
import ChicaAtu from "../components/ChicaAtu";

function Layout({ children }) {
  return (
    <div className="layout">
      <header className="layout-header">
        <Link to="/">
          <img src="/images/Logo_ATU.png" alt="Logo ATU" className="logo-atu" />
        </Link>
        <Link to="/">
          <img
            src="/images/Logo_Minitran.png"
            alt="Logo Ministerio"
            className="logo-minitran"
          />
        </Link>
      </header>
      <main className="layout-content">
        {children}
        <ChicaAtu />
      </main>
    </div>
  );
}

export default Layout;
