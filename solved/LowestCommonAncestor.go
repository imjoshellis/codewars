// Package main has solved algorithms
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/solution/
package main

// import log "github.com/sirupsen/logrus"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
	if root == nil || root == p || root == q {
		return root
	}

	left := lowestCommonAncestor(root.Left, p, q)
	right := lowestCommonAncestor(root.Right, p, q)
	if left != nil && right != nil {
		return root
	}
	if left != nil {
		return left
	}
	return right
}

func main() {
	// log.Info(lowestCommonAncestor())
}
