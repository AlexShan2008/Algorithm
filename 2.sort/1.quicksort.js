// 快速排序
// 1. 在数据集之中，选择一个元素作为基准，pivot
// 2. 所有小于基准的元素，都移到基准的左边；所有大于基准的元素都移动到右边；
// 3. 对基准左边和右边的两子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止；

let array = [99, 0, 1, 2, 12, 34, 75, 24];

function quickSort(arr) {
  let copy = [...arr];
  let length = copy.length;

  if (length <= 1) { return copy; }

  let pivotIndex = Math.floor(copy.length / 2);
  let pivot = copy.splice(pivotIndex, 1)[0];
  let left = [];
  let right = [];
  for (var i = 0; i < copy.length; i++) {

    if (copy[i] < pivot) {

      left.push(copy[i]);

    } else {

      right.push(copy[i]);

    }

  }
  return quickSort(left).concat([pivot], quickSort(right));
}

let newArr = quickSort(array);
console.log(newArr);
console.log(array);
