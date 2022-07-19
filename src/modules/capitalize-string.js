const capitalizeString = (str) => {
  if (!(typeof str === 'string')) throw new Error('Invalid Input');
  const lower = str.toLowerCase();
  return str[0].toUpperCase() + lower.slice(1);
};

export default capitalizeString;
