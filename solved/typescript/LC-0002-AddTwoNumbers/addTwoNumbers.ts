import { ListNode } from '../../../lib/types/ListNode'

// https://leetcode.com/problems/add-two-numbers/

const addTwoNumbers = (
  l1: ListNode | null,
  l2: ListNode | null,
  carry: number = 0
): ListNode | null => {
  if (!l1 && !l2) return carry > 0 ? new ListNode(carry) : null
  if (!l1 && carry === 0) return l2
  if (!l2 && carry === 0) return l1
  const l1val = l1?.val || 0
  const l2val = l2?.val || 0
  const sum = l1val + l2val + carry
  const rem = sum % 10
  carry = sum > 9 ? 1 : 0
  return new ListNode(rem, addTwoNumbers(l1?.next, l2?.next, carry))
}

export { addTwoNumbers, ListNode }
