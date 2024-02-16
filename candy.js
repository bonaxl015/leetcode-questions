const candy = (ratings) => {
  const ratingLength = ratings.length
  let candies = Array(ratingLength).fill(1)

  for (let i = 0; i < ratingLength; i++) {
    if (ratings[i] > ratings[i - 1] && candies[i] <= candies[i - 1]) {
      candies[i] = candies[i - 1] + 1
    }
  }
  
  for (let i = ratingLength - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) {
      candies[i] = candies[i + 1] + 1
    }
  }

  return candies.reduce((sum, item) => (sum + item))
}

let input = [1, 0, 2]
console.log(candy(input))
