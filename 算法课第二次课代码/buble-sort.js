function swap(A, i, j){
  const t = A[i]
  A[i] = A[j]
  A[j] = t
}

function bubble_sort(A){
  // |---未排序---|---已排序的最大值---|
  // 初始 |------未排序----|i|
  for(let i = A.length; i > 0; i--){
    for(let j = 1; j < i; j++){
      //A[j] A[j-1]比较
      if(A[j] < A[j-1]) {
        swap(A, j, j-1)
      }
    }
    // 循环不变式成立
  }
  return A
}

const { assert } = require('chai')

assert.deepEqual(
  bubble_sort([5,3,2,1]),
  [1,2,3,4,5]
)