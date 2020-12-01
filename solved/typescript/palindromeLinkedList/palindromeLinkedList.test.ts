import { ListNode } from '../../lib/types/ListNode'
import { palindromeLinkedList } from '../palindromeLinkedList'

it('accepts a node and returns boolean', () => {
  const test = new ListNode()
  expect(palindromeLinkedList(test)).toBe(true)
})

it('returns true for single node', () => {
  const test = new ListNode(2, null)
  expect(palindromeLinkedList(test)).toBe(true)
})

it('returns false for two different nodes', () => {
  const test = new ListNode(2, new ListNode(1))
  expect(palindromeLinkedList(test)).toBe(false)
})

it('returns true for two same nodes', () => {
  const test = new ListNode(2, new ListNode(2))
  expect(palindromeLinkedList(test)).toBe(true)
})

it('returns true for three palindrome nodes', () => {
  const test = new ListNode(2, new ListNode(3, new ListNode(2)))
  expect(palindromeLinkedList(test)).toBe(true)
})

it('returns true for four palindrome nodes', () => {
  const test = new ListNode(
    2,
    new ListNode(3, new ListNode(3, new ListNode(2)))
  )
  expect(palindromeLinkedList(test)).toBe(true)
})

it('returns false for three non-palindrome nodes', () => {
  const test = new ListNode(2, new ListNode(3, new ListNode(3)))
  expect(palindromeLinkedList(test)).toBe(false)
})

it('returns false for four non-palindrome nodes', () => {
  const test = new ListNode(
    0,
    new ListNode(2, new ListNode(2, new ListNode(9)))
  )
  expect(palindromeLinkedList(test)).toBe(false)
})
