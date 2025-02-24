import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/RecargaCorredores.css";

export default function RecargaTarjeta() {
  const [cardNumber, setCardNumber] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const amounts = [2, 5, 10, 20, 50];
  const paymentMethods = [
    { id: "bcp", name: "BCP", image: "Bcp_logo.png" },
    { id: "yape", name: "Yape", image: "Yape_logo.png" },
    { id: "bbva", name: "BBVA", image: "Bbva_logo.png" },
    { id: "mastercard", name: "Mastercard", image: "Mastercard_logo.png" }
  ];

  const validateCardNumber = (number) => /^\d{16}$/.test(number);

  const handleRecharge = async () => {
    if (!validateCardNumber(cardNumber) || !selectedAmount || !selectedPayment) {
      alert("Por favor ingresa datos válidos.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setShowSuccess(true);
      setCardNumber("");
      setSelectedAmount(null);
      setSelectedPayment(null);
      setShowConfirmation(false);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="container">
      {/* Botón para volver a Corredores */}
      <Link to="/corredores" className="back-button">← Volver a Corredores</Link>

      {/* Encabezado */}
      <header className="header">
        <img src="Sanmarcos_logo.png" alt="Corredores" className="logo" />
        <h1>Corredores</h1>
      </header>

      {/* Formulario de Recarga */}
      <main className="content">
        <h2 className="title">RECARGA TU TARJETA</h2>
        <p className="description">Recarga tu tarjeta de manera rápida y segura</p>

        <input
          type="text"
          placeholder="Ingresa tu número de tarjeta"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, "").slice(0, 16))}
          className="input"
          maxLength={16}
        />
        {cardNumber && !validateCardNumber(cardNumber) && (
          <p className="error-text">El número de tarjeta debe tener 16 dígitos</p>
        )}

        {/* Selección de monto */}
        <h3>Selecciona el monto</h3>
        <div className="amount-container">
          {amounts.map((amount) => (
            <button
              key={amount}
              className={`amount-btn ${selectedAmount === amount ? "selected" : ""}`}
              onClick={() => setSelectedAmount(amount)}
            >
              S/ {amount}
            </button>
          ))}
        </div>

        {/* Métodos de pago */}
        <h3>Métodos de pago</h3>
        <div className="payment-container">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className={`payment-method ${selectedPayment === method.id ? "selected" : ""}`}
              onClick={() => setSelectedPayment(method.id)}
            >
              <img src={method.image} alt={method.name} className="payment-logo" />
              <p>{method.name}</p>
            </div>
          ))}
        </div>

        {/* Botón de Confirmación */}
        <button
          className="confirm-btn"
          onClick={() => setShowConfirmation(true)}
          disabled={!validateCardNumber(cardNumber) || !selectedAmount || !selectedPayment}
        >
          Confirmar recarga
        </button>

        {/* Modal de Confirmación */}
        {showConfirmation && (
          <div className="modal">
            <div className="modal-content">
              <h3>Confirmar Recarga</h3>
              <p>Número de tarjeta: {cardNumber}</p>
              <p>Monto: S/ {selectedAmount}</p>
              <p>Método de pago: {paymentMethods.find((m) => m.id === selectedPayment)?.name}</p>
              <button className="modal-btn cancel" onClick={() => setShowConfirmation(false)}>Cancelar</button>
              <button className="modal-btn confirm" onClick={handleRecharge}>
                {isLoading ? "Procesando..." : "Confirmar pago"}
              </button>
            </div>
          </div>
        )}

        {/* Mensaje de Éxito */}
        {showSuccess && (
          <div className="success-message">
            <h3>¡Recarga Exitosa!</h3>
            <p>Tu tarjeta ha sido recargada correctamente.</p>
            <button className="success-btn" onClick={() => setShowSuccess(false)}>Realizar otra recarga</button>
          </div>
        )}
      </main>
    </div>
  );
}
