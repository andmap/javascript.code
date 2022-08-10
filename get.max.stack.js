function getMax(operations) {
  let maxs = []
  let arr = []

  for (let i = 0; i < operations.length; i++) {
    if (operations[i][0] === '1') {
      const num = parseInt(operations[i].substring(2))
      arr.push(num)
    } else if (operations[i][0] === '2') {
      arr.pop()
    } else if (operations[i][0] === '3') {
      let max = 0
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i]
      }
      maxs.push(max)
    }
  }
  return maxs
}

const o = ['1 97', '2', '1 20', '2', '1 26', '1 20', '2', '3', '1 91', '3']
console.log(getMax(o))
