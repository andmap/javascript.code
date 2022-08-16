function extraLongFactorials(n) {
  return n > 1 ? n * extraLongFactorials(n - 1) : 1
}

console.log(extraLongFactorials(25))
