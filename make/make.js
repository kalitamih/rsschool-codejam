module.exports = function make(...args) {
  const temporyArray = [];
  for (let i = 0; i < args.length; i += 1) temporyArray.push(args[i]);
  function inner(...rest) {
    if (typeof rest[0] === 'function') return temporyArray.reduce(rest[0]);
    for (let i = 0; i < rest.length; i += 1) temporyArray.push(rest[i]);
    return inner;
  }
  return inner;
};
