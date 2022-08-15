const parent = [-1, 0, 0, 1, 1, 2]
const filesSize = [1, 2, 2, 1, 1, 1]
/*
{
    5: 1
    2: 1
    4: 1
    1: 0+1
    3: 1
    1: 0+1+1
    2: 2+1
    0: 2+1
    1: 0+1+1+2
    0: 2+1+1 

}
*/
// -1, 0, 0, 0
// 10,11,10,10

// -1 0 1 2
// 1 4 3 4

// const parent = [-1, 0, 0, 0]
// const filesSize = [10, 11, 10, 10]

// const parent = [-1, 0, 1, 2]
// const filesSize = [1, 4, 3, 4]

function calcTotalValue(parent, files_size, index) {
  let result = {}
  let sumOfTree1 = 0
  let sumOfTree2 = 0
  for (let i = parent.length - 1; i >= 0; i--) {
    result[i] = (result[i] || 0) + files_size[i]

    if (i === index) sumOfTree1 = result[i]
    else {
      if (i === 0) {
        sumOfTree2 = result[0]
      } else {
        const pIndex = parent[i]
        result[pIndex] = (result[pIndex] || 0) + result[i]
      }
    }
  }
  console.log('sum:', sumOfTree1, sumOfTree2)
  return Math.abs(sumOfTree1 - sumOfTree2)
}
function mostBalancedPartition(parent, files_size) {
  if (parent.length === 0) return 0
  if (parent.length === 1) return files_size[0]
  if (parent.length === 2) return Math.abs(files_size[0] - files_size[1])
  let diff = 1000000
  for (let i = 1; i < parent.length; i++) {
    diff = Math.min(diff, calcTotalValue(parent, files_size, i))
    console.log(i, diff)
  }
  return diff
}

console.log(mostBalancedPartition(parent, filesSize))
