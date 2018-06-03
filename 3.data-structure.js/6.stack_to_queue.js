const Stack = require('./4.stack');

const Queue = require('./5.queue');

const s1 = new Stack(); // 用于入队
const s2 = new Stack(); // 用于出队

s.push(1);
s.push(2);
s.push(3);
// pop() --- 3 -> 1


class Queue{
  constructor(max){
    this.s1 = new Stack(max);
    this.s2 = new Stack(max);
  }

  enqueue(x){
    this.s1.push(x);
  }

  dequeue(){
    while (this.s1.length) {
      this.s2.push(this.s1.pop());
    }

    return this.s2.pop();
  }
}




const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

//  1 1 2 3 5 8
function feb(n) {
  return feb(n) = n > 2 ? feb(n - 1) + feb(n - 2) : 1;
}



