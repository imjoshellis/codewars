// https://leetcode.com/problems/lru-cache/
class DLinkedNode {
  constructor (public key: number = -1, public value: number = -1) {}
  prev: DLinkedNode
  next: DLinkedNode
}

class LRUCache {
  constructor (
    readonly capacity: number,
    private size = 0,
    private map = new Map<number, DLinkedNode>(),
    private head = new DLinkedNode(),
    private tail = new DLinkedNode()
  ) {
    this.head.next = this.tail
    this.tail.prev = this.head
  }

  private addNode (node: DLinkedNode) {
    node.prev = this.head
    node.next = this.head.next
    this.head.next.prev = node
    this.head.next = node
    this.size++
  }

  private removeNode (node: DLinkedNode) {
    const prev = node.prev
    const next = node.next
    prev.next = next
    next.prev = prev
    this.size--
  }

  private moveToHead (node: DLinkedNode) {
    this.removeNode(node)
    this.addNode(node)
  }

  private popTail (node: DLinkedNode) {
    this.map.delete(node.key)
    this.removeNode(node)
  }

  get (key: number): number {
    const node = this.map.get(key)
    if (!node) return -1

    this.moveToHead(node)

    return node.value
  }

  put (key: number, value: number): void {
    const node = this.map.get(key)

    if (!node) {
      const newNode = new DLinkedNode(key, value)
      this.map.set(key, newNode)
      this.addNode(newNode)
      if (this.size > this.capacity) {
        const tail = this.tail.prev
        this.popTail(tail)
      }
      return
    }

    node.value = value
    this.moveToHead(node)
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

export { LRUCache }
