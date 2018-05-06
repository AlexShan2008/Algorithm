const fs = require('fs')
// const insertion_sort = require('./04-insertion_sort')
const merge_sort = require('./04-merge_sort')
const qsort = require('./05-qsort')
const numberStr = fs.readFileSync("./data/100w.data", 'utf-8')
const numbers = numberStr.split('\n')

const t1 = new Date().getTime()


qsort(numbers)
// numbers.sort( (a, b) =>  {return a - b} )

const t = new Date().getTime() - t1

console.log('finished:' + t + 'ms')

