import axios from "axios";
import { useEffect, useState } from "react";
import { backendLink } from "../utils/constants";

const useFetch = (url) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const ax = axios.create({
    baseURL: backendLink,
    withCredentials: true,
  });
//   const config = {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("authToken")}`,
//     },
//   };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await ax.get(url);
        setData(res.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };
  return { data, loading, error, reFetch };
};

export default useFetch;