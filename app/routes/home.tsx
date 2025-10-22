import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../app.css"; // importa tus estilos globales

export default function Home() {
  return (
    <>
      <Header />

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

      <section className="comentarios">
        <h2><strong>Comentarios</strong></h2>
        <div className="comentarios-grid">
          <div className="comentario">
            <p>“No saben lo que me ayudaron a entender BD.”</p>
            <div className="usuario">
              <i className="bi bi-person-circle"></i>
              <div>
                <strong>Alan Pérez</strong><br />
                <span>4° Semestre</span>
              </div>
            </div>
          </div>

          <div className="comentario">
            <p>“Alguien conoce el modelo de evaluación de sistemas operativos??”</p>
            <div className="usuario">
              <i className="bi bi-person-circle"></i>
              <div>
                <strong>Catalina Rodríguez</strong><br />
                <span>3° Semestre</span>
              </div>
            </div>
          </div>

          <div className="comentario">
            <p>“Recomiendo Figma para diseño de páginas web y diagramas, muy buena.”</p>
            <div className="usuario">
              <i className="bi bi-person-circle"></i>
              <div>
                <strong>Amparo Lino</strong><br />
                <span>5° Semestre</span>
              </div>
            </div>
          </div>
        </div>

      </section>

      <Footer />
    </>
  );
}
