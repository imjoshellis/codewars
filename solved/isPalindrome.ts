import { ListNode } from '../lib/ListNode'

// https://leetcode.com/explore/learn/card/linked-list/219/classic-problems/1209/
type MaybeNode = ListNode | null
const isPalindrome = (head: MaybeNode): boolean => {
  let cur = head
  if (!cur) return true
  const st = [] as number[]

  while (cur) {
    st.push(cur.val)
    cur = cur.next
  }

  let i = 0
  let j = st.length - 1
  while (i < j) if (st[i++] !== st[j--]) return false

  return true
}

export { isPalindrome }
