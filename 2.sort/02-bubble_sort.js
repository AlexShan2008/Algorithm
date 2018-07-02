// test单元测试，可复用性，并且效率更高
const { assert } = require('chai');

function swap(A, i, j) {
  const t = A[i]
  A[i] = A[j]
  A[j] = t
}

// A.sort((x, y) => x - y)
/**
 * 冒泡排序
 * @param {*} A 
 * O(n^2)
 * 比较相邻两项，如果后面的值大于前面的值，就交换位置
 */

function bubble_sort(A) {
  // 
  for (let i = A.length; i > 0; i--) {
    for (let j = 1; j < i; j++) {
      // 
      if (A[j] < A[j - 1]) {
        swap(A, j, j - 1);
      }
    }

    // 循环不变式成立
  }
  return A;
}

assert.deepEqual(
  bubble_sort([5, 4, 3, 2, 1]),
  [1, 2, 3, 4, 5]
)

// eval(`[${B + ''}]`) 

let arr = [].concat(...[1, 2, 3], [4, 5, 6]);

assert.deepEqual(
  arr,
  [1, 2, 3, 4, 5, 6]
)