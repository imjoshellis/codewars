// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
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

const zigzagLevelOrder = (root: TreeNode | null): number[][] => {
  const result: number[][] = []
  let nodes: (TreeNode | null)[] = [root]
  let zig: boolean = true

  while (nodes.length) {
    const newNodes: (TreeNode | null)[] = []
    const values = []
    for (const node of nodes) {
      if (node) {
        zig ? values.push(node.val) : values.unshift(node.val)
        newNodes.push(node.left)
        newNodes.push(node.right)
      }
    }
    if (values.length) result.push(values)
    zig = !zig
    nodes = newNodes
  }
  return result
}

export { zigzagLevelOrder }
