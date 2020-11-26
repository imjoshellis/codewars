import { maxProfit2 } from './maxProfit2'

it('does nothing if the prices all descend', () => {
  const test = [2, 1, 0]
  expect(maxProfit2(test)).toBe(0)
})

it('handles one buy/sell', () => {
  const test = [2, 1, 3]
  expect(maxProfit2(test)).toBe(2)
})

it('handles multi buy/sell', () => {
  const test = [2, 1, 3, 2, 4]
  expect(maxProfit2(test)).toBe(4)
})
