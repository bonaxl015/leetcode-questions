/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  if (num < 1 || num > 3999) return 'invalid'
  const units = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
  const tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
  const hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
  const thousands = ['', 'M', 'MM', 'MMM']

  let result = ''

  const loop = number => {
    if (Math.floor(number / 1000) > 0) {
      result += thousands[Math.floor(number / 1000)]
      loop(number % 1000)
      return
    }
    if (Math.floor(number / 100) > 0) {
      result += hundreds[Math.floor(number / 100)]
      loop(number % 100)
      return
    }
    if (Math.floor(number / 10) > 0) {
      result += tens[Math.floor(number / 10)]
      loop(number % 10)
      return
    }
    if (number > 0) {
      result += units[number]
      return
    }
  }

  loop(num)
  return result
}

console.log(intToRoman(2034))
console.log(intToRoman(6))
console.log(intToRoman(504))
console.log(intToRoman(54))
