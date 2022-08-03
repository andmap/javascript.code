/*
a closure is a function that references variables in the outer scope from its inner scope. 
The closure preserves the outer scope inside its inner scope.

A closure is a combination of a function and its ability to remember variables in the outer scope.

*/
/*
for (var index = 1; index <= 3; index++) {
  setTimeout(function () {
    console.log('after ' + index + ' second(s):' + index)
  }, index * 1000)
}
*/
function timeOut(idx) {
  function run() {
    setTimeout(function () {
      console.log('after ' + idx + ' second(s):' + idx)
    }, idx * 1000)
  }
  return run
}
for (var index = 1; index <= 3; index++) {
  timeOut(index)()
}

function greeting(name) {
  let message = 'Hi'

  function sayHi() {
    console.log(`${message} ${name}`)
  }
  function sayMe() {
    console.log(`${message} me`)
  }

  if (name) return sayHi
  return sayMe
}
greeting('jon')()

greeting()()
