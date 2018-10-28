module.exports = function recursion(tree) {
  const levels = [];
  const createArray = (node, level) => {
    if (!node) return null;
    if (!levels[level]) levels[level] = [node.value];
    else levels[level].push(node.value);
    createArray(node.left, level + 1);
    createArray(node.right, level + 1);
    return null;
  };
  createArray(tree, 0);
  return levels;
};
