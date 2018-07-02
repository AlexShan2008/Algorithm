function swap(A, i, j) {
  const t = A[i];
  A[i] = A[j];
  A[j] = t;
}
/**
 * 选择排序
 * @param {*} arr 
 * O(n^2)
 * 按照原址进行排序；
 * 找到最小值放到第一位，其次找第二小值，继续……
 */
function selectionSort(arr) {
  const length = arr.length;
  let indexMin = 0;

  for (let i = length; i > 0; i--) {
    indexMin = i;
    for (let j = i; j < length; j++) {
      if (arr[indexMin] > arr[j]) {
        indexMin = j;
      }
    }
    if (i !== indexMin) {
      swap(arr, i, indexMin)
    }
  }
  return arr;
}

const arr = [0, 2, 1, 6, 3, 9]
selectionSort(arr);
console.log(arr)