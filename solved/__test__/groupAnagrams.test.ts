import { groupAnagrams } from './groupAnagrams'

it('does nothing', () => {
  const test = ['']
  expect(groupAnagrams(test)).toEqual([test])
})

it('does nothing', () => {
  const test = ['a']
  expect(groupAnagrams(test)).toEqual([test])
})
