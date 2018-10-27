const assert = require('assert');
const sumOfOther = require('./src/sumOfOther.js');

describe('sumOfOther', () => {
  it('1', () => {
    const array = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(array, [8, 7, 6, 9]);
  });  
  
  it('2', () => {
    const array = sumOfOther([2, 3, 4, 11, 45, 67, 90, 99, 128, 33]);
    assert.deepEqual(array, [480, 479, 478, 471, 437, 415, 392, 383, 354, 449]);
  });  
 
   it('3', () => {
    const array = sumOfOther([2, 3, 4, 11]);
    assert.deepEqual(array, [18, 17, 16, 9]);
  });  
 
   it('4', () => {
    const array = sumOfOther([2, 3]);
    assert.deepEqual(array, [3, 2]);
  }); 
  
   it('5', () => {
    const array = sumOfOther([100]);
    assert.deepEqual(array, [0]);
  }); 
 
  });
