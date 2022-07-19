import { gameID, requestURL } from '../shared-value';
import { showOnSuccess } from '../views';

const addScore = (name, score) => {
  fetch(requestURL + gameID + '/scores/', {
    method: 'POST',
    body: JSON.stringify({
      'user': name,
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
  }).catch((error) => {
    console.warn('Something went wrong.', error);
  });
};

export default addScore;