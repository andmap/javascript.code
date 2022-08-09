function sum(arr) {
  let result = []
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    result.push(sum)
  }
  return result
}

function accumulate(arr) {
  let total = 10
  function sum() {
    return arr.map((num) => {
      total += num
      return total
    })
  }
  return sum
}

function equalStacks(h1, h2, h3) {
  // Write your code here
  const sum1 = sum(h1.reverse())
  const sum2 = sum(h2.reverse())
  const sum3 = sum(h3.reverse())

  let max = 0
  while (sum1.length > 0 && sum2.length > 0 && sum3.length > 0) {
    const min = Math.min(
      sum1[sum1.length - 1],
      sum2[sum2.length - 1],
      sum3[sum3.length - 1]
    )
    console.log(sum1, sum2, sum3)
    if (sum1[sum1.length - 1] > min) sum1.pop()
    if (sum2[sum2.length - 1] > min) sum2.pop()
    if (sum3[sum3.length - 1] > min) sum3.pop()
    if (
      sum1[sum1.length - 1] === sum2[sum2.length - 1] &&
      sum2[sum2.length - 1] === sum3[sum3.length - 1]
    )
      return sum1[sum1.length - 1]
  }

  return 0
}

const result = equalStacks([3, 2, 1, 1, 1], [4, 3, 2], [1, 1, 4, 1])
console.log(result)
