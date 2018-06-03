const Stack = require('./4.stack');

// o(n) 时间复杂度
// 动态规划
// 求斐波那契函数第几项的值
function feb(n) {
  let a = 1;
  let b = 1;

  for(let i = 2; i< n; i ++){
    const t = b;
    b = a + b;
    a = t;
  }

  return b;
}

console.log(feb(5));