const assert = require('assert');
const make = require('./make.js');

function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

describe('make', () => {
  it('1', () => {
    const check = make(15)(34, 21, 666)(41)(sum);
    assert.deepEqual(check, 777);
  });
  it('2', () => {
    const check = make(15)(34, 21, 666)(41)(multiply);
    assert.deepEqual(check, 292447260);
  });
  it('3', () => {
    const check = make(15)(34, 21)(-1)(multiply);
    assert.deepEqual(check, -10710);
  });
  it('4', () => {
    const check = make(15)(-34, 21)(-1)(sum);
    assert.deepEqual(check, 1);
  });
  it('5', () => {
    const check = make(15)(21)(-1, 45, 665)(sum);
    assert.deepEqual(check, 745);
  });
});
