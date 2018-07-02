// 二叉树
// 1.heap堆

// Mock.js 库 生成随机数

// 根节点 -- 分支节点 -- 叶子节点
// 节点序号
// left = index * 2 + 1
// right = index * 2 + 2
// 序号 >= floor(N/2)都是叶子节点

// 最大堆(max-heap) 一种二叉树
// 父节点的值总是比子节点大
// 根节点的值最大
// max-heapify操作

function left(i) {
  return i * 2 + 1
}
function right(i) {
  return i * 2 + 2
}
function swap(arr, i, j) {
  const t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

class Heap {
  constructor(arr) {
    this.data = [...arr];
    this.size = this.data.length;

  }
  // 重构堆
  rebuildHeap() {
    const L = Math.floor(this.size / 2);
    for (let i = L - 1; i >= 0; i--) {
      this.maxHeapify(i);
    }

  }

  // 判断是否是堆
  isHeap() {
    const L = Math.floor(this.size / 2);
    for (let i = 0; i < L; i++) {
      const l = left(i) || Number.MIN_SAFE_INTEGER;
      const r = right(i) || Number.MIN_SAFE_INTEGER;
      // 要判断l r是否存在
      const max = Math.max(this.data[i], l, r);
      if (max !== this.data[i]) {
        return false
      }
    }
    return true;
  }

  maxHeapify(i) {
    let max = i;

    // 求左右节点中较大的序号
    const l = left(i);
    const r = right(i);
    if (this.data[l] > this.data[i]) {
      max = l
    }

    if (this.data[r] > this.data[i]) {
      max = r
    }
    // 如果当前节点最大，已经是最大堆
    if (max === i) { return }

    swap(this.data, i, max);

    // 递归向下执行
    this.maxHeapify(max);

  }
}