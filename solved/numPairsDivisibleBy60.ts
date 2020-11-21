// https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/
const numPairsDivisibleBy60 = (nums: number[]) => {
  let count = 0,
    map = new Map()

  for (let num of nums) {
    let mod = num % 60
    let sHalf = mod === 0 ? 0 : 60 - mod

    if (map.has(sHalf)) {
      count += map.get(sHalf)
    }

    if (map.has(mod)) {
      map.set(mod, map.get(mod) + 1)
    } else {
      map.set(mod, 1)
    }
  }

  return count
}

export { numPairsDivisibleBy60 }
