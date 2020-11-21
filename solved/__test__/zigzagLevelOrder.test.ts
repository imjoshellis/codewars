import { TreeNode, zigzagLevelOrder } from './zigzagLevelOrder'

it('handles null case', () => {
  const root = null
  expect(zigzagLevelOrder(root)).toEqual([])
})

it('can zig', () => {
  const root = new TreeNode(1)
  expect(zigzagLevelOrder(root)).toEqual([[1]])
})

it('can zigzag', () => {
  const root = new TreeNode(1, new TreeNode(2), new TreeNode(3))
  expect(zigzagLevelOrder(root)).toEqual([[1], [3, 2]])
})

it('can zigzagzig', () => {
  const root = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3, null, new TreeNode(6))
  )

  expect(zigzagLevelOrder(root)).toEqual([[1], [3, 2], [4, 5, 6]])
})
