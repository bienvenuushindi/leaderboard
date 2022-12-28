import tableBody, { feedbackMessageBlock } from './elements.js';
import capitalizeString from './capitalize-string.js';

export const showOnSuccess = () => {
  feedbackMessageBlock.parentElement.classList.remove('d-none');
  setTimeout(() => {
    feedbackMessageBlock.parentElement.classList.add('d-none');
  }, 5000);
};

export const showOnError = () => {
  feedbackMessageBlock.parentElement.classList.remove('d-none');
  feedbackMessageBlock.classList.remove('success');
  feedbackMessageBlock.classList.add('error');
  feedbackMessageBlock.innerHTML = 'Ooooops!!! Something went wrong';
  setTimeout(() => {
    feedbackMessageBlock.parentElement.classList.add('d-none');
    feedbackMessageBlock.classList.add('success');
    feedbackMessageBlock.classList.remove('error');
    feedbackMessageBlock.innerHTML = 'Leaderboard score created correctly. PLease Click Refresh to see the latest entry';
  }, 6000);
};

const updateTableView = (data) => {
  data.sort((a, b) => b.score - a.score);
  tableBody.innerHTML = data.map((item) => `<tr>
                         <td>${capitalizeString(item.user)}</td>
                         <td>${item.score}</td>
                     </tr>`).join('');
};
export default updateTableView;