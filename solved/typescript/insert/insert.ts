export class Node {
  val: number
  next: Node | null
  constructor (val?: number, next?: Node) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}
// https://leetcode.com/explore/learn/card/linked-list/213/conclusion/1226/
const insert = (head: Node | null, insertVal: number): Node | null => {
  const newNode = new Node(insertVal)
  let cur = head

  // guard against null head
  if (!cur) {
    newNode.next = newNode
    return newNode
  }

  let maxNode = cur
  while (cur) {
    // check if we found spot for new node
    if (cur.val <= newNode.val && newNode.val <= cur.next!.val) {
      newNode.next = cur.next
      cur.next = newNode
      return head
    }

    // set max node if appropriate
    if (cur.next!.val < cur.val) maxNode = cur
    // move to next node
    cur = cur.next
    // single traversal
    if (cur === head) break
  }

  // if we got out of the loop, node must go after max node
  newNode.next = maxNode.next
  maxNode.next = newNode
  return head
}

export { insert }
