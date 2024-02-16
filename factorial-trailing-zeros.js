var trailingZeroes = function(n) {
  let result = 0;

  while(n >= 5) {
      let a = Math.floor(n / 5);
      result += a;
      n = a;
  }
  return result;
};
