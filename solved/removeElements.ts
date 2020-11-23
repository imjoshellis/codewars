import { ListNode } from '../lib/ListNode'
// https://leetcode.com/explore/learn/card/linked-list/219/classic-problems/1207/

// Remove all elements from a linked list of integers that have value val.
type MaybeNode = ListNode | null
const removeElements = (head: MaybeNode, val: number): MaybeNode => {
  while (head && head.val === val) head = head.next
  let cur = head
  while (cur) {
    while (cur?.next?.val === val) cur.next = cur.next.next
    cur = cur.next
  }
  return head
}

/* RECURSIVE (slower, but prettier)
const removeElements = (head: MaybeNode, val: number): MaybeNode => {
  while (head && head.val === val) head = head.next
  if (head) head.next = removeElements(head.next, val)
  return head
}
*/

export { removeElements }
