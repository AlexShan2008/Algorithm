// Ramda 函数操作库
// JS标准函数库数据处理函数

// immutable 可以保证数据永远不会改变
// co库Node.js


// 数组的操作Ramda
// 函数式编程
// 微信小程序禁止使用eval
// 多用语义性很强的语法、变量标识等；


// 迭代器Iterator  next 方法；不需要关心内部构造；迭代树、图等数据结构

// 生成器 Genertor 只能构造迭代器
// for of  或者 ...解构  while 循环
// 函数的签名
// 架构师反向:宏观\微观
// 中文按拼音排序;
// String.localeCompare('str','zh);

// 链式操作，100万调数据Node.js中读取，100mb,读入后进行处理；..map().fliter().sort()
// 缺点：需要多次遍历；
// 优点：语义化
// imutable.js建议使用

// 在数据操作和处理的情况下尽量不要用改变原数据结构；

// 递归要思考性能: 终止项,表达式

// JavaScript 解析引擎，代替eval()；  小程序，实现热更新；

// css 选择器  

// 面试常用工作常用


// sieve prime 判断是否是素数的算法
function sieve_primes(n) {
    const list = [];
    const numbers = Array.from({
        length: n - 2
    }, (_, i) => {
        i + 2;
    });

    let p = null;
    while ((p = numbers.shift())) {
        numbers = numbers.filter(t => {
            return t % p !== 0
        })
    }

    return numbers;
}
let res = sieve_primes(10);
console.log(res);

// 判断数据类型是值类型;
function isTypeValue(obj){
    if (obj === null && typeof obj === object ){

    }

}

// 根据数量级十万级以上的操作就必须要考虑算法的难度问题。

// DOMToken 什么意思？
// indexDB 本地数据；

// 数组。DOM操作