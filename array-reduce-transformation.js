// Given an integer array nums, a reducer function fn, and
// an initial value init, return a reduced array.

// A reduced array is created by applying the following operation:
// val = fn(init, nums[0]),
// val = fn(val, nums[1]),
// val = fn(val, nums[2]),
// ... until every element in the array has been processed.
// The final value of val is returned.

// If the length of the array is 0, it should return init.

// Please solve it without using the built-in Array.reduce method.

var reduce = function(nums, fn, init) {
  if (!nums.length) return init
  let res = init
  for(let i = 0; i < nums.length; i++) {
      res = fn(res, nums[i])
  }
  return res
};

const nums1 = [1, 2, 3, 4]
const nums2 = []
const fn1 = function sum(accum, curr) { return accum + curr; }
const fn2 = function sum(accum, curr) { return accum + curr * curr; }
const fn3 = function sum(accum, curr) { return 0; }

console.log(reduce(nums1, fn1, 0))
console.log(reduce(nums1, fn2, 100))
console.log(reduce(nums2, fn3, 25))
