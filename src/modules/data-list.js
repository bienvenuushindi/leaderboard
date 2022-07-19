import Score from './score.js';

// min and max specify range of score.
const generateDefaultData = (numberOfItems, [min, max]) => {
  let i = 0;
  const data = [];
  while (i < numberOfItems) {
    const score = Math.floor(Math.random() * (max - min)) + min;
    data.push(new Score({ name: 'name', score }));
    i += 1;
  }
  return data;
};
export default generateDefaultData;