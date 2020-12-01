import { addTwoNumbers, ListNode } from './addTwoNumbers'

it('returns null with null inputs', () => {
  expect(addTwoNumbers(null, null)).toBe(null)
})

it('adds two single digits that equal less than 10', () => {
  let l1 = new ListNode(2)
  let l2 = new ListNode(2)
  let ans = new ListNode(4)
  expect(addTwoNumbers(l1, l2)).toEqual(ans)

  l1 = new ListNode(2)
  l2 = new ListNode(4)
  ans = new ListNode(6)
  expect(addTwoNumbers(l1, l2)).toEqual(ans)
})

it('adds 2 + 8 = 10', () => {
  let l1 = new ListNode(2)
  let l2 = new ListNode(8)
  let ans = new ListNode(0, new ListNode(1))
  expect(addTwoNumbers(l1, l2)).toEqual(ans)
})

it('adds 4 + 8 = 12', () => {
  const l1 = new ListNode(4)
  const l2 = new ListNode(8)
  const ans = new ListNode(2, new ListNode(1))
  expect(addTwoNumbers(l1, l2)).toEqual(ans)
})
