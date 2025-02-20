import React, { useState, useEffect } from "react";
import "../styles/NewsCarousel.css";

const newsItems = [
  {
    id: 1,
    title: "280 Mil Usuarios Seguirán Usando los Corredores",
    description:
      "La ATU y las empresas concesionarias han llegado a un acuerdo para garantizar la continuidad del servicio de los corredores complementarios. Esto beneficiará a miles de pasajeros que dependen de este sistema de transporte todos los días.",
    image: "/images/noticia_1.png",
  },
  {
    id: 2,
    title: "Nueva Frecuencia de Llegada de los Trenes",
    description:
      "A partir de diciembre, los trenes de la Línea 1 del Metro de Lima contarán con una nueva programación de llegada. La frecuencia variará según el día de la semana, optimizando el tiempo de espera y mejorando la experiencia de los pasajeros.",
    image: "/images/noticia_2.png",
  },
  {
    id: 3,
    title: "Plan de Desvío Vehicular en la Línea 2 del Metro",
    description:
      "Debido a los trabajos de construcción de la Línea 2, se ha implementado un plan de desvío en la estación Carmen de la Legua. La ATU promueve un transporte seguro, moderno y sostenible con esta obra que mejorará la conectividad en Lima.",
    image: "/images/noticia_3.png",
  },
  {
    id: 4,
    title: "Ampliación de la Vía Exclusiva del Corredor Rojo",
    description:
      "Los usuarios del Corredor Rojo podrán disfrutar de una mejor movilidad gracias a la ampliación de la vía exclusiva en avenidas clave como Javier Prado, Sánchez Carrión y La Marina. Esta medida permitirá ahorrar hasta 15 minutos en cada viaje.",
    image: "/images/noticia_4.png",
  },
];

function NewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection("right");
      setCurrentIndex((prevIndex) =>
        prevIndex === newsItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? newsItems.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex === newsItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="news-carousel">
      <div className="news-carousel-inner">
        <img
          src={newsItems[currentIndex].image || "/placeholder.svg"}
          alt={newsItems[currentIndex].title}
          className="news-carousel-image"
        />

        <div className="news-carousel-overlay"></div>

        <div
          className={
            "news-carousel-content " +
            (direction === "right" ? "fade-in-right" : "fade-in-left")
          }
          key={newsItems[currentIndex].id}
        >
          <h2 className="news-carousel-title">
            {newsItems[currentIndex].title}
          </h2>
          <p className="news-carousel-description">
            {newsItems[currentIndex].description}
          </p>
        </div>

        <button
          onClick={goToPrevious}
          className="news-carousel-arrow left"
          aria-label="Previous slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M15 19l-7-7 7-7"
              stroke="white"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="news-carousel-arrow right"
          aria-label="Next slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M9 5l7 7-7 7"
              stroke="white"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="news-carousel-dots">
          {newsItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={index === currentIndex ? "active" : ""}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsCarousel;
