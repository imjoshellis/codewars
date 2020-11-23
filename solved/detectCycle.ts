import { ListNode } from '../lib/ListNode'

// https://leetcode.com/explore/learn/card/linked-list/214/two-pointer-technique/1214/
const detectCycle = (head: ListNode | null): ListNode | null => {
  if (!head) return null
  let slow = head
  let fast = head
  let loop = false
  while (fast?.next?.next && slow.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      loop = true
      break
    }
  }
  if (loop) {
    slow = head
    while (fast !== slow) {
      slow = slow.next!
      fast = fast.next!
    }
    return slow
  }
  return null
}

export { detectCycle }
