const assert = require('assert');
const recursion = require('./recursion.js');

const tree = {
  value: 100,
  left: { value: 90, left: { value: 70 }, right: { value: 99 } },
  right: { value: 120, left: { value: 110 }, right: { value: 130 } },
};

const tree2 = {
  value: 100,
  left: { value: 90, left: { value: 70 }, right: { value: 99 } },
  right: { value: 120, left: { value: 110 } },
};

const tree3 = { value: 100 };

const tree4 = {
  value: 100,
  left: { value: 87, left: { value: 70 }, right: { value: 90 } },
  right: { value: 120, left: { value: 110 }, right: { value: 1900 } },
};

describe('recursion', () => {
  it('1', () => {
    const check = recursion(tree);
    assert.deepEqual(check, [[100], [90, 120], [70, 99, 110, 130]]);
  });
  it('2', () => {
    const check = recursion(tree2);
    assert.deepEqual(check, [[100], [90, 120], [70, 99, 110]]);
  });
  it('3', () => {
    const check = recursion(tree3);
    assert.deepEqual(check, [[100]]);
  });
  it('4', () => {
    const check = recursion(tree4);
    assert.deepEqual(check, [[100], [87, 120], [70, 90, 110, 1900]]);
  });
});
