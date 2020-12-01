// https://leetcode.com/problems/delete-node-in-a-linked-list/
import { ListNode } from '../lib/types/ListNode'

export const deleteNode = (root: ListNode) => {
  root.val = root.next!.val
  root.next! = root.next!.next!
}
