const canConstruct = (ransomNote, magazine) => {
  const obj = {}

  for (let i = 0; i < magazine.length; i++) {
    if (obj[magazine[i]] === undefined) {
      obj[magazine[i]] = 1
    } else {
      obj[magazine[i]] = obj[magazine[i]] + 1
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (obj[ransomNote[i]] === undefined || obj[ransomNote[i]] <= 0) {
      return false
    } else {
      obj[ransomNote[i]] = obj[ransomNote[i]] - 1
    }
  }

  return true
}

let note = 'aa'
let magazine = 'ab'
console.log(canConstruct(note, magazine))
