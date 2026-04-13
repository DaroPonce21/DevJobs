import "../styles/HeroJob.css";

const HeroJob = ({
  onFiltroChange,
  onInputChange,
  tecnologiasDisponibles,
  onSortChange,
}) => {
  return (
    <main className="container">
      <section className="Hero-job">
        <h1>Encuentra tu próximo trabajo</h1>
        <p>Explora miles de oportunidades en el sector tecnológico</p>
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
              onChange={onInputChange}
            />
          </div>
          <div className="super-job-select">
            <div className="job-search-select">
              <select
                name="tecnologia"
                id="filter-technology"
                onChange={onFiltroChange}
              >
                <option value="" hidden>
                  Tecnologia
                </option>
                <option value="">Todas</option>
                {tecnologiasDisponibles.map((tech) => (
                  <option key={tech} value={tech}>
                    {tech}
                  </option>
                ))}
              </select>
              <select
                name="ubicacion"
                id="filter-ubication"
                onChange={onFiltroChange}
              >
                <option value="" hidden>
                  Ubicacion
                </option>
                <option value="">Todas</option>
                <option value="Remoto">Remoto</option>
                <option value="Hibrido">Hibrido</option>
                <option value="Presencial">Presencial</option>
              </select>

              <select
                name="experiencia"
                id="filter-experiencia"
                onChange={onFiltroChange}
              >
                <option value="" hidden>
                  Nivel de experiencia
                </option>
                <option value="">Todas</option>
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
              >
                <option value="" hidden>
                  Ordenar trabajos de:
                </option>
                <option value="abc">Empresas A-Z</option>
                <option value="zyx">Empresas Z-A</option>
                <option value="new">Mas Recientes</option>
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
