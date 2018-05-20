// T(N)
// 子问题 : [p, r)

function divide(p, r){
  return Math.floor( (p + r) / 2 )
}

function merge(A, p, q, r){
  // 拆分2, 10, MAX | 3, 7 , MAX
  const A1 = A.slice(p, q)
  const A2 = A.slice(q, r)

  // 哨兵
  A1.push(Number.POSITIVE_INFINITY)
  A2.push(Number.MAX_SAFE_INTEGER)

  // |--排序好的--|--未排序--|
  // || --- 未排序 -- |
  for(let i = p, j = 0, k = 0; i < r; i++){
    if (A1[j] < A2[k]){
      A[i] = A1[j++]
    }else {
      A[i] = A2[k++]
    }
    // [p,i]区间已经排序
  }
  // 2 3
  return A
}

function merge_sort(A, p, r){
  if(r - p === 1){
    return
  }
  const q = divide(p, r)
  merge_sort(A, p, q)
  merge_sort(A, q, r)
  merge(A, p, q, r)
  return A
}

const { assert } = require('chai')
// [1,2,3,4,5] => [1,2] [3,4,5]
// [1,2,3] => [1] [2,3]
assert.equal(divide(0, 5), 2)
assert.equal(divide(0, 3), 1)
assert.equal(divide(2, 5), 3)
assert.deepEqual(
  merge([2,10, 3, 7], 0, 2, 4),
  [2,3,7,10]
)

assert.deepEqual(
  merge([10, 2, 3, 7], 0, 1, 2),
  [2, 10, 3, 7],
  'error 01'
)

assert.deepEqual(
  merge([10, 2, 7, 3], 2, 3, 4),
  [10, 2, 3, 7],
  'error 02'
)

assert.deepEqual(
  merge([10, 2, 3], 0, 1, 3),
  [2, 3, 10],
  'error 03'
)

assert.deepEqual(
  merge_sort([10, 3, 100], 0, 3),
  [3, 10, 100],
  '完整测试失败'
)

