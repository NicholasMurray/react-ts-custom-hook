import React, { useEffect, useState } from 'react';

const useFetch = (url: string = '', options: object = null) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(null);

  useEffect(() => {
    let isMounted: boolean = true;
    setLoading(true);
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setData(data);
          setError(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setData(null);
          setError(err);
        }
      })
      .finally(() => {
        setLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, [url, options]);

  return { data: data, error: error, loading: loading };
};

export default useFetch;
