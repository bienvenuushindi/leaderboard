import { gameID, requestURL } from '../shared-value.js';
import { showOnSuccess, showOnError } from '../views.js';

const addScore = (user, score) => {
  fetch(`${requestURL + gameID}/scores/`, {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(response);
  }).then(() => {
    showOnSuccess();
  }).catch(() => {
    showOnError();
  });
};

export default addScore;