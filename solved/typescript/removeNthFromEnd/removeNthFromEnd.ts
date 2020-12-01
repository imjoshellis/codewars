import { ListNode } from '../lib/types/ListNode'

// https://leetcode.com/explore/learn/card/linked-list/214/two-pointer-technique/1296/
type MaybeListNode = ListNode | null
const removeNthFromEnd = (head: MaybeListNode, n: number): MaybeListNode => {
  if (!head) return null
  let slow: MaybeListNode = head
  let fast: MaybeListNode = head
  while (n-- >= 0) {
    if (!fast) return head.next
    fast = fast?.next || null
  }

  while (fast) {
    fast = fast?.next || null
    slow = slow!.next
  }

  slow!.next = slow!.next!.next
  return head
}

export { removeNthFromEnd }
