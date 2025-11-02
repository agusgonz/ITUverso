import React, { useState, useEffect, useRef } from "react";

const ROTATING_SECTIONS = [
  {
    id: 1,
    titulo: "Comentarios",
    clase: "comentarios-grid",
    contenido: [
      { texto: "No saben lo que me ayudaron a entender BD.", usuario: "Alan Pérez", semestre: "4° Semestre" },
      { texto: "Alguien conoce el modelo de evaluación de sistemas operativos??", usuario: "Catalina Rodríguez", semestre: "3° Semestre" },
      { texto: "Recomiendo Figma para diseño de páginas web y diagramas, muy buena.", usuario: "Amparo Lino", semestre: "5° Semestre" },
    ],
  },
  {
    id: 2,
    titulo: "Mira qué hay de nuevo en estas materias",
    clase: "materias-grid",
    contenido: [
      {
        nombre: "Modelo de Datos",
        profesor: "Profesor Luis Chiaramonte",
        imagen: "/modelodedatos.jpg",
      },
      {
        nombre: "Base de Datos Relacionales",
        profesor: "Profesora Carolina Pennisi",
        imagen: "/basededatos.png",
      },
    ],
  },
];
const ContentRotator = () => {
  const [indiceActual, setIndiceActual] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervaloRef = useRef(null);

  const tiempoDeMuestra = 6000;
  const tiempoDeTransicion = 500;

  const iniciarRotacion = () => {
    intervaloRef.current = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIndiceActual((prev) => (prev + 1) % ROTATING_SECTIONS.length);
        setIsTransitioning(false);
      }, tiempoDeTransicion);
    }, tiempoDeMuestra);
  };

  useEffect(() => {
    iniciarRotacion();
    return () => clearInterval(intervaloRef.current);
  }, []);

  const handleCircleClick = (index) => {
    clearInterval(intervaloRef.current);
    setIsTransitioning(true);
    setTimeout(() => {
      setIndiceActual(index);
      setIsTransitioning(false);
      iniciarRotacion();
    }, tiempoDeTransicion);
  };

  const seccionActual = ROTATING_SECTIONS[indiceActual];
  const contentClass = isTransitioning ? "content-exit" : "content-enter";

  const renderContent = (seccion) => {
    if (seccion.id === 1) {
      return seccion.contenido.map((item, index) => (
        <div key={index} className="comentario">
          <p>“{item.texto}”</p>
          <div className="usuario">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 20H6c-2.2 0-4-1.8-4-4 0-4.4 3.6-8 8-8s8 3.6 8 8c0 2.2-1.8 4-4 4zM12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
            </svg>
            <div>
              <strong>{item.usuario}</strong><br />
              <span>{item.semestre}</span>
            </div>
          </div>
        </div>
      ));
    }

    if (seccion.id === 2) {
      return seccion.contenido.map((item, index) => (
        <div key={index} className="materia-card">
          <img src={item.imagen} alt={item.nombre} className="materia-img" />
          <div className="materia-info">
            <strong>{item.nombre}</strong>
            <p>{item.profesor}</p>
          </div>
        </div>
      ));
    }

    return null;
  };

  return (
    <section className="rotating-content-section">
      <h2 className="section-title">{seccionActual.titulo}</h2>

      <div key={seccionActual.id} className={`${seccionActual.clase} ${contentClass}`}>
        {renderContent(seccionActual)}
      </div>

      <div className="rotator-dots">
        {ROTATING_SECTIONS.map((_, index) => (
          <button
            key={index}
            className={`dot ${indiceActual === index ? "active" : ""}`}
            onClick={() => handleCircleClick(index)}
            aria-label={`Ir a sección ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ContentRotator;