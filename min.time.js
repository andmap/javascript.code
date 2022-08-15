const files = [4, 1, 3, 2, 8]
const numCores = 4
const limit = 1
function minTime(files, numCores, limit) {
  // Write your code here
  let count = 0
  let parallel = []
  for (let i = 0; i < files.length; i++) {
    const numOfLine = files[i]
    if (numOfLine % numCores === 0) {
      parallel.push(numOfLine / numCores)
    } else count += numOfLine
  }
  parallel.sort((a, b) => (a > b ? -1 : 1))

  for (let i = 0; i < parallel.length; i++) {
    if (i < limit) {
      count += parallel[i]
    } else count += parallel[i] * numCores
  }

  return count
}

console.log(minTime(files, numCores, limit))
