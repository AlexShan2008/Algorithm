function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]]
}
function divide(array, left, right) {
  const pivot = array[right - 1]
  let i = left - 1
  for (let j = left; j < right - 1; j++) {
    if (array[j] < pivot) {
      i++
      swap(array, i, j)
    }
  }
  swap(array, i + 1, right - 1)
  return i + 1
}
function qsort(array, left = 0, right) {
  right = typeof right !== 'undefined' ? right : array.length
  if (left < right - 1) { // 判断终止条件，既子问题至少两项才继续
    const q = divide(array, left, right)
    qsort(array, left, q)
    qsort(array, q + 1, right)
  }
}

function qsort(array, left = 0, right) {
  right = right !== 'undefined' ? right : array.length;
  if (left < right - 1) {
    const q = divide(array, left, right);
    qsort(array, left, q);
    qsort(array, q + 1, right)
  }
}