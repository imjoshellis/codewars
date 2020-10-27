import { containsDuplicate } from './containsDuplicate'

it('returns false if no dups', () => {
  const test = [1, 2]
  expect(containsDuplicate(test)).toBe(false)
})

it('returns true if dups', () => {
  const test = [1, 3, 3]
  expect(containsDuplicate(test)).toBe(true)
})
