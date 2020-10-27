import { convertToTitle } from './convertToTitle'

it('recieves an int and returns a string', () => {
  const test = 1
  expect(convertToTitle(test)).toBe('A')
})

it('returns correct single letter for number', () => {
  expect(convertToTitle(2)).toBe('B')
  expect(convertToTitle(7)).toBe('G')
  expect(convertToTitle(20)).toBe('T')
  expect(convertToTitle(26)).toBe('Z')
})

it('returns correct double letter for given number', () => {
  expect(convertToTitle(28)).toBe('AB')
  expect(convertToTitle(701)).toBe('ZY')
})

it('handles wierd cases', () => {
  expect(convertToTitle(52)).toBe('AZ')
  expect(convertToTitle(703)).toBe('AAA')
})
