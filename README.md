# Algotithm
> 洋葱数学
## 1 基础知识
> 应用环境：图灵机，量子计算机，生物计算机（此处讲的算法是应用图灵机环境，单台，非集群）
### 1.1 数组初始化
- 1. 声明数组
- 2. 赋值[] 数组中会保存终止符
- 3. 原型链上赋值需要的时间，保存数据的方法，如：arr.length arr.sort等

### 1.2 赋值的时间
- 数组和字符串的赋值时间计算基本相同，和长度相关，每赋值1个位置就会占用1个时间
- 寻址的时间为1的时间
- 对象，是个hash表
- 变量的赋值 占用1个CPU时间
- 与规模相关: sort indexOf reduce map等

### 1.3 数据运算 位运算
- ^ | >> + * /
- 字符串的相加 "123"+"345" 和6相关的长度
- Math.pow() Math.sqrt() 常数时间， 但和规模不相关，库函数，耗时都是常数级别。
- Matric 矩阵的乘法 GPU 一般都是显卡上物理实现，速度很快

## 2 前端提高算法性能的意义，更具有挑战性
> 全栈工程师
> 前后端独立上线
> 前端要关注整个项目，包括上线、发布、部署和运维nginx配置等
> 显示器的刷新频率60帧，1000/60 =16.67ms 动画的计算时间，移动端老旧机型实现困难
> 前端要持续提高代码的性能
> 多页面路由计算，50多张页面 500ms react加载500ms, 加载资源1000ms,每个页面的加载需要2-3s
> 服务端一般都是60-100ms

## 3 算法基础知识

> 1 随机打乱数组
```
错误：
arr.sort(()=> Math.random()-.5) 
```
[1,2,3,4]
[1] -> [1,2,3,4] 交换位置
> 2 生成I - N的随机数 [3-8) 不包含8 
```
Math.floor(Math.random()*(N-I) + I )
```
> 3 生成0-30的随机数 N  [0-N)
```
Math.floor(Math.random()* N)
```

## 4 算法的衡量标准：
> *正确性* *性能*
- 渐进上界 O 算法复杂度： 最长时间
1. 常量关系 O(1)
2. 线性关系O(N)+b 
3. O(nlgn) O(N^2) O(n!)
- 渐进下界：最短时间
- 渐进紧密界 ：介于两者之间
> 大树定理，基于平均
**最好情况，最坏情况，平均情况（一半最好，一半最坏）**

### 4.1 正确性:
#### 4.1.1 插入排序
> 等差数列
> 不需要额外空间，在原有数据上进行操作
```
Sn = (a1+an)*n / 2

```
> 等比数列的计算
> 如：插入排序（位置交换）
> 循环不变式：已排序 -  未排序

> Math.sort() 100万条数据（6.8MB），980ms。

#### 4.2 分治策略Divide&Conquer
> 归并排序、快速排序
> 先分割，直到只有2项时再对2项进行排序；

<!-- Number.MAX_SAFE_INTEGER  9007199254740991 -->
`const SENTINEL = Number.MAX_SAFE_INTEGER`

### 4.3 合并排序
> 1. 需要额外空间
> 2. 常数时间相对较多
> 3. 速度快

### 4.4 快速排序
> T(N*a)*2 +O(N)  // O(N)
> O(N^2) 最坏
> 平均时间：T(N*a) +T(N*b) +O(n) // a+b = 1   O(NlogN)

**思考**
> 1. 如何避免快速排序的最坏情况发生？
> 2. 插入排序如何归并排序？
> 3. 组合各排序算法，使排序算法最快？

Chrome 网页性能
performance
- Loading    加载
- Scripting  脚本的执行
- Rendering  渲染
- Painting   绘图
- Other      其它
- Idle       可以用于交互的时间

> 队列和调度的算法React Fiber
```
React 16 
requestAnimationFrame()
```
# 2 前端算法的应用

## 图算法 打包工具
> Webpack 工程的应用
> Rollup library (react Vue)等库的打包
tree-shaking 

## 2.1 树算法
> DOM-DIFF 算法

## SPA
> js脚本文件一般不能超过300-400kb
- react 30k
- react-dom 

### 性能优化
服务端直出
Preact 替换React
每张页面100-150KB 

## 移动端调试的模拟
Chrome - network - Slow 3G

## 常用算法的复杂度（数组）
数组中修改一个元素的复杂度O(1)
数组中插入、铰接或者删除非末尾元素一般复杂度 O(n)
```
Array.slice(start)
Array.splice(start,deleteCount,insertItem) 
Array.concat
```
字符串的常用方法

Number.MAX_SAFE_INTEGER
Number.NEGATIVE_INFINITY
