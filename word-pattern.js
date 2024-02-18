const wordPattern = (pattern, s) => {
  let patternArr = pattern.split('')
  let sArr = s.split(' ')
  let hashObj = {}
  if (patternArr.length !== sArr.length) return false
  if (new Set(patternArr).size !== new Set(sArr).size) return false

  for (let i = 0; i < patternArr.length; i++) {
    if (!hashObj[pattern[i]]) {
      hashObj[patternArr[i]] = sArr[i]
    } else if (hashObj[patternArr[i]] !== sArr[i]) {
      return false
    }
  }

  return true
}

let pattern = 'abba'
let s = 'dog dog dog dog'
console.log(wordPattern(pattern, s))
