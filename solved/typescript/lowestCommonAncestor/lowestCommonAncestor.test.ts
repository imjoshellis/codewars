import { lowestCommonAncestor, TreeNode } from './lowestCommonAncestor'

it('solves a basic case', () => {
  const p = new TreeNode(2)
  const q = new TreeNode(1, null, p)
  expect(lowestCommonAncestor(q, p, q)).toEqual(q)
})
