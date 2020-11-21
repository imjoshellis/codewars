import { mergeKLists, ListNode } from './mergeKLists'

it('handles null', () => {
  const test = [null]
  expect(mergeKLists(test)).toEqual(null)
})

it('handles single null node', () => {
  const test = [new ListNode()]
  expect(mergeKLists(test)).toEqual(new ListNode())
})

it('solves leetcode', () => {
  const list1 = new ListNode(1, new ListNode(4, new ListNode(5)))
  const list2 = new ListNode(1, new ListNode(3, new ListNode(4)))
  const list3 = new ListNode(2, new ListNode(6))
  const merged = new ListNode(
    1,
    new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(
          3,
          new ListNode(4, new ListNode(4, new ListNode(5, new ListNode(6))))
        )
      )
    )
  )
  const test = [list1, list2, list3]
  expect(mergeKLists(test)).toEqual(merged)
})

it('solves [[1], [0]]', () => {
  const list1 = new ListNode(1)
  const list2 = new ListNode(0)
  const merged = new ListNode(0, new ListNode(1))
  const test = [list1, list2]
  expect(mergeKLists(test)).toEqual(merged)
})
