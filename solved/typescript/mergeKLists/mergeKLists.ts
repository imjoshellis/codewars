import { ListNode } from '../lib/types/ListNode'

// https://leetcode.com/problems/merge-k-sorted-lists/
export const mergeKLists = (lists: Array<ListNode | null>): ListNode | null =>
  lists
    .map(listToArray([]))
    .reduce((acc, val) => acc.concat(val), [])
    .sort((a, b) => a - b)
    .reduceRight((acc: ListNode | null, cur) => new ListNode(cur, acc), null)

const listToArray = (acc: number[]) => (list: ListNode | null): number[] =>
  list
    ? list.next
      ? listToArray([...acc, list.val])(list.next)
      : [...acc, list.val]
    : [...acc]
