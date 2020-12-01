import { intToRoman } from './integerToRoman'

it('returns single letter nums', () => {
  const test = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
  ])
  for (let [k, v] of test.entries()) {
    expect(intToRoman(v)).toBe(k)
  }
})

it('returns correct strings with just Is', () => {
  expect(intToRoman(1)).toBe('I')
  expect(intToRoman(2)).toBe('II')
  expect(intToRoman(3)).toBe('III')
})

it('returns MM for 2000', () => {
  expect(intToRoman(2000)).toBe('MM')
})

it('returns MCM for 1900', () => {
  expect(intToRoman(1900)).toBe('MCM')
})

it('returns CD for 400', () => {
  expect(intToRoman(400)).toBe('CD')
})

it('returns CCV for 200', () => {
  expect(intToRoman(205)).toBe('CCV')
})

it('returns IV for 4', () => {
  expect(intToRoman(4)).toBe('IV')
})

it('returns IX for 9', () => {
  expect(intToRoman(9)).toBe('IX')
})
