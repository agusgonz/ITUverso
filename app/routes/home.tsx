import "../app.css"; // importa tus estilos globales
import ContentRotator from "../Components/ContentRotator";

export default function Home() {
  return (
    <>

      <section className="hero">
        <div className="hero-text">
          <h1>📚 Bienvenido a <strong>ITUverso</strong></h1>
          <p>
            El espacio colaborativo donde los alumnos del ITU comparten apuntes,
            archivos y experiencias académicas.
          </p>
        </div>
        <a href="#"><img src="/programador.jpg" alt="Hero" className="hero-img" /></a>
      </section>

      <section className="posts">
        <h2><strong>Posts recientes</strong></h2>
        <div className="card-grid">
          <article className="card">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="card-gif"
            >
              <source src="/poo.mp4" type="video/mp4" />
            </video>
            <div className="card-body">
              <h3>POO - Juan Pérez</h3>
              <p>
                Apuntes de programación orientada a objetos, con ejemplos de
                herencia y polimorfismo.
              </p>
              <span className="tags">#Programación #2°Año #POO</span>
            </div>
          </article>

          <article className="card">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="card-gif"
            >
              <source src="/diseño.mp4" type="video/mp4" />
            </video>
            <div className="card-body">
              <h3>Diseño de Software - Ana Martínez</h3>
              <p>
                Mapa conceptual sobre patrones de diseño: Singleton, Observer y Factory.
              </p>
              <span className="tags">#DiseñoDeSoftware #2°Año #Patrones</span>
            </div>
          </article>

          <article className="card">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="card-gif"
            >
              <source src="/redes.mp4" type="video/mp4" />
            </video>
            <div className="card-body">
              <h3>Redes - Amparo Lino</h3>
              <p>
                Resumen práctico sobre protocolos de red y modelo OSI, ideal para repasar antes del parcial.
              </p>
              <span className="tags">#Redes #3°Año</span>
            </div>
          </article>

          {/* MODIFICAR */}
          <article className="card">
            <img src="/patoituverso.jpg" alt="imagen"/>
            <div className="card-body">
              <h3>Cuenta UNCuyo</h3>
              <p>
                  Crea tu cuenta UNCuyo fácil y rápido.
              </p>
              <span className="tags">#UNCUYO #365</span>
            </div>
          </article>
          <article className="card">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="card-gif"
            >
              <source src="/poo.mp4" type="video/mp4" />
            </video>
            <div className="card-body">
              <h3>MODIFICAR</h3>
              <p>
                Apuntes de programación orientada a objetos, con ejemplos de
                herencia y polimorfismo.
              </p>
              <span className="tags">#Programación #2°Año #POO</span>
            </div>
          </article>
          
        </div>
      </section>

      <ContentRotator />

    </>
  );
}
