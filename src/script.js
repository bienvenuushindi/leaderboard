import './style.css';
import { formElmt, refreshButton } from './modules/elements.js';
import addScore from './modules/api/add-score.js';
import listScore from './modules/api/list-scores.js';

listScore();
formElmt.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const name = formElmt.name.value;
  const score = formElmt.score.value;
  addScore(name, score);
});

refreshButton.addEventListener('click', () => {
  listScore();
});
