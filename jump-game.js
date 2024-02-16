var canJump = function(nums) {
  let n = nums.length //5
  let goal = n - 1 //4
  for (let i = n - 1; i >= 0; i--) {
    if (i + nums[i] >= goal) {
      goal = i
    }
  }
  return goal === 0
}

console.log(canJump([3,2,1,0,4]))
console.log(canJump([0]))
