// https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/
// some sort of weird error with TS on leetcode...
type Node = {
  val: number
  prev: Node | null
  next: Node | null
  child: Node | null
}
const flatten = (head: Node | null, tail: Node | null = null): Node | null => {
  if (head == null) return null

  head.prev = tail
  tail = head

  let nextNode = head.next

  head.next = flatten(head.child)
  head.child = null

  tail.next = flatten(nextNode)

  return head
}

export { flatten }
