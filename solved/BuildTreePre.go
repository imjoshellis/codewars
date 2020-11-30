// Package main has solved algorithms
// https://leetcode.com/explore/learn/card/data-structure-tree/133/conclusion/943/
package main

// import log "github.com/sirupsen/logrus"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func buildTree(preorder []int, inorder []int) *TreeNode {
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

		// shift a val off preorder
		// in this way, we process preorder
		// from left to right, which works because
		// it is the opposite of how it was created
		var val int
		val, preorder = preorder[0], preorder[1:]

		// initialize new node
		x := TreeNode{Val: val}

		// set the mid point
		mid := m[x.Val]

		// set the left and right of x
		x.Left = rec(left, mid-1)
		x.Right = rec(mid+1, right)

		// return x
		return &x
	}

	// run recursive function, starting at beginning of preorder
	return rec(0, len(preorder)-1)
}

func main() {
	// log.Info(buildTreePre())
}
