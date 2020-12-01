import { ListNode } from '../../lib/types/ListNode'
import { mergeTwoLists } from '../mergeTwoLists'

it('returns null for null inputs', () => {
  expect(mergeTwoLists(null, null)).toBe(null)
})

it('returns l1 if l2 is null', () => {
  const l1 = new ListNode(1)
  expect(mergeTwoLists(l1, null)).toBe(l1)
})

it('returns l2 if l1 is null', () => {
  const l2 = new ListNode(1)
  expect(mergeTwoLists(null, l2)).toBe(l2)
})

it('returns correctly merged list', () => {
  const l1 = new ListNode(2, new ListNode(3))
  const l2 = new ListNode(1)
  const result = new ListNode(1, l1)
  expect(mergeTwoLists(l1, l2)).toEqual(result)
})
