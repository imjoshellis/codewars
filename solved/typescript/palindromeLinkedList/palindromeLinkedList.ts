import { ListNode } from '../lib/types/ListNode'

// https://leetcode.com/problems/palindrome-linked-list/
export const palindromeLinkedList = (head: ListNode | null): boolean => {
  if (head === null || head.next === null) return true

  const stack = [] as number[]
  let slow = head
  let fast = head

  while (fast?.next?.next) {
    stack.push(slow.val)
    slow = slow.next!
    fast = fast.next.next
    console.log({ stack })
  }

  if (fast.next) stack.push(slow.val)

  while (stack.length > 0 && slow.next) {
    slow = slow.next
    console.log({ stack })
    if (slow.val !== stack.pop()) return false
  }

  if (fast === head) return slow.val === head.next.val

  return stack.length === 0
}
