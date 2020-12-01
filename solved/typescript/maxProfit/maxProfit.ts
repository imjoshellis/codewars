// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
const maxProfit = (prices: number[]): number => {
  let max = 0
  let min = prices[0]
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) min = prices[i]
    else max = Math.max(prices[i] - min, max)
  }
  return max
}

export { maxProfit }
