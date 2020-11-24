import { arrayToList, ListNode } from './../lib/ListNode'
import { rotateRight } from './rotateRight'

it('does nothing', () => {
  expect(rotateRight(null, 1)).toBe(null)
})

it('rotates once', () => {
  const node = new ListNode(1, new ListNode(2))
  expect(rotateRight(node, 1)).toEqual(new ListNode(2, new ListNode(1)))
})

it('rotates twice', () => {
  const node = new ListNode(1, new ListNode(2))
  expect(rotateRight(node, 2)).toEqual(new ListNode(1, new ListNode(2)))
})

it('rotates twice with three elements', () => {
  const node = arrayToList([1, 2, 3, 4])
  expect(rotateRight(node, 2)).toEqual(arrayToList([3, 4, 1, 2]))
})

it('rotates crazy amount of even times', () => {
  const node = new ListNode(1, new ListNode(2))
  expect(rotateRight(node, 20020)).toBeDefined()
})

it('rotates crazy amount of odd times', () => {
  const node = new ListNode(1, new ListNode(2, new ListNode(3)))
  expect(rotateRight(node, 20707)).toBeTruthy()
})
