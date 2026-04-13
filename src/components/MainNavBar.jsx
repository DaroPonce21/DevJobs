import "../styles/NavBar.css";
const MainNavBar = () => {
  return (
    <header>
      <div className="container header-inner">
        <a className="logo" href="/">
          <svg
            className="h-8 w-8 text-primary"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          <h1>DevJobs</h1>
        </a>

        <nav aria-label="Menu principal">
          <a href="./empleos">Empleos</a>
          <a
            href="/construccion"
            className="nav-link disabled"
            title="Próximamente"
          >
            Empresas
          </a>
          <a
            href="/construccion"
            className="nav-link disabled"
            title="Próximamente"
          >
            Salarios
          </a>
        </nav>
        <div className="auth-buttons">
          <a
            href="/construccion"
            className="nav-link disabled"
            title="Próximamente"
          >
            Publicar empleo
          </a>
          <a href="/login">Iniciar sesión</a>
        </div>
      </div>
    </header>
  );
};

export default MainNavBar;
