// Write code that enhances all arrays such that you can call the
// array.last() method on any array and it will return the last element.
// If there are no elements in the array, it should return -1.

Array.prototype.last = function() {
  if (!this.length) return -1
  return this[this.length - 1]
};

const arr1 = [1, null, {}, 'e']
const arr2 = []
const arr3 = [2, 3, 4]

console.log(arr1.last())
console.log(arr2.last())
console.log(arr3.last())
