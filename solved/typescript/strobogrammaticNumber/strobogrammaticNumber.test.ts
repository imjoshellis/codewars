import { isStrobogrammatic } from './strobogrammaticNumber'

it('handles true individual numbers', () => {
  expect(isStrobogrammatic('1')).toBe(true)
  expect(isStrobogrammatic('8')).toBe(true)
  expect(isStrobogrammatic('0')).toBe(true)
})

it('handles false individual numbers', () => {
  expect(isStrobogrammatic('3')).toBe(false)
  expect(isStrobogrammatic('4')).toBe(false)
  expect(isStrobogrammatic('6')).toBe(false)
  expect(isStrobogrammatic('7')).toBe(false)
})

it('handles 69 and 96', () => {
  expect(isStrobogrammatic('69')).toBe(true)
  expect(isStrobogrammatic('96')).toBe(true)
})

it('handles 609', () => {
  expect(isStrobogrammatic('609')).toBe(true)
})
