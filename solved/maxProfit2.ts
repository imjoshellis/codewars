// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/564/
/* PROBLEM:
 *
 * Say you have an array prices for which the ith element is the price of a
 * given stock on day i.
 *
 * Design an algorithm to find the maximum profit. You may complete as
 * many transactions as you like (i.e., buy one and sell one share of
 * the stock multiple times).
 *
 */

const maxProfit2 = (ns: number[]): number => {
  if (ns[0] === undefined) return 0
  // when ns[i+1] > ns[i], buy
  // when ns[i+1] < ns[i] || i+1 === len, sell
  let isBuying = true
  let currentStock: number
  let profit = 0

  const buyStock = (i: number): void => {
    currentStock = ns[i]
    isBuying = false
  }

  const sellStock = (i: number): void => {
    profit += ns[i] - currentStock
    isBuying = true
  }

  for (let i = 0; i < ns.length - 1; i++) {
    if (isBuying && ns[i] < ns[i + 1]) buyStock(i)
    if (!isBuying && ns[i] > ns[i + 1]) sellStock(i)
  }

  if (!isBuying) sellStock(ns.length - 1)

  return profit
}

export { maxProfit2 }
