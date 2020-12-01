// Package main has solved algorithms
// https://leetcode.com/explore/learn/card/data-structure-tree/17/solve-problems-recursively/538/
package main

import log "github.com/sirupsen/logrus"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func countUnivalSubtrees(root *TreeNode) int {
	count := 0
	var isValid func(*TreeNode, int) bool
	isValid = func(node *TreeNode, val int) bool {
		if node == nil {
			return true
		}
		validLeft := isValid(node.Left, node.Val)
		validRight := isValid(node.Right, node.Val)
		if !validLeft || !validRight {
			return false
		}
		count++
		return node.Val == val
	}
	isValid(root, 0)
	return count
}

func main() {
	left := TreeNode{Val: 5}
	right := TreeNode{Val: 5}
	root := TreeNode{Val: 2, Left: &left, Right: &right}
	log.Info(countUnivalSubtrees(&root))
}
