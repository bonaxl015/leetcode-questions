const tribonacci = (n) => {
  let t0 = 0
  let t1 = 1
  let t2 = 1
  let temp1, temp2

  if (n === 0) return t0
  if (n === 1) return t1
  if (n === 2) return t2

  while (n > 2) {
    temp1 = t1
    temp2 = t2
    t2 = t0 + t1 + t2;
    t1 = temp2;
    t0 = temp1;
    n--;
  }

  return t2;
}

console.log(tribonacci(4))
