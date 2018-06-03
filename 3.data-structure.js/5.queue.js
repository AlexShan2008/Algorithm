// 队列

// 1 FIFO
// 2 Enqueue Dequeue 

// 拥有两个指针
// 头指针：取出元素时向右移动
// 尾指针：插入元素时向右移动

class Queue {
  constructor(max = 1000) {
    this.max = max;
    this.data = new Array(max);
    this.head = 0;
    this.tail = 0;
    this.size = 0;

  }
  /**
   * 入列
   */

  enqueue(x) {
    this.data[this.tail] = x;
    this.size++;

    if (this.tail === this.max - 1) {
      this.tail = 0
    } else {
      this.tail++;
    }
  }

  /**
   * 出列
   */
  dequeue() {
    this.size--;

  }
}

module.exports = Queue;