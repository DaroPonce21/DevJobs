import { useNavigate } from "react-router-dom";
import "../styles/Hero.css";

const Hero = () => {
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.elements["empleos"].value.trim();
    if (query) {
      navigate(`/empleos?query=${encodeURIComponent(query)}`);
    }
  };
  return (
    <section className="hero">
      <h1 className="hero-title">Encuentra el trabajo de tus sueños</h1>
      <p className="hero-subtitle">
        Únete a la comunidad más grande de desarroladores y encuentra tu próxima
        oportunidad
      </p>

      <form className="hero-search" onSubmit={handleSearch}>
        <div className="search-field">
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-search"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
          <label htmlFor="search-jobs" className="visually-hidden">
            Busca empleos
          </label>
          <input
            id="search-jobs"
            type="text"
            required
            placeholder="Buscar empleos por título, habilidad o empresa"
            name="empleos"
          />
          <button type="submit">Buscar</button>
        </div>
      </form>
    </section>
  );
};

export default Hero;
