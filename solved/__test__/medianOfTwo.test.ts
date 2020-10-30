import { findMedianSortedArrays } from './medianOfTwo'

it('solves a dumb case', () => {
  const a1 = [0]
  const a2 = [0]
  expect(findMedianSortedArrays(a1, a2)).toBe(0)
})

it('solves a simple case', () => {
  const a1 = [2]
  const a2 = [1, 3]
  expect(findMedianSortedArrays(a1, a2)).toBe(2)
})

it('solves a weird case', () => {
  const a1 = [] as number[]
  const a2 = [1]
  expect(findMedianSortedArrays(a1, a2)).toBe(1)
})

it('solves a weird case', () => {
  const a1 = [] as number[]
  const a2 = [2]
  expect(findMedianSortedArrays(a1, a2)).toBe(2)
})
