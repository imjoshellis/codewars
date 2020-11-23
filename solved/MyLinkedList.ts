// https://leetcode.com/explore/learn/card/linked-list/209/singly-linked-list/1290/
class Node {
  constructor (public val: number, public next: Node | null = null) {}
}

class MyLinkedList {
  constructor (private head: Node | null = null, private size: number = 0) {}

  getNode (idx: number): Node {
    let node = this.head
    for (let i = 0; i < idx; i++) node = node!.next
    return node!
  }

  get (idx: number): number {
    if (idx >= this.size || idx < 0) return -1
    return this.getNode(idx).val
  }

  addAtHead (val: number): void {
    this.addAtIndex(0, val)
  }

  addAtTail (val: number): void {
    this.addAtIndex(this.size, val)
  }

  addAtIndex (idx: number, val: number): void {
    if (idx > this.size || idx < 0) return
    let insert = new Node(val)
    if (idx === 0 || this.size === 0) {
      insert.next = this.head
      this.head = insert
    } else {
      const prev = this.getNode(idx - 1)
      insert.next = prev.next
      prev.next = insert
    }
    this.size++
  }

  deleteAtIndex (idx: number): void {
    if (idx >= this.size || idx < 0) return
    let prev = this.getNode(idx - 1)
    if (idx === 0) this.head = this.head!.next
    else prev.next = prev.next?.next || null
    this.size--
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

export { MyLinkedList }
