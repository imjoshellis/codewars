import { orangesRotting } from './orangesRotting'

it('uses correct params', () => {
  const input = [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1]
  ]

  expect(orangesRotting(input)).toBe(4)
})
