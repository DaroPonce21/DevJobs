import { useState } from "react";

const useAppliedJobs = (id) => {
  const [aplicado, setAplicado] = useState(() => {
    const aplicados = JSON.parse(localStorage.getItem("aplicados")) || [];
    return aplicados.includes(id);
  });

  const handleApply = () => {
    const aplicados = JSON.parse(localStorage.getItem("aplicados")) || [];

    if (!aplicados.includes(id)) {
      const nuevos = [...aplicados, id];
      localStorage.setItem("aplicados", JSON.stringify(nuevos));
      setAplicado(true);
    }
  };

  return {
    aplicado,
    handleApply,
  };
};
export default useAppliedJobs;
