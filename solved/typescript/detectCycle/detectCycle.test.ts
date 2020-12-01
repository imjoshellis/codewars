import { detectCycle } from './detectCycle'

it('does nothing', () => {
  expect(detectCycle(null)).toBe(null)
})
