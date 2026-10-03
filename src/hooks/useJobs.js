import { useEffect, useState } from "react";

const useJobs = (url = "/data.json") => {
  const [trabajos, setTrabajos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`Error ${res.status}`);
      }

      const data = await res.json();
      setTrabajos(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [url]);

  return {
    trabajos,
    loading,
    error,
    refetch: fetchJobs,
  };
};

export default useJobs;
