var romanToInt = function(s) {
  const converter = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  const toNumArray = [...s].map(item => converter[item])
  let num = 0
  for (let i = 0; i < toNumArray.length; i++) {
    if (toNumArray[i + 1] > toNumArray[i]) {
      num -= toNumArray[i]
    } else {
      num += toNumArray[i]
    }
  }
  return num
}

console.log(romanToInt('MCMIX'))
console.log(romanToInt('III'))
console.log(romanToInt('LX'))