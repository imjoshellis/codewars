import { calPoints } from './calPoints'

it('solves leetcode', () => {
  const test = ['5', '2', 'C', 'D', '+']
  expect(calPoints(test)).toBe(30)
})
