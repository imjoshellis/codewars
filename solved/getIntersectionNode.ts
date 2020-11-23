import { NullableListNode } from '../lib/ListNode'

// https://leetcode.com/explore/learn/card/linked-list/214/two-pointer-technique/1215/
const getIntersectionNode = (
  headA: NullableListNode,
  headB: NullableListNode
): NullableListNode => {
  if (headA == null || headB == null) return null

  let a: NullableListNode = headA
  let b: NullableListNode = headB

  while (a != b) {
    a = a === null ? headB : a.next
    b = b === null ? headA : b.next
  }

  return a
}

export { getIntersectionNode }
