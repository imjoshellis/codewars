import { MyQueue } from './MyQueue'

it('is a valid class', () => {
  const test = new MyQueue()
  expect(typeof test).toBe('object')
})

it('can push', () => {
  const test = new MyQueue()
  test.push(1)
})

it('can pop', () => {
  const test = new MyQueue()
  test.push(1)
  expect(test.pop()).toBe(1)
})

it('can peek', () => {
  const test = new MyQueue()
  test.push(1)
  expect(test.peek()).toBe(1)
})

it('can check if empty', () => {
  const test = new MyQueue()
  expect(test.empty()).toBe(true)
  test.push(1)
  expect(test.empty()).toBe(false)
})

it('passes leetcode test', () => {
  const myQueue = new MyQueue()
  myQueue.push(1) // queue is: [1]
  myQueue.push(2) // queue is: [1, 2] (leftmost is front of the queue)
  expect(myQueue.peek()).toBe(1) // return 1
  expect(myQueue.pop()).toBe(1) // return 1, queue is [2]
  expect(myQueue.empty()).toBe(false) // return false
})
