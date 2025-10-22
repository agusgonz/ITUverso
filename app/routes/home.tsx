import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../app.css"; // importa tus estilos globales

export default function Home() {
  return (
    <>
      <Header />

      <section className="hero">
        <div className="hero-text">
          <h1>📚 Bienvenido a ITUverso</h1>
          <p>
            El espacio colaborativo donde los alumnos del ITU comparten apuntes,
            archivos y experiencias académicas.
          </p>
        </div>
        <img src="/hero.png" alt="Hero" className="hero-img" />
      </section>

      <section className="posts">
        <h2>Posts recientes</h2>
        <div className="card-grid">
          <article className="card">
            <img src="/poo.jpg" alt="POO" className="card-img" />
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
            <img src="/diseno.jpg" alt="Diseño de software" className="card-img" />
            <div className="card-body">
              <h3>Diseño de Software - Ana Martínez</h3>
              <p>
                Mapa conceptual sobre patrones de diseño: Singleton, Observer y Factory.
              </p>
              <span className="tags">#DiseñoDeSoftware #2°Año #Patrones</span>
            </div>
          </article>

          <article className="card">
            <img src="/redes.jpg" alt="Redes" className="card-img" />
            <div className="card-body">
              <h3>Redes - Amparo Lino</h3>
              <p>
                Resumen práctico sobre protocolos de red y modelo OSI, ideal para repasar antes del parcial.
              </p>
              <span className="tags">#Redes #3°Año</span>
            </div>
          </article>
        </div>
      </section>

      <section className="comentarios">
        <h2>Comentarios</h2>
        <div className="comentarios-grid">
          <div className="comentario">
            <p>“No saben lo que me ayudaron a entender BD.”</p>
            <div className="usuario">
              <img src="/avatar1.png" alt="Alan Pérez" className="avatar" />
              <div>
                <strong>Alan Pérez</strong><br />
                <span>4° semestre</span>
              </div>
            </div>
          </div>

          <div className="comentario">
            <p>“Alguien conoce el modelo de evaluación de sistemas operativos??”</p>
            <div className="usuario">
              <img src="/avatar2.png" alt="Catalina Rodríguez" className="avatar" />
              <div>
                <strong>Catalina Rodríguez</strong><br />
                <span>3° semestre</span>
              </div>
            </div>
          </div>

          <div className="comentario">
            <p>“Recomiendo Figma para diseño de páginas web y diagramas, muy buena.”</p>
            <div className="usuario">
              <img src="/avatar3.png" alt="Amparo Lino" className="avatar" />
              <div>
                <strong>Amparo Lino</strong><br />
                <span>5° semestre</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
