const max = 10

function accumulate(arr) {
  let total = 0
  function sum() {
    return arr.map((num) => {
      total += num
      return total
    })
  }

  return sum
}

function maxTimes(arr, max) {
  console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) return i
  }
  return arr.length
}

const stack1 = maxTimes(accumulate([4, 2, 4, 6, 1].slice(0, 4))(), max)
const stack2 = maxTimes(accumulate([2, 1, 8, 5].slice(0, 4))(), max)

console.log(stack1, stack2)
