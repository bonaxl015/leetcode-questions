var vowelStrings = function(words, queries) {
  let res = []
  let vowels = ['a', 'e', 'i', 'o', 'u']

  for (let i = 0; i < queries.length; i++) {
    let count = 0
    for (let j = queries[i][0]; j <= queries[i][1]; j++) {
      const wordLength = words[j].length - 1
      if (
        vowels.includes(words[j][0]) &&
        vowels.includes(words[j][wordLength])
      ) {
        count++
      }
    }
    res.push(count)
  }
  return res
}
