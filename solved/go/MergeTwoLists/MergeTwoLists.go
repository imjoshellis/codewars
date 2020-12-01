// Package main has solved algorithms
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/771/
package main

// import log "github.com/sirupsen/logrus"

type ListNode struct {
	Val  int
	Next *ListNode
}

func mergeTwoLists(l1 *ListNode, l2 *ListNode) *ListNode {
	if l1 == nil {
		return l2
	}

	if l2 == nil {
		return l1
	}

	var head *ListNode
	if l1.Val > l2.Val {
		head = l2
		l2 = l2.Next
	} else {
		head = l1
		l1 = l1.Next
	}

	node := head

	for l1 != nil && l2 != nil {
		if l1.Val > l2.Val {
			node.Next = l2
			l2 = l2.Next
		} else {
			node.Next = l1
			l1 = l1.Next
		}
		node = node.Next
	}

	if l1 != nil {
		node.Next = l1
	} else {
		node.Next = l2
	}

	return head
}

// func mergeTwoLists(l1 *ListNode, l2 *ListNode) *ListNode {
// 	if l1 == nil {
// 		return l2
// 	}

// 	if l2 == nil {
// 		return l1
// 	}

// 	if l1.Val < l2.Val {
// 		l1.Next = mergeTwoLists(l1.Next, l2)
// 		return l1
// 	} else {
// 		l2.Next = mergeTwoLists(l1, l2.Next)
// 		return l2
// 	}
// }

func main() {
	// log.Info(mergeTwoLists())
}
