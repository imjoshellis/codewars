// https://leetcode.com/problems/subtree-of-another-tree/solution/
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor (val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

const equals = (s: TreeNode | null, t: TreeNode | null): boolean => {
  if (!s && !t) return true
  if (!s || !t) return false
  return s.val === t.val && equals(s.left, t.left) && equals(s.right, t.right)
}

function isSubtree (s: TreeNode | null, t: TreeNode | null): boolean {
  return (
    s !== null &&
    (equals(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t))
  )
}

export { isSubtree }
