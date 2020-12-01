import { ListNode } from '../lib/types/ListNode'

// https://leetcode.com/explore/learn/card/linked-list/219/classic-problems/1208/
type MaybeNode = ListNode | null
const oddEvenList = (head: MaybeNode): MaybeNode => {
  if (!head) return null

  let odd: MaybeNode = head
  let evn: MaybeNode = head.next
  const evnHead: MaybeNode = head.next

  while (evn && evn.next) {
    odd.next = evn.next
    odd = odd.next
    evn.next = odd.next
    evn = odd.next
  }

  odd.next = evnHead
  return head
}

export { oddEvenList }
