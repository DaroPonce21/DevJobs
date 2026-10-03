import { useState } from "react";

const useFiltersState = () => {
  const [inputSearch, setInputSearch] = useState("");

  const [filtros, setFiltros] = useState({
    tecnologia: "",
    ubicacion: "",
    experiencia: "",
  });

  const [orden, setOrden] = useState("");

  return {
    inputSearch,
    setInputSearch,
    filtros,
    setFiltros,
    orden,
    setOrden,
  };
};

export default useFiltersState;
