// 生成指定范围的打乱的数字；
function gen(w) {
  const arr = []
  for (let i = 0; i < w * 10000; i++) {
    arr[i] = i + 1
  }
  fisher_yates_shuffler(arr)
  return arr
}
// 随机打乱顺序
function fisher_yates_shuffler(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    const j = i + Math.floor(Math.random() * (arr.length - i));
    swap(arr, i, j);
  }
  return arr;
}
// 交互
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const arr =  gen(0.1);
console.log(arr)

