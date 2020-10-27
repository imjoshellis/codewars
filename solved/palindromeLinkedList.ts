// https://leetcode.com/problems/palindrome-linked-list/

export class ListNode {
  val: number
  next: ListNode | null
  constructor (val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export const palindromeLinkedList = (head: ListNode | null): boolean => {
  if (head === null || head.next === null) return true

  const stack = [] as number[]
  let slow = head,
    fast = head

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
