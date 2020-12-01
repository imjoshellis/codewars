// Package main has solved algorithms
// https://leetcode.com/explore/learn/card/data-structure-tree/133/conclusion/994/
package main

// import log "github.com/sirupsen/logrus"
type Node struct {
	Val   int
	Left  *Node
	Right *Node
	Next  *Node
}

func connect(root *Node) *Node {
	// guard against edge case
	if root == nil {
		return root
	}
	// initialize nxt as root
	nxt := root

	// loop over every level
	for nxt.Left != nil {
		// point current at next
		cur := nxt

		// loop over this level
		for cur != nil {
			// point current's left at current's right
			cur.Left.Next = cur.Right

			// if current has a next, point current's right
			// at the left of the current's next
			if cur.Next != nil {
				cur.Right.Next = cur.Next.Left
			}

			// move current to the next node in its level
			cur = cur.Next
		}

		// move down a level to the left
		nxt = nxt.Left
	}

	// return root
	return root
}

func main() {
	// log.Info(connect())
}
