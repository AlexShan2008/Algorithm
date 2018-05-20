function bucket_sort(A){
  // a-桶的数量
  const a = 100

  // 桶 - a项的二维数组
  const B = [...Array(a + 1)]
    .map(x => [])

  // 下标算法
  const indexFunc = (value) => {
    const key = Math.floor( value / 100 )
    // 0-99 : 存放0-10000的数字 
    // 100 : 放其他的数字
    if(key > 100) {return 100}
    return key
    // return value - 1
  }

  A.forEach(value => {
    const idx = Math.floor( indexFunc(value) )

    if ( !B[idx] ) {
      throw new Error('桶脚标没有命中 index=' + idx) 
    }
    
    B[ idx ].push(value)
  })

  // B = [[0,0], [], [], [3],...]
  // => [0,0,3....]
  // eval( `[${[0,0], [], [], [3],...] + ''}]` )

  // 不推荐
  //return eval(`[${B + ''}]`)
  
  // 不推荐
  //let arr = []
  // O(n) * C= O(n)
  //  B
  //   .forEach( bucket => {
  //     bucket.forEach( value => {
  //       arr.push(value)
  //     })
  //   })
  return [].concat( ...B.map(bucket => {
    return bucket.sort((x, y) => x - y)
  }) )
  // return arr
  //   .reduce( (result, bucket) => {
  //     return result.concat(bucket) // O(n)
  //   }, [])
}

const {assert} = require('chai')
assert.deepEqual(
  bucket_sort([5,4,3,2,1,1, 6, 6.1]),
  [1, 1,2,3,4,5, 6, 6.1]
)

assert.deepEqual(
  bucket_sort([5,4,3,2,1,1, 6, 6.09, 6.07]),
  [1, 1,2,3,4,5, 6, 6.07, 6.09]
)

assert.deepEqual(
  bucket_sort([1, 10000000]),
  [1, 10000000]
)