import { getAuth } from 'firebase/auth';

export const postWithCredentials = async (url, bodyData) => {
  const user = getAuth().currentUser;

  if (!user) return console.log('Error!');

  const response = await fetch(url, {
    method: 'post',
    body: JSON.stringify(bodyData),
    headers: {
      AuthToken: await user.getIdToken(),
      'Content-Type': 'application/json'
    }
  });

  return response;
};
