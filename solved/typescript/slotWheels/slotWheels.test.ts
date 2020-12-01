import { slotWheels } from './slotWheels'

it('receives string[] and returns number', () => {
  const test = ['137', '364', '115', '724']
  expect(slotWheels(test)).toBe(14)
})

it('receives string[] and returns number', () => {
  const test = ['1112', '1111', '1211', '1111']
  expect(slotWheels(test)).toBe(5)
})
