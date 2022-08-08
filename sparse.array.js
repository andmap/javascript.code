function matchingStrings(strings, queries) {
  let result = new Array(queries.length)
  for (let i = 0; i < queries.length; i++) {
    const query = queries[i]
    result[i] = 0
    const filtered = strings.filter((s) => s !== query)
    result[i] = strings.length - filtered.length
  }
  return result
}

const strings = ['def', 'de', 'fgh']
const query = ['de', 'lmn', 'fgh']
console.log(matchingStrings(strings, query))
