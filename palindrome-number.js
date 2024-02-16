const isPalindrome = (num) => {
  let numString = String(num)
  let start = 0
  let end = numString.length - 1

  while (start < end) {
    if (numString[start] !== numString[end]) {
      return false
    }
    start++
    end--
  }
  return true
}

let num = -121
console.log(isPalindrome(num))
