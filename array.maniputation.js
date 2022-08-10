const n = 40
const arrs = [
  [29, 40, 787],
  [9, 26, 19],
  [21, 31, 214],
  [8, 22, 719],
  [15, 23, 102],
  [11, 24, 83],
  [14, 22, 321],
  [5, 22, 300],
  [11, 30, 832],
  [5, 25, 29],
  [16, 24, 577],
  [3, 10, 905],
  [15, 22, 335],
  [29, 35, 254],
  [9, 20, 20],
  [33, 34, 351],
  [30, 38, 564],
  [11, 31, 969],
  [3, 32, 11],
  [29, 35, 267],
  [4, 24, 531],
  [1, 38, 892],
  [12, 18, 825],
  [25, 32, 99],
  [3, 39, 107],
  [12, 37, 131],
  [3, 26, 640],
  [8, 39, 483],
  [8, 11, 194],
  [12, 37, 502],
]

function arrayManipulation(n, queries) {
  const arr = Array(n).fill(0)
  let max = 0
  for (let i = 0; i < queries.length; i++) {
    const [a, b, k] = queries[i]
    for (let j = a - 1; j <= b - 1; j++) {
      arr[j] += k
      if (arr[j] > max) max = arr[j]
    }
  }

  return max
}

function arrayManipulation2(n, queries) {
  const arr = Array(n).fill(0)

  for (let i = 0; i < queries.length; i++) {
    const [a, b, k] = queries[i]
    arr[a - 1] += k
    arr[b] += -k
  }
  let max = 0
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
    if (total > max) max = total
  }

  return max
}

console.log(arrayManipulation(n, arrs))
console.log(arrayManipulation2(n, arrs))
