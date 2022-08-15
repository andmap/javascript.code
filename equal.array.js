const input = [3, 3, 2, 1, 3]
const equalizeArray = (arr) => {
  let result = {}
  let max = 0
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    if (result[element]) {
      result[element] += 1
    } else {
      result[element] = 1
    }
    max = Math.max(max, result[element])
  }
  return arr.length - max
}

console.log(equalizeArray(input))
