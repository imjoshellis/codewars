/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export class ListNode {
  val: number
  next: ListNode | null
  constructor (val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export const mergeTwoLists = (
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null => {
  if (l1 === null && l2 === null) return null
  if (l1 === null) return l2
  if (l2 === null) return l1

  return l1.val < l2.val
    ? new ListNode(l1.val, mergeTwoLists(l1.next, l2))
    : new ListNode(l2.val, mergeTwoLists(l2.next, l1))
}
