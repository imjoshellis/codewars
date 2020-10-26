import { isValid } from '../isValid'

it('handles ()', () => {
  const test = '()'
  expect(isValid(test)).toBe(true)
})

it('handles ()[]{}', () => {
  const test = '()[]{}'
  expect(isValid(test)).toBe(true)
})

it('handles (]', () => {
  const test = '(]'
  expect(isValid(test)).toBe(false)
})

it('handles ([)]', () => {
  const test = '([)]'
  expect(isValid(test)).toBe(false)
})

it('handles {{[(())][()]}{}}', () => {
  const test = '{{[(())][()]}{}}'
  expect(isValid(test)).toBe(true)
})

it('handles [', () => {
  const test = '['
  expect(isValid(test)).toBe(false)
})

it('handles [[', () => {
  const test = '[['
  expect(isValid(test)).toBe(false)
})
