module.exports = function sumOfOther(array) {
  const summa = array.reduce((sum, current) => sum + current);
  return array.map(item => summa - item);
};
