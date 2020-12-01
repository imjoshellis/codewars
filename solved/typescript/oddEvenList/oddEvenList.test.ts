import { ListNode } from '../lib/ListNode'
import { oddEvenList } from './oddEvenList'

it('does nothing', () => {
  const test = null
  expect(oddEvenList(test)).toBe(null)
})

it('handles two nodes', () => {
  const test = new ListNode(4, new ListNode(1))
  expect(oddEvenList(test)).toEqual(test)
})

it('handles three nodes', () => {
  const test = new ListNode(4, new ListNode(1, new ListNode(2)))
  expect(oddEvenList(test)).toEqual(
    new ListNode(4, new ListNode(2, new ListNode(1)))
  )
})
