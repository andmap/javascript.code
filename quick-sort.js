/* 
quick sort
==
==
Default sort() in JavaScript uses insertion sort by V8 Engine of Chrome 
and Merge sort by Mozilla Firefox and Safari.

But, other this is not suitable if you need to sort large number of elements. 
So, the solution is to use Quick sort for large dataset.

Quick sort follows Divide and Conquer algorithm

First select an element which is to be called as pivot element.
Next, compare all array elements with the selected pivot element and arrange them in such a way that,
elements less than the pivot element are to it’s left and greater than pivot is to it’s right.
Finally, perform the same operations on left and right side elements to the pivot element.

*/
const swap = (arr, from, to) => {
  const copy = arr[to]
  arr[to] = arr[from]
  arr[from] = copy
}
const partition = (arr, start, end) => {
  const pivot = arr[Math.floor((end + start) / 2)]
  let i = start
  let j = end

  while (i <= j) {
    while (arr[i] < pivot) {
      i++
    }
    while (arr[j] > pivot) {
      j--
    }
    if (i <= j) {
      swap(arr, i, j)
      i++
      j--
    }
  }

  return i
}

const quickSort = (arr, left, right) => {
  let index
  if (arr.length > 1) {
    index = partition(arr, left, right)
    console.log('partition', left, right, arr)
    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort(arr, left, index - 1)
    }
    if (index < right) {
      //more elements on the right side of the pivot
      quickSort(arr, index, right)
    }
  }
  return arr
}

const arr = [5, 3, 7, 6, 2, 9]
const result = quickSort(arr, 0, arr.length - 1)
