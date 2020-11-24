import { MaybeNode } from '../lib/ListNode'

// https://leetcode.com/explore/learn/card/linked-list/214/two-pointer-technique/1215/
const getIntersectionNode = (headA: MaybeNode, headB: MaybeNode): MaybeNode => {
  if (headA == null || headB == null) return null

  let a: MaybeNode = headA
  let b: MaybeNode = headB

  while (a != b) {
    a = a === null ? headB : a.next
    b = b === null ? headA : b.next
  }

  return a
}

export { getIntersectionNode }
