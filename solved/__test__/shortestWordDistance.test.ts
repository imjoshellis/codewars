import { shortestWordDistance } from './shortestWordDistance'

it('solves simple case', () => {
  const words = 'hi how are you'.split(' ')
  expect(shortestWordDistance(words, 'hi', 'how')).toBe(1)
})

it('solves simple case', () => {
  const words = 'hi how are you'.split(' ')
  expect(shortestWordDistance(words, 'hi', 'are')).toBe(2)
})

it('solves harder case', () => {
  const words = 'practice makes perfect coding makes'.split(' ')
  expect(shortestWordDistance(words, 'coding', 'practice')).toBe(3)
  expect(shortestWordDistance(words, 'coding', 'makes')).toBe(1)
})
