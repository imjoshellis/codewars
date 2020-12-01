import { containsDuplicate } from './containsDuplicate'

it('does nothing', () => {
  const test = [] as number[]
  expect(containsDuplicate(test)).toBe(false)
})

it('returns false when no dups', () => {
  const test = [1, 2, 3]
  expect(containsDuplicate(test)).toBe(false)
})

it('returns true when dups', () => {
  const test = [1, 2, 3, 3]
  expect(containsDuplicate(test)).toBe(true)
})
