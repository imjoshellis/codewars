export class MinStack {
  stack: number[]
  constructor () {
    this.stack = [] as number[]
  }

  push (x: number): void {
    this.stack[this.stack.length] = x
  }

  pop (): void {
    this.stack = this.stack.slice(0, this.stack.length - 1)
  }

  top (): number {
    return this.stack[this.stack.length - 1]
  }

  getMin (): number {
    let min = this.stack[0]
    for (let el of this.stack) {
      if (el < min) min = el
    }
    return min
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
