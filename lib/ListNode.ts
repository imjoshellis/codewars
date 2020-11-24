export type MaybeNode = ListNode | null
export class ListNode {
  val: number
  next: MaybeNode
  constructor (val?: number, next?: MaybeNode) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export const arrayToList = (a: number[]): MaybeNode => {
  return a.length ? new ListNode(a.pop(), arrayToList(a)) : null
}
