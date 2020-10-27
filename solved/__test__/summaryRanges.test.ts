import { summaryRanges } from './summaryRanges'

it('returns string for single value array', () => {
  const test = [0]
  expect(summaryRanges(test)).toEqual(['0'])
})

it('returns arrow for range', () => {
  let test = [0, 1, 2]
  expect(summaryRanges(test)).toEqual(['0->2'])
  test = [0, 1, 2, 3]
  expect(summaryRanges(test)).toEqual(['0->3'])
})
