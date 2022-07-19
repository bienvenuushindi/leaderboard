import { gameID, requestURL } from '../shared-value';
import updateTableView, { showOnError, showOnSuccess } from '../views';

const listScore = () => {
  fetch(requestURL + gameID + '/scores/').then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(response);
  }).then((data) => {
    updateTableView(data.result);
  }).catch((error) => {
    showOnError();
  });
};

export default listScore;