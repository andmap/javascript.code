/* 
Binary Search
==
==
Time Complexity: O(logN)
Auxiliary Space: O(1) 
*/
let binarySearch = function (arr, x, start, end) {
  // Base Condition
  if (start > end) return false

  // Find the middle index
  let mid = Math.floor((start + end) / 2)

  // Compare mid with given key x
  if (arr[mid] === x) return true

  // If element at mid is greater than x,
  // search in the left half of mid
  if (arr[mid] > x) return binarySearch(arr, x, start, mid - 1)
  // If element at mid is smaller than x,
  // search in the right half of mid
  else return binarySearch(arr, x, mid + 1, end)
}
let arr = [1, 3, 5, 7, 8, 9]
let x = 15

if (binarySearch(arr, x, 0, arr.length - 1)) console.log('Element found!')
else console.log('Element not found!')
