import React, { useMemo } from "react";

const useTechnologies = (trabajos) => {
  const memoTech = useMemo(() => {
    const tecnologiasDisponibles = [
      ...new Set(trabajos.flatMap((job) => job.data.technology).sort()),
    ];

    return tecnologiasDisponibles;
  }, [trabajos]);
  return memoTech;
};

export default useTechnologies;
