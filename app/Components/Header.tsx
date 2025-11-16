export default function Header() {
  return (
    <header className="navigation">
      <div className="logo">
        <a href="/">
          <img src="ITUverso.jpg" alt="ITUverso Logo" className="logo-img"/>
        </a>
      </div>
      <nav className="nav-items">
        <a href="/" className="nav-link">Inicio</a>
        <a href="/posts" className="nav-link">Ver posts</a>
        <a href="#" className="nav-link">Crear post</a>
        <a href="/Tags" className="nav-link">Tags</a>
        <button className="btn btn-dark btn-buscar">Buscar</button>
      </nav>
    </header>
  );
}