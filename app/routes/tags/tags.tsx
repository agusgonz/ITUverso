


export default function TagsPage() {
  const tags = ["React", "JavaScript", "CSS", "Node.js", "UI/UX", "Backend", 
  "modelado", "bases-de-datos", "apuntes", "machine-learning", 
  "intro", "git", "herramientas", "lógica", "programación", "resumen", 
  "autómatas", "formales", "computación", "álgebra", "matrices", 
  "ejercicios", "trabajos", "normalización", "matemática", "python", "redes", 
  "ingeniería", "software", "estructuras", "datos", "arquitectura", "hardware", "materias",
  "cálculo", "derivadas", "sistemas-operativos", "guia", "estadística", "probabilidad", "c",
  "discreta", "sistemas-distribuidos"];

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Tags disponibles</h1>
      <ul style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}>
        {tags.map((tag) => (
          <li
            key={tag}
            style={{
              listStyle: "none",
              backgroundColor: "#00666A",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            {tag}
          </li>
        ))}
      </ul>
    </main>
  );
}
