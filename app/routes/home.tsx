import PostCard from "~/Components/Posts";
import "../app.css"; // importa tus estilos globales
import ContentRotator from "../Components/ContentRotator";
import { getRandomImage } from "~/utils/getRandomImage";

const postsMentira = [
  {
    title: "Apuntes: Introducción a Bases de Datos",
    content: "Resumen de modelos de datos, claves primarias y relaciones.",
    author: "Agustín",
    tags: ["bases-de-datos", "intro", "apuntes"],
  },
  {
    title: "Ejercicios resueltos: Álgebra I",
    content: "Resolución paso a paso de sistemas de ecuaciones lineales.",
    author: "María",
    tags: ["álgebra", "ejercicios", "matemática"],
  },
  {
    title: "Guía práctica: Programación I",
    content: "Primeros pasos con Python, variables, loops y funciones.",
    author: "Juan",
    tags: ["programación", "python", "apuntes"],
  },
  {
    title: "Resumen: Redes de Computadoras",
    content: "Modelo OSI, TCP/IP, protocolos y topologías.",
    author: "Camila",
    tags: ["redes", "computación", "resumen"],
  },
  {
    title: "Trabajo práctico: Ingeniería de Software",
    content: "Documentación para el desarrollo de un sistema de reservas.",
    author: "Santiago",
    tags: ["ingeniería", "software", "trabajos"],
  },
  {
    title: "Apuntes: Estructuras de Datos",
    content: "Listas, pilas, colas, árboles y grafos explicados.",
    author: "Agustín",
    tags: ["estructuras", "datos", "apuntes"],
  },
  {
    title: "Resumen: Arquitectura de Computadoras",
    content: "Organización del CPU, memoria y pipelines.",
    author: "Lucía",
    tags: ["arquitectura", "hardware", "materias"],
  },
  {
    title: "Ejercicios: Cálculo I - Derivadas",
    content: "Ejemplos de derivadas con soluciones detalladas.",
    author: "Juan",
    tags: ["cálculo", "derivadas", "matemática"],
  },
  {
    title: "Guía de estudio: Sistemas Operativos",
    content: "Procesos, concurrencia, planificación y memoria.",
    author: "Pablo",
    tags: ["sistemas-operativos", "guia", "computación"],
  },
  {
    title: "Resumen: Probabilidad y Estadística",
    content: "Variables aleatorias, distribuciones y estadística descriptiva.",
    author: "María",
    tags: ["estadística", "probabilidad", "resumen"],
  },
  {
    title: "Punteros en C - Explicación simple",
    content: "Qué son, cómo funcionan y ejemplos de uso.",
    author: "Sofía",
    tags: ["programación", "c", "apuntes"],
  },
  {
    title: "Apuntes: Matemática Discreta",
    content: "Lógica, conjuntos, relaciones y funciones.",
    author: "Agustín",
    tags: ["matemática", "discreta", "apuntes"],
  },
  {
    title: "Resumen: Sistemas Distribuidos",
    content: "Relojes lógicos, comunicación y replicación.",
    author: "Camila",
    tags: ["sistemas-distribuidos", "computación", "resumen"],
  },
  {
    title: "Trabajo práctico: Base de Datos II",
    content: "Normalización y diseño de bases relacionales.",
    author: "Pablo",
    tags: ["bases-de-datos", "trabajos", "normalización"],
  },
  {
    title: "Ejercicios: Álgebra Lineal - Matrices",
    content: "Multiplicación, determinantes y cambio de base.",
    author: "Santiago",
    tags: ["álgebra", "matrices", "ejercicios"],
  },
  {
    title: "Guía: Lenguajes Formales y Autómatas",
    content: "Gramáticas, autómatas finitos y máquinas de Turing.",
    author: "Lucía",
    tags: ["autómatas", "formales", "computación"],
  },
  {
    title: "Introducción a Machine Learning",
    content: "Conceptos básicos, tipos de aprendizaje y ejemplos.",
    author: "Sofía",
    tags: ["machine-learning", "intro", "apuntes"],
  },
  {
    title: "Modelado de Datos - Ejemplos",
    content: "Diagramas ER, dependencias funcionales y cardinalidades.",
    author: "Juan",
    tags: ["modelado", "bases-de-datos", "apuntes"],
  },
  {
    title: "Resumen: Lógica de Programación",
    content: "Enfoques para resolver problemas y pseudocódigo.",
    author: "María",
    tags: ["lógica", "programación", "resumen"],
  },
  {
    title: "Guía rápida: Git & GitHub",
    content: "Comandos básicos, ramas y pull requests.",
    author: "Agustín",
    tags: ["git", "herramientas", "apuntes"],
  },
];

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

        <section className="sectionPosts">
          <h2 className="">Descubre las ultimas publicaciones</h2>
    
          <div className="postsContainer">
    
            {postsMentira.map((post, index) => (
              <PostCard
                key={index}
                post={{ title: post.title, content: post.content, author: post.author, image: getRandomImage() }}
                tags={post.tags}
                selectedTag={post.tags[0]}
                onTagChange={(tag) => console.log(`Post ${index + 1}:`, tag)}
              />
            ))}
    
          </div>
      
        </section>

      <ContentRotator />

    </>
  );
}
