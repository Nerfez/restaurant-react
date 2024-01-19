import { useEffect, useState } from "react";

export function useFetchData(url = "") {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      if (res.ok) {
        const dataReceived = await res.json();
        setData(dataReceived);
      } else {
        console.error("Impossible de récupérer les données");
      }
    } catch (error) {
      console.error(
        "Une erreur est survenue en essayant de récupérer les données ",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, fetchData };
}
