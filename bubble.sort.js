const arr = [1, 5, 3, 7, 2, 10]

const bubbleSort = (arr) => {
  const len = arr.length
  let isSwapped = false
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        isSwapped = true
      }
    }
    if (!isSwapped) break
  }
  return arr
}

console.log(bubbleSort(arr))
