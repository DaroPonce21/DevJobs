import { useSearchParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import HeroJob from "../components/HeroJob";
import JobList from "../components/JobList";
import Pagination from "../components/Pagination";

import useJobs from "../hooks/useJobs";
import useFilters from "../hooks/useFilters";
import usePagination from "../hooks/usePagination";
import useTechnologies from "../hooks/useTechnologies";
import useFiltersState from "../hooks/useFiltersState";
import { useEffect } from "react";

const Empleos = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { trabajos, loading } = useJobs();

  const { inputSearch, setInputSearch, filtros, setFiltros, orden, setOrden } =
    useFiltersState();

  const { resultados, debouncedSearch } = useFilters(
    trabajos,
    inputSearch,
    orden,
    filtros,
  );

  const { paginaActual, setPaginaActual, totalPaginas, resultadosPaginados } =
    usePagination(resultados);

  const tecnologias = useTechnologies(trabajos);

  useEffect(() => {
    const query = searchParams.get("query") || "";
    const tecnologia = searchParams.get("tecnologia") || "";
    const ubicacion = searchParams.get("ubicacion") || "";
    const experiencia = searchParams.get("experiencia") || "";
    const sort = searchParams.get("sort") || "";

    if (query !== inputSearch) setInputSearch(query);

    setFiltros({
      tecnologia,
      ubicacion,
      experiencia,
    });

    setOrden(sort);
  }, []);

  useEffect(() => {
    const params = {};

    if (debouncedSearch) params.query = debouncedSearch;
    if (filtros.tecnologia) params.tecnologia = filtros.tecnologia;
    if (filtros.ubicacion) params.ubicacion = filtros.ubicacion;
    if (filtros.experiencia) params.experiencia = filtros.experiencia;
    if (orden) params.sort = orden;

    setSearchParams(params);
  }, [debouncedSearch, filtros, orden]);

  // handlers
  const onInputChange = (e) => {
    setPaginaActual(1);
    setInputSearch(e.target.value);
  };

  const onFiltroChange = (e) => {
    const { name, value } = e.target;
    setPaginaActual(1);
    setFiltros((prev) => ({ ...prev, [name]: value }));
  };

  const onSortChange = (e) => {
    setPaginaActual(1);
    setOrden(e.target.value);
  };

  return (
    <>
      <NavBar />

      <HeroJob
        onFiltroChange={onFiltroChange}
        onInputChange={onInputChange}
        onSortChange={onSortChange}
        tecnologiasDisponibles={tecnologias}
      />

      <JobList
        loadingPage={loading}
        trabajos={resultadosPaginados}
        cantidad={resultados.length}
        paginas={totalPaginas}
      />

      <Pagination
        paginaActual={paginaActual}
        totalPaginas={totalPaginas}
        setPagina={setPaginaActual}
      />
    </>
  );
};

export default Empleos;
