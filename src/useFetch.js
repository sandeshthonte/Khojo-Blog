import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not connect");
          }
          console.log(res);
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setisPending(false);
        })
        .catch((error) => {
          if (error.name === "AbortError") {
            console.log(error.name);
          } else {
            setError(error.message);
            setisPending(false);
          }
        });
    }, 500);

    return () => abortCont.abort();
  }, [url]);
  return { data, isPending, error };
}

export default useFetch;
