import { removeDuplicates } from './removeDuplicates'

it('does nothing if no dups', () => {
  const test = [1, 2, 3]
  expect(removeDuplicates(test)).toBe(3)
  expect(test).toEqual([1, 2, 3])
})

it('removes duplicates', () => {
  const test = [1, 1, 2, 3]
  expect(removeDuplicates(test)).toBe(3)
  expect(test).toEqual([1, 2, 3])
})
