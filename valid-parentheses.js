var isValid = function(s) {
  if (s[0] === '}' || s[0] === ']' || s[0] === ')' || s.length === 1) {
    return false
  }

  let stack = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '{' || s[i] === '[' || s[i] === '(') {
      stack.push(s[i])
    } else {
      const pop = stack.pop()
      if (pop === '{' && s[i] !== '}') return false
      if (pop === '[' && s[i] !== ']') return false
      if (pop === '(' && s[i] !== ')') return false
      if (pop === undefined) return false
    }
  }
  return stack.length === 0
}