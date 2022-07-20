import { gameID, requestURL } from '../shared-value.js';

const addScore = async (user, score) => {
  const response = await fetch(`${requestURL + gameID}/scores/`, {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return (response.ok) ? response.json() : Promise.reject(response);
};

export default addScore;