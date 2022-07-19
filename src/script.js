import './style.css'
import { tableBody } from './modules/elements';
import generateDefaultData from './modules/data-list';
import capitalizeString from './modules/capitalize-string';

tableBody.innerHTML=generateDefaultData(7,[1,150]).map((item)=> `  <tr>
                         <td>${capitalizeString(item.getName())} : ${item.getScore()}</td>
                     </tr>`).join('');