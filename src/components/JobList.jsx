import JobCard from "./JobCard";
import "../styles/JobList.css";

const JobList = ({
  trabajos,
  cantidad,
  loadingPage,
  error,
  refetch,
  onClearFilters,
}) => {
  return (
    <main className="container">
      <section className="jobs-list">
        <header className="jobs-list-title">
          <h2>Resultados de la búsqueda</h2>
          <p>
            {cantidad} {cantidad === 1 ? "trabajo" : "trabajos"} encontrados
          </p>
        </header>

        <div className="jobs-list-container">
          {loadingPage ? (
            <div>cargando</div>
          ) : error ? (
            <div>
              Error: {error}
              <button onClick={refetch}>Reintentar</button>
            </div>
          ) : cantidad === 0 ? (
            <div className="no-results">
              <div className="no-results-icon">⌕</div>

              <h3>No encontramos empleos con estos filtros</h3>

              <p>
                Probá modificando la búsqueda o eliminando alguno de los
                filtros.
              </p>

              <button
                type="button"
                className="no-results-button"
                onClick={onClearFilters}
              >
                Limpiar filtros
              </button>
            </div>
          ) : (
            <ul className="list-jobs-ul">
              {trabajos.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
};
export default JobList;
