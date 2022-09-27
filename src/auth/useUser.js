import { useState, useEffect } from 'react';
import { onAuthStateChanged, getAuth } from 'firebase/auth';

export const useUser = () => {
  const [userInfo, setUserInfo] = useState(() => {
    const user = getAuth().currentUser;
    const isLoading = !user;

    return { isLoading, user };
  });

  useEffect(() => {
    return onAuthStateChanged(getAuth(), (user) => {
      setUserInfo({ isLoading: false, user });
    });
  }, []);

  return userInfo;
};
