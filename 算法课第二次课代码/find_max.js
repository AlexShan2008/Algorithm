function find_max(arr){
  let max = Number.NEGATIVE_INFINITY 
  for(let i = 0; i < arr.length; i++){
    max = (arr[i] > max ? arr[i] : max)
  }
  return max
}

console.log( find_max([1,2,3,4,6,-1,10,9, 101,2]) )
