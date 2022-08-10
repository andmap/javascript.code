const str = 'testing No this word testing'
const str2 = 'testing No this word'
//const reg = /yes|no/i
// console.log(reg.test(str))
console.log(str.match(str2))

let testStr = 'Repeat, Repeat, Repeat'
let ourRegex = /Repeat/
console.log(testStr.match(ourRegex))

let humStr = "I'll hum a song"
let hugStr = 'Bear hug'
let huRegex = / hu./
console.log(huRegex.test(humStr))
console.log(huRegex.test(hugStr))
