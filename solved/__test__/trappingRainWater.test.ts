import { trap } from './trappingRainWater'

it('does nothing', () => {
  const heights = [0]
  expect(trap(heights)).toBe(0)
})

it('does nothing', () => {
  const heights = [] as number[]
  expect(trap(heights)).toBe(0)
})

it('solves simple case', () => {
  const heights = [1, 0, 1] as number[]
  expect(trap(heights)).toBe(1)
})

it('solves another simple case', () => {
  const heights = [2, 0, 2] as number[]
  expect(trap(heights)).toBe(2)
})
