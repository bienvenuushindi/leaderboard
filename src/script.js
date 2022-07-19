import './style.css';
import { formElmt, refreshButton } from './modules/elements';
import addScore from './modules/api/add-score';
import listScore from './modules/api/list-scores';

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
