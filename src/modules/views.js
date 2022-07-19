import tableBody, { feedbackMessageBlock } from './elements';
import capitalizeString from './capitalize-string';

export const showOnSuccess = () => {
  feedbackMessageBlock.parentElement.classList.remove('d-none');
  setTimeout(() => {
    feedbackMessageBlock.parentElement.classList.add('d-none');
  }, 7000);
};

export const showOnError = () => {
  feedbackMessageBlock.parentElement.classList.remove('d-none');
  feedbackMessageBlock.classList.remove('btn-success');
  feedbackMessageBlock.classList.add('error');
  feedbackMessageBlock.innerHTML="Ooooops!!! Something went wrong";
  setTimeout(() => {
    feedbackMessageBlock.parentElement.classList.add('d-none');
    feedbackMessageBlock.classList.add('btn-success');
    feedbackMessageBlock.classList.remove('error');
    feedbackMessageBlock.innerHTML="Leaderboard score created correctly. PLease Click Refresh to see the latest entry";
  }, 10000);
};

const updateTableView = (data) => {
  tableBody.innerHTML = data.map((item) => `  <tr>
                         <td>${capitalizeString(item.user)} : ${item.score}</td>
                     </tr>`).join('');
};
export default updateTableView;