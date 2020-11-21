import { reverseStr } from './reverseStr'

it('solves base case', () => {
  const test = 'abcdefg'
  expect(reverseStr(test, 2)).toBe('bacdfeg')
})
