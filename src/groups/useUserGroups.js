import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';

export const useUserGroups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const loadGroups = async () => {
      const user = getAuth().currentUser;
      if (!user) {
        setGroups([]);
        setIsLoading(false);
        return;
      }

      const response = await fetch(`/users/${user.uid}/groups`, {
        headers: {
          AuthToken: await user.getIdToken()
        }
      });

      const groups = await response.json();
      setGroups(groups);
      setIsLoading(false);
    };

    loadGroups();
  }, []);

  return { isLoading, groups };
};
