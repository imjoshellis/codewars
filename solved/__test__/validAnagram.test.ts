import { isAnagram } from './validAnagram'

it('inputs 2 strings and returns boolean', () => {
  const test = { s: '', t: '' }
  expect(typeof isAnagram(test.s, test.t)).toBe('boolean')
})

it('inputs 2 anagrams and returns true', () => {
  const test = { s: 'true', t: 'ture' }
  expect(isAnagram(test.s, test.t)).toBe(true)
})

it('inputs 2 non-anagrams of different length and returns false', () => {
  const test = { s: 'true', t: 'arstarst' }
  expect(isAnagram(test.s, test.t)).toBe(false)
})

it('inputs 2 non-anagrams of same length and returns false', () => {
  const test = { s: 'true', t: 'arst' }
  expect(isAnagram(test.s, test.t)).toBe(false)
})
