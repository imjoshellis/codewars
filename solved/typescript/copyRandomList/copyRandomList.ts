// https://leetcode.com/problems/copy-list-with-random-pointer/

export class Node {
  val: number
  next: Node | null
  random: Node | null
  constructor (val?: number, next?: Node, random?: Node) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
    this.random = random === undefined ? null : random
  }
}

const visited = new Map()

const copyRandomList = (head: Node | null): Node | null => {
  if (!head) return null
  if (visited.has(head)) return visited.get(head)
  const node = new Node(head.val, head.next!, head.random!)
  visited.set(head, node)
  node.next = copyRandomList(head.next)
  node.random = copyRandomList(head.random)
  return node
}

export { copyRandomList }
