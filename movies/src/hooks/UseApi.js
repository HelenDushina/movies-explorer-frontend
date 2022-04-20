import { useEffect, useState } from "react";

export const useApi = (handler) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    console.log("DONE");
    setLoading(true);
    handler()
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [handler]);

  return { data, loading, error };
};