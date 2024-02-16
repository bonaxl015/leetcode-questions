var reverseWords = function(s) {
  const splitted = s.trim().split(' ')
  let result = []
  for (let i = splitted.length; i > -1; i--) {
    if (splitted[i]) {
      result.push(splitted[i])
    }
  }
  return result.join(' ')
}

console.log(reverseWords('the sky is blue'))
console.log(reverseWords('  hello world  '))
console.log(reverseWords('a good   example'))