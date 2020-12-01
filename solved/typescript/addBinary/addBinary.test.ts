import { addBinary } from './addBinary'

it('adds 0s', () => {
  const a = '0'
  const b = '0'
  expect(addBinary(a, b)).toBe('0')
})

it('adds 1s', () => {
  const a = '1'
  const b = '1'
  expect(addBinary(a, b)).toBe('10')
})

it('adds leetcode test case', () => {
  const a = '1010'
  const b = '1011'
  expect(addBinary(a, b)).toBe('10101')
})
