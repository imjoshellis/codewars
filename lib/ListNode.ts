export type NullableListNode = ListNode | null
export class ListNode {
  val: number
  next: NullableListNode
  constructor (val?: number, next?: NullableListNode) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}
