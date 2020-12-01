import { countAndSay } from './countAndSay'

it('accepts a number and outputs a string', () => {
  const test = 1
  expect(countAndSay(test)).toBe('1')
})

it('outputs "11" with 2 input', () => {
  const test = 2
  expect(countAndSay(test)).toBe('11')
})

it('outputs "21" with 3 input', () => {
  const test = 3
  expect(countAndSay(test)).toBe('21')
})
