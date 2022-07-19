import './style.css';
import tableBody from './modules/elements.js';
import generateDefaultData from './modules/data-list.js';
import capitalizeString from './modules/capitalize-string.js';

tableBody.innerHTML = generateDefaultData(7, [1, 150]).map((item) => `  <tr>
                         <td>${capitalizeString(item.getName())} : ${item.getScore()}</td>
                     </tr>`).join('');