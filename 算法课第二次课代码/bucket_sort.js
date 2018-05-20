function bucket_sort(A){
  const buckets = [...Array(1000)].map(x => [])
  for(let i = 0; i < A.length; i++){
    buckets[A[i]].push(A[i])
  }
  let result = []
  for(let i = 0; i < buckets.length; i++){
    if(buckets[i].length > 0){
      buckets[i].forEach(x => {
        result.push(x)
      })
    }
  }
  return result
}


/* 验证正确性 */
const {assert} = require('chai')
assert.deepEqual(
  bucket_sort([5,4,3,2,1]), [1,2,3,4,5])