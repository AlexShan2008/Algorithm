const { assert } = require('chai');
// T(N)
// subProblem: [p, r)
// 
function divide(A, p, r) {
  return Math.floor((p + r) / 2)
}

function merge(A, p, q, r) {

}

assert.equal(divide(0, 5), 2, 'error-01')

assert.deepEqual(merge([2, 10, 3, 7], ), [2,3,7,10], 'error-02')