var plusOne = function(digits) {
  let length = digits.length - 1;
  const reverseNum = digits.reverse();
  let index = 0;

  function loop(index) {
      if (reverseNum[index] === 9) {
          if (reverseNum[length] === 9 && index === length) {
            length++;
            reverseNum[length] = 0;
          }
          reverseNum[index] = 0;
          loop(index + 1);
      } else {
          reverseNum[index] = reverseNum[index] + 1;
      }
  }
  
  loop(index);
  return digits.reverse();
};

console.log(plusOne([9,8,9]))
// console.log(plusOne([9]))