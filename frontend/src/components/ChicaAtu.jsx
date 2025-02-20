import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/ChicaAtu.css";

function ChicaAtu() {
  const { pathname } = useLocation();

  if (pathname !== "/") {
    return null;
  }

  return (
    <img src="/images/Chica_ATU.png" alt="Chica ATU" className="chica-atu" />
  );
}

export default ChicaAtu;
