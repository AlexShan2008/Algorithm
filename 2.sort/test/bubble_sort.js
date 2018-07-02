function swap(A, i, j) {
  const t = A[i];
  A[i] = A[j];
  A[j] = t;
}

function bubbleSort(arr) {
  const length = arr.length;
  for (let i = length; i > 0; i--) {
    for (let j = 1; j < i; j++) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1)
      }
    }
  }
  return arr;
}

const arr = [0,2,1,6,3,9]
bubbleSort(arr);
console.log(arr)