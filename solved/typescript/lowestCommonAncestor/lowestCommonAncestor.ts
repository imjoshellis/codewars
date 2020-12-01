// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor (val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

export const lowestCommonAncestor = (
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode => {
  return (root!.val - p!.val) * (root!.val - q!.val) < 1
    ? root!
    : lowestCommonAncestor(
        p!.val < root!.val ? root!.left! : root!.right!,
        p!,
        q!
      )
}
