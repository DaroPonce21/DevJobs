import "../styles/Pagination.css";

const Pagination = ({ paginaActual, totalPaginas, setPagina }) => {
  const getPaginas = () => {
    const paginas = [];
    const delta = 1;

    for (let i = 1; i <= totalPaginas; i++) {
      const esPrimera = i === 1;
      const esUltima = i === totalPaginas;
      const estaCerca = i >= paginaActual - delta && i <= paginaActual + delta;

      if (esPrimera || esUltima || estaCerca) {
        paginas.push(i);
      } else {
        if (paginas[paginas.length - 1] !== "...") {
          paginas.push("...");
        }
      }
    }
    return paginas;
  };

  return (
    <section>
      <ul className="pagination">
        <li key={paginaActual - 1}>
          {" "}
          <button
            onClick={() => setPagina(paginaActual - 1)}
            disabled={paginaActual === 1}
          >
            Prev
          </button>
        </li>
        {getPaginas().map((p, index) => (
          <li key={`${p}-${index}`}>
            {p === "..." ? (
              <span>...</span>
            ) : (
              <button
                onClick={() => setPagina(p)}
                className={paginaActual == p ? "active" : ""}
              >
                {p}
              </button>
            )}
          </li>
        ))}
        <li key={paginaActual + 1}>
          <button
            onClick={() => setPagina(paginaActual + 1)}
            disabled={paginaActual === totalPaginas}
          >
            Next
          </button>{" "}
        </li>
      </ul>
    </section>
  );
};

export default Pagination;
