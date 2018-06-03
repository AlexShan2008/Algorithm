// 栈的性质
// LIFO
// PUSH / POP
// Underflow 没值了
// Overflow  栈溢出

class Stack {
  constructor(max = 1000) {
    // 空间；为了性能，提取分配空间；
    this.data = new Array(max);
    // 栈顶（栈指针）
    this.top = -1;
    this.max = max;
  }

  push(x) {
    if (this.top === this.max - 1) {
      throw 'stack overflow'
    }
    this.top++;
    this.data[this.top] = x;
  }

  pop() {
    if (this.top === - 1) {
      throw 'stack underflow'
    }
    const x = this.data[this.top];
    this.top--;
    return x;
  }

  // 获取长度
  get length() {
    return this.top + 1
  }

}

module.exports = Stack;

let a = new Stack(100);

a.push(1);
a.push(2);
// console.log(a.length); // 2
