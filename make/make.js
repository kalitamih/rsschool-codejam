module.exports = function make() {
  const temporyArray = [];
  for (let i = 0; i < arguments.length; i += 1) temporyArray.push(arguments[i]);
  function inner() {
    if (typeof arguments[0] === 'function') return temporyArray.reduce(arguments[0]);
    for (let i = 0; i < arguments.length; i += 1) temporyArray.push(arguments[i]);
    return inner;
  }
  return inner;
};
