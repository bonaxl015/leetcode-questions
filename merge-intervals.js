const merge = (intervals) => {
  const res = []

  if (intervals.length === 0) return res

  intervals.sort((a, b) => a[0] - b[0])
  let tmpInterval = intervals[0]

  for (let i = 1; i < intervals.length; i++) {
    const [tmpStart, tmpEnd] = tmpInterval
    const [start_i, end_i] = intervals[i]

    const low = Math.min(tmpStart, start_i)
    const max = Math.max(tmpEnd, end_i)

    if (tmpEnd >= start_i) {
      tmpInterval = [low, max]
    } else {
      res.push(tmpInterval)
      tmpInterval = intervals[i]
    }
  }

  res.push(tmpInterval)

  return res
}

let input = [[0,0], [1,4]]
console.log(merge(input))
