import "../styles/HeroJob.css";

const technologyLabels = {
  javascript: "JavaScript",
  typescript: "TypeScript",
  react: "React",
  node: "Node.js",
  python: "Python",
  angular: "Angular",
  java: "Java",
  vue: "Vue",
  docker: "Docker",
  kubernetes: "Kubernetes",
  go: "Go",
  rust: "Rust",
  php: "PHP",
  csharp: "C#",
  sql: "SQL",
};

const HeroJob = ({
  inputSearch,
  filtros,
  orden,
  onFiltroChange,
  onInputChange,
  tecnologiasDisponibles,
  onSortChange,
}) => {
  return (
    <main className="container">
      <section className="Hero-job">
        <h1>Encuentra tu próximo trabajo</h1>
        <p>Explora oportunidades en el sector tecnológico</p>

        <form className="job-form" onSubmit={(e) => e.preventDefault()}>
          <div className="job-search-field">
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

            <label htmlFor="searchJobs" className="visually-hidden">
              Campo para buscar trabajos, empresas o habilidades
            </label>

            <input
              type="text"
              name="searchJobs"
              id="searchJobs"
              placeholder="Buscar trabajos, empresas o habilidades"
              value={inputSearch}
              onChange={onInputChange}
            />
          </div>

          <div className="super-job-select">
            <div className="job-search-select">
              <select
                name="tecnologia"
                id="filter-technology"
                onChange={onFiltroChange}
                value={filtros.tecnologia}
              >
                <option value="">Tecnología</option>

                {tecnologiasDisponibles.map((tech) => (
                  <option key={tech} value={tech}>
                    {technologyLabels[tech] ?? tech}
                  </option>
                ))}
              </select>

              <select
                name="ubicacion"
                id="filter-ubication"
                onChange={onFiltroChange}
                value={filtros.ubicacion}
              >
                <option value="">Ubicación</option>
                <option value="Remoto">Remoto</option>
                <option value="Hibrido">Híbrido</option>
                <option value="Presencial">Presencial</option>
              </select>

              <select
                name="experiencia"
                id="filter-experiencia"
                onChange={onFiltroChange}
                value={filtros.experiencia}
              >
                <option value="">Nivel de experiencia</option>
                <option value="trainee">Trainee</option>
                <option value="junior">Junior</option>
                <option value="semi-senior">Semi Senior</option>
                <option value="senior">Senior</option>
              </select>
            </div>

            <div className="job-search-select">
              <select
                name="filter"
                id="filter-sortName"
                onChange={onSortChange}
                value={orden}
              >
                <option value="">Ordenar trabajos</option>
                <option value="abc">Empresas A-Z</option>
                <option value="zyx">Empresas Z-A</option>
                <option value="new">Más recientes</option>
                <option value="j-s">Junior - Senior</option>
                <option value="s-j">Senior - Junior</option>
              </select>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default HeroJob;
