import { ListNode } from './../lib/ListNode'
import { removeElements } from './removeElements'

it('does nothing', () => {
  expect(removeElements(null, 1)).toBe(null)
})

it('handles edge case', () => {
  const head = new ListNode(1, new ListNode(1))
  expect(removeElements(head, 1)).toBe(null)
})

it('handles normal case', () => {
  const head = new ListNode(1, new ListNode(2))
  expect(removeElements(head, 1)).toEqual(new ListNode(2))
})

it('handles second normal case', () => {
  const head = new ListNode(2, new ListNode(2))
  expect(removeElements(head, 1)).toEqual(head)
})

it('handles third normal case', () => {
  const head = new ListNode(2, new ListNode(1, new ListNode(4)))
  expect(removeElements(head, 1)).toEqual(new ListNode(2, new ListNode(4)))
})

it('handles fourth normal case', () => {
  const head = new ListNode(2, new ListNode(1, new ListNode(4)))
  expect(removeElements(head, 4)).toEqual(new ListNode(2, new ListNode(1)))
})
