function reverseArray(a) {
  let newArr = a
  for (let i = 0; i < Math.floor(a.length / 2); i++) {
    const copy = newArr[i]
    newArr[i] = a[a.length - 1 - i]
    newArr[a.length - 1 - i] = copy
  }

  return newArr
}

const arr = [1, 2, 5, 7, 8]
console.log(reverseArray(arr))
