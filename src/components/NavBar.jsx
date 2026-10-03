import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = ({ variant = "app" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const isHome = variant === "home";
  const isLogin = variant === "login";

  return (
    <header className="main-header">
      <div className="container header-inner">
        <Link className="logo" to="/" onClick={closeMenu}>
          <svg
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>

          <span className="logo-text">DevJobs</span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
          )}
        </button>

        <div
          id="main-navigation"
          className={`nav-content ${isMenuOpen ? "nav-content-open" : ""}`}
        >
          <nav aria-label="Menú principal">
            {isHome ? (
              <Link to="/empleos" onClick={closeMenu}>
                Empleos
              </Link>
            ) : (
              <Link to="/" onClick={closeMenu}>
                Inicio
              </Link>
            )}

            <Link
              className="nav-link disabled"
              title="Próximamente"
              to="/construccion"
              onClick={closeMenu}
            >
              Empresas
            </Link>

            <Link
              className="nav-link disabled"
              title="Próximamente"
              to="/construccion"
              onClick={closeMenu}
            >
              Salarios
            </Link>
          </nav>

          {!isLogin && (
            <div className="auth-buttons">
              <Link
                className="nav-link disabled"
                title="Próximamente"
                to="/construccion"
                onClick={closeMenu}
              >
                Publicar empleo
              </Link>

              {isHome ? (
                <Link to="/login" onClick={closeMenu}>
                  Iniciar sesión
                </Link>
              ) : (
                <Link
                  className="profile-link"
                  to="/perfil"
                  onClick={closeMenu}
                  aria-label="Ir al perfil"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  </svg>

                  <span className="profile-label">Perfil</span>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
