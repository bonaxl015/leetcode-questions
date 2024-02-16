var mySqrt = function(x) {
  let result = 0;
  let index = 0;

  while(index * index <= x) {
      result = index;
      index++;
  }
  return result;
};
