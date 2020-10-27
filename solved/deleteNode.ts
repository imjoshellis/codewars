// https://leetcode.com/problems/delete-node-in-a-linked-list/

export class ListNode {
  val: number
  next: ListNode | null
  constructor (val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export const deleteNode = (root: ListNode) => {
  root!.val! = root!.next!.val!
  root!.next! = root!.next!.next!
}
