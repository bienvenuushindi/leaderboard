import './style.css';
import { formElmt, refreshButton } from './modules/elements.js';
import addScore from './modules/api/add-score.js';
import listScore from './modules/api/list-scores.js';
import updateTableView, { showOnError, showOnSuccess } from './modules/views.js';

listScore().then((data) => updateTableView(data.result));
formElmt.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const name = formElmt.name.value;
  const score = formElmt.score.value;
  addScore(name, score).then(() => {
    showOnSuccess();
    formElmt.name.value = '';
    formElmt.score.value = '';
  }).catch(() => {
    showOnError();
  });
});

refreshButton.addEventListener('click', () => {
  listScore().then((data) => updateTableView(data.result));
});
