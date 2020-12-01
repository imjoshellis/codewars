import { arrayToList } from '../lib/ListNode'
import { isPalindrome } from './isPalindrome'

it('does nothing', () => {
  expect(isPalindrome(null)).toBe(true)
})

it('works on true lists', () => {
  const list1 = arrayToList([1, 2, 1])
  expect(isPalindrome(list1)).toBe(true)
  const list2 = arrayToList([1, 2, 2, 1])
  expect(isPalindrome(list2)).toBe(true)
})

it('works on false lists', () => {
  const list1 = arrayToList([1, 2, 3])
  expect(isPalindrome(list1)).toBe(false)
  const list2 = arrayToList([1, 2, 3, 1])
  expect(isPalindrome(list2)).toBe(false)
})
