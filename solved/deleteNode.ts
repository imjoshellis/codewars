// https://leetcode.com/problems/delete-node-in-a-linked-list/
import { ListNode } from '../lib/ListNode'

export const deleteNode = (root: ListNode) => {
  root!.val! = root!.next!.val!
  root!.next! = root!.next!.next!
}
