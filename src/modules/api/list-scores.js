import { gameID, requestURL } from '../shared-value.js';
import updateTableView, { showOnError } from '../views.js';

const listScore = () => {
  fetch(`${requestURL + gameID}/scores/`).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(response);
  }).then((data) => {
    updateTableView(data.result);
  }).catch(() => {
    showOnError();
  });
};

export default listScore;