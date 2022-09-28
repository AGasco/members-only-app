import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';

export const useProtectedResource = (url, defaultValue) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(defaultValue);

  useEffect(() => {
    const loadResource = async () => {
      const user = getAuth().currentUser;

      if (!user) {
        setData(defaultValue);
        setIsLoading(false);
        return;
      }

      const response = await fetch(url, {
        headers: {
          AuthToken: await user.getIdToken()
        }
      });
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    };

    loadResource();
  }, []);

  return { isLoading, data, setData };
};
