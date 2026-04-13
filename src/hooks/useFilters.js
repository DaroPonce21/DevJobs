import { useMemo } from "react";
import useDebounce from "./useDebounce";

const useFilters = (trabajos, inputSearch, orden, filtros) => {
  const debouncedSearch = useDebounce(inputSearch, 300);

  const resultados = useMemo(() => {
    return trabajos.filter((job) => {
      const matchesSearch =
        !debouncedSearch ||
        job.titulo.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        job.empresa.toLowerCase().includes(debouncedSearch.toLowerCase());

      const matchesTech =
        !filtros.tecnologia || job.data.technology.includes(filtros.tecnologia);

      const matchesUbicacion =
        !filtros.ubicacion || job.ubicacion === filtros.ubicacion;

      const matchesExperiencia =
        !filtros.experiencia || job.data.nivel === filtros.experiencia;

      return (
        matchesSearch && matchesTech && matchesUbicacion && matchesExperiencia
      );
    });
  }, [trabajos, debouncedSearch, filtros]);

  const resultadosOrdenados = useMemo(() => {
    const ranking = {
      training: 0,
      junior: 1,
      "semi-senior": 2,
      senior: 3,
    };

    const SORTS = {
      abc: (a, b) => a.empresa.localeCompare(b.empresa),
      zyx: (a, b) => b.empresa.localeCompare(a.empresa),
      new: (a, b) => b.fecha.localeCompare(a.fecha),
      "j-s": (a, b) => ranking[a.data.nivel] - ranking[b.data.nivel],
      "s-j": (a, b) => ranking[b.data.nivel] - ranking[a.data.nivel],
    };

    if (!orden) return resultados;

    return [...resultados].sort(SORTS[orden]);
  }, [orden, resultados]);

  return { resultados: resultadosOrdenados, debouncedSearch };
};

export default useFilters;
