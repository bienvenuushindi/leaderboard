import { gameID, requestURL } from '../shared-value.js';

const listScore = async () => {
  const response = await fetch(`${requestURL + gameID}/scores/`);
  return (response.ok) ? response.json() : Promise.reject(response);
};

export default listScore;