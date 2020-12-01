import { myAtoi } from './stringToInteger'

it('works on basic nums', () => {
  expect(myAtoi('23')).toBe(23)
  expect(myAtoi('100')).toBe(100)
})

it('works on basic negative nums', () => {
  expect(myAtoi('-23')).toBe(-23)
  expect(myAtoi('-100')).toBe(-100)
})

it('works on nums with trailing text', () => {
  expect(myAtoi('23 text afterwards')).toBe(23)
  expect(myAtoi('-100 with more text')).toBe(-100)
})

it('works on nums with preceeding text', () => {
  expect(myAtoi('text before 23')).toBe(0)
  expect(myAtoi('words and 987')).toBe(0)
  expect(myAtoi('text before -100')).toBe(0)
})

it('works on big nums', () => {
  expect(myAtoi('-91283472332')).toBe(-2147483648)
})
