/**
 * 插入排序
 * O(n^2)
 * 当前项，和之前的所有项进行比较大小
 * 如果上一项大于当前项的值，就把上一项移到当前项的位置j--
 * 继续比较上一项的上一项，和当前值比较，如何比当前值小，则将当前项插入到上一项的上一项的位置
 */
function insertion_sort(A) {
  const length = A.length;
  let j = 0,
    temp = 0;
  for (
    let i = 1;                     // 1
    i < length;                 // N
    i++) {                         // N - 1
    temp = A[i];               // N - 1
    j = i;                 // N - 1

    // 这个循环将抓到的牌插入合适的位置
    while (j > 0 && A[j - 1] > temp) { // Mk
      A[j] = A[j - 1]              // (Mk-1)
      j--;                          // (Mk-1)
    }
    A[j] = temp                 // N - 1

    //                   j
    // | --- 已排序 --- | ---- 未排序  ---- |
    // 每次循环结束的时候j的位置代表下一张需要排序的牌
  }
}

// function insertion_sort(A) {
//   const length = A.length;
//   let j = 0,
//     temp = 0;
//   for (let i = 1; i < length; i++) {
//     temp = A[i];
//     j = i;
//     while (j > 0 && A[j - 1] > temp) {
//       A[j] = A[j - 1];
//       j--;
//     }
//     // A[j] 当前项
//     A[j] = temp;
//   }
// }

const arr = [3, 5, 1, 4, 2]
insertion_sort(arr);
console.log(arr)


module.exports = insertion_sort
// 最好： O(N)
// 最坏： O(N^2)
function insertion_sort(A) {
  const length = A.length;
  let j = 0,
    temp = 0;
  for (let i = 1; i < length; i++) {
    j = i;
    temp = A[i];
    while (j > 0 && A[j - 1] > temp) {
      A[j] = A[j -1];
      j--;
    }
    A[j] = temp;
  }
}