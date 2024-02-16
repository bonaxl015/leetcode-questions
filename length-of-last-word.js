var lengthOfLastWord = function(s) {
  const splitted = s.trim().split(' ')
  return splitted[splitted.length - 1].length
}

console.log(lengthOfLastWord('hello world'))
console.log(lengthOfLastWord('   fly me   to   the moon  '))
console.log(lengthOfLastWord('luffy is still joyboy'))