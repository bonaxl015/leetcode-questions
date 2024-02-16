function combine(n, k) {
  let result = []

  const loop = (subArr, index) => {
    if (subArr.length === k) {
      result.push([...subArr])
      return
    }

    if (subArr.length > k) return

    for (let i = index; i <= n; i++) {
      subArr.push(i)
      loop(subArr, i + 1)
      subArr.pop()
    }
  }

  loop([], 1)
  return result
}

console.log(combine(4, 2))