// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// Example
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Solution
const twoSum = (nums, target) => {
  const numObj = {}
  for(let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]
    if(numObj[diff] !== undefined) {
      return [numObj[diff], i]
    } else {
      numObj[nums[i]] = i
    }
  }
  return []
}

// Checking
const test01 = twoSum([2, 7, 11, 15], 9)
const test02 = twoSum([3, 2, 4], 6)
console.log(test01) // [0, 1]
console.log(test02) // [1, 2]
