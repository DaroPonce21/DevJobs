import { useMemo, useState } from "react";

const usePagination = (data, itemsPorPagina = 5) => {
  const [paginaActual, setPaginaActual] = useState(1);

  const totalPaginas = Math.ceil(data.length / itemsPorPagina);

  const resultadosPaginados = useMemo(() => {
    const inicio = (paginaActual - 1) * itemsPorPagina;
    const fin = inicio + itemsPorPagina;
    return data.slice(inicio, fin);
  }, [data, paginaActual, itemsPorPagina]);

  return {
    paginaActual,
    setPaginaActual,
    totalPaginas,
    resultadosPaginados,
  };
};

export default usePagination;
