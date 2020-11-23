import { MyLinkedList } from './MyLinkedList'

it('does nothing', () => {
  expect(new MyLinkedList()).toBeTruthy()
})

it('can add a head', () => {
  const list = new MyLinkedList()
  list.addAtHead(1)
  expect(list.get(0)).toBe(1)
})

it('can add a tail', () => {
  const list = new MyLinkedList()
  list.addAtHead(1)
  list.addAtTail(3)
  expect(list.get(1)).toBe(3)
})

it('can add at index if possible', () => {
  const list = new MyLinkedList()
  list.addAtHead(1) // [1]
  list.addAtTail(3) // [1, 3]
  list.addAtIndex(3, 4) // should not do anything b/c too big
  expect(list.get(0)).toBe(1)
  expect(list.get(1)).toBe(3)
  expect(list.get(3)).toBe(-1)
  list.addAtIndex(1, 4) // [1, 4, 3]
  expect(list.get(0)).toBe(1)
  expect(list.get(1)).toBe(4)
  expect(list.get(2)).toBe(3)
  list.addAtIndex(0, 4) // [4, 1, 4, 3]
  expect(list.get(0)).toBe(4)
  expect(list.get(1)).toBe(1)
  expect(list.get(2)).toBe(4)
  expect(list.get(3)).toBe(3)
})

it('can delete', () => {
  const list = new MyLinkedList()
  list.addAtHead(1)
  list.addAtTail(2)
  list.addAtTail(3)
  list.addAtTail(4)
  list.addAtTail(5)
  expect(list.get(0)).toBe(1)
  expect(list.get(1)).toBe(2)
  expect(list.get(2)).toBe(3)
  expect(list.get(4)).toBe(5)
  list.deleteAtIndex(1)
  expect(list.get(0)).toBe(1)
  expect(list.get(1)).toBe(3)
  expect(list.get(4)).toBe(-1)
})

it('solves lc scenario', () => {
  const list = new MyLinkedList()
  list.addAtHead(7)
  list.addAtHead(2)
  list.addAtHead(1)
  list.addAtIndex(3, 0)
  list.deleteAtIndex(2)
  list.addAtHead(6)
  list.addAtTail(4)
  expect(list.get(4)).toBe(4)
  list.addAtHead(4)
  list.addAtIndex(5, 0)
  list.addAtHead(6)
})
