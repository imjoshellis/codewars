export class MyQueue {
  private queue: number[]
  constructor () {
    this.queue = []
  }

  push (x: number): void {
    this.queue.push(x)
  }

  pop (): number {
    const n = this.queue.shift()
    if (!n) throw new Error('queue is empty')
    return n
  }

  peek (): number {
    const n = this.queue[0]
    if (!n) throw new Error('queue is empty')
    return n
  }

  empty (): boolean {
    return this.queue.length === 0
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
