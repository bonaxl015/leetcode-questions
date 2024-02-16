/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let i = 0
  let j = s.length - 1
  let wordArr = s.split('')
  let vowelSet = new Set(['a', 'e', 'i', 'o', 'u'])

  const isVowel = (char) => {
      return vowelSet.has(char.toLowerCase())
  }
  while (i < j) {
      if (!isVowel(wordArr[i])) {
          i++
      }
      if (!isVowel(wordArr[j])) {
          j--
      }
      if (isVowel(wordArr[i]) && isVowel(wordArr[j])) {
          [wordArr[i], wordArr[j]] = [wordArr[j], wordArr[i]]
          i++
          j--
      }
  }
  return wordArr.join('')
};

console.log(reverseVowels('hello'))