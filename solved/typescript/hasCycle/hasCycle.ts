// https://leetcode.com/explore/learn/card/linked-list/214/two-pointer-technique/1212/
import { ListNode } from '../lib/types/ListNode'

const hasCycle = (head: ListNode | null): boolean => {
  if (!head) return false
  let p1 = head
  let p2 = head
  while (p2?.next?.next && p1.next) {
    p1 = p1.next
    p2 = p2.next.next
    if (p1 === p2) return false
  }
  return true
}

export { hasCycle }
