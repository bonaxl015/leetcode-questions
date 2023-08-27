// Given an array of functions [f1, f2, f3, ..., fn],
// return a new function fn that is the function composition of the array of functions.
// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
// The function composition of an empty list of functions is the identity function f(x) = x.
// You may assume each function in the array accepts one integer
// as input and returns one integer as output.

var compose = function(functions) {
	return function(x) {
    return functions.reverse().reduce((value, fn) => {
      return fn(value)
    }, x)
  }
}

const fn1 = [x => x + 1, x => x * x, x => 2 * x]
const fn2 = [x => 10 * x, x => 10 * x, x => 10 * x]
const fn3 = []

console.log(compose(fn1)(4))
console.log(compose(fn2)(1))
console.log(compose(fn3)(42))
