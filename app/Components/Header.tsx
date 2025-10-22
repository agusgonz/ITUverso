export default function Header() {
  return (
    <header className="navigation">
      <div className="logo">
        <img src="ITUverso.jpg" alt="ITUverso Logo" className="logo-img"/>
      </div>
      <nav className="nav-items">
        <a href="#" className="nav-link">Inicio</a>
        <a href="#" className="nav-link">Crear post</a>
        <a href="#" className="nav-link">Tags</a>
        <button className="btn btn-dark btn-buscar">Buscar</button>
      </nav>
    </header>
  );
}