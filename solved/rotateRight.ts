import { ListNode } from '../lib/ListNode'

// https://leetcode.com/explore/learn/card/linked-list/213/conclusion/1295/
const rotateRight = (head: ListNode | null, k: number): ListNode | null => {
  // guard against basic edge cases
  if (!head) return null
  if (!head.next) return head

  // find old tail
  let oldTail = head
  let size = 1
  while (oldTail.next && size++) oldTail = oldTail.next

  // make list circular (temporarily)
  oldTail.next = head

  // find new tail
  let newTail = head
  let target = size - (k % size) - 1
  while (target--) newTail = newTail.next!

  // the node after the new tail is the new head
  let newHead = newTail.next
  // break the tail's next reference
  newTail.next = null

  return newHead
}

export { rotateRight }
