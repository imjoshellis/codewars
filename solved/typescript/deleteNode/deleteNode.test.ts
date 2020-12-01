import { deleteNode, ListNode } from './deleteNode'

it('passes leetcode', () => {
  const nine = new ListNode(9)
  const one = new ListNode(1, nine)
  const five = new ListNode(5, one)
  const head = new ListNode(4, five)
  deleteNode(five)
  expect(head).toEqual(new ListNode(4, one))
})
