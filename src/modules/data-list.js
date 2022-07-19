import Score from './score';

//min and max specify range of score.
const generateDefaultData=(numberOfItems,[min,max])=>{
  let i=0;
  let data=[];
  while (i<numberOfItems){
    const score=Math.floor(Math.random() * (max - min)) + min;
    data.push(new Score({name:'name',score:score}));
    i++;
  }
  return data
};
export default generateDefaultData;