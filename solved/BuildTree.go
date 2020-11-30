// Package main has solved algorithms
// https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
package main

import log "github.com/sirupsen/logrus"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func buildTree(inorder []int, postorder []int) *TreeNode {
	// build map from val to inorder index
	m := map[int]int{}
	for i, v := range inorder {
		m[v] = i
	}

	// recursive function takes two args
	// that relate to the map
	var rec func(int, int) *TreeNode
	rec = func(left int, right int) *TreeNode {
		// if left > right, we've arrived
		// at the bottom of the branch
		if left > right {
			return nil
		}

		// pop a val off postorder
		// in this way, we process postorder
		// from right to left, which works because
		// it is the opposite of how it was created
		var val int
		postorder, val = pop(postorder)

		// initialize new node
		x := TreeNode{Val: val}

		// set the mid point
		mid := m[x.Val]

		// set the left and right of x
		x.Right = rec(mid+1, right)
		x.Left = rec(left, mid-1)

		// return x
		return &x
	}

	// run recursive function, starting at end of postorder
	return rec(0, len(inorder)-1)
}

func pop(a []int) ([]int, int) {
	return a[:len(a)-1], a[len(a)-1]
}

func main() {
	log.Info(buildTree([]int{9, 3, 20}, []int{9, 20, 3}))
}
