import "../styles/Features.css";

const Features = () => {
  return (
    <section className="features">
      <header className="features-header">
        <h2>¿Por qué DevJobs?</h2>
        <p>
          DevJobs es la principal bolsa de trabajo para desarrolladores.
          Conectamos a los desarrolladores con las mejores empresas del mundo.
        </p>
      </header>

      <div className="features-list">
        <article className="feature">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-briefcase"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
            <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
            <path d="M12 12l0 .01" />
            <path d="M3 13a20 20 0 0 0 18 0" />
          </svg>
          <h3>Encuentra el trabajo de tus sueños</h3>
          <p>
            Busca miles de empleos de las mejores empresas de todo el mundo.
          </p>
        </article>

        <article className="feature">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-users"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
          </svg>
          <h3>Conecta con las mejores empresas</h3>
          <p>Conecta con empresas que están contratando por tus habilidades.</p>
        </article>

        <article className="feature">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-building-skyscraper"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 21l18 0" />
            <path d="M5 21v-14l8 -4v18" />
            <path d="M19 21v-10l-6 -4" />
            <path d="M9 9l0 .01" />
            <path d="M9 12l0 .01" />
            <path d="M9 15l0 .01" />
            <path d="M9 18l0 .01" />
          </svg>
          <h3>Obtén el salario que mereces</h3>
          <p>
            Obtén el salario que mereces con nuestra calculadora de salarios.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Features;
