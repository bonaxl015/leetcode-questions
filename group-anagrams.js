const groupAnagrams = (strs) => {
  const res = []
  const obj = {}

  for (let i = 0; i < strs.length; i++) {
    const strSort = strs[i].split('').sort().join('')
    if (!obj[strSort]) {
      obj[strSort] = [strs[i]]
    } else {
      obj[strSort].push(strs[i])
    }
  }

  Object.values(obj).forEach(item => {
    res.push(item)
  })
  return res
}

let strs = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(strs))
