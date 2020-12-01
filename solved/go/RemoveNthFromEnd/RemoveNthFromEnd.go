// Package main has solved algorithms
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/603/
package main

// import log "github.com/sirupsen/logrus"

type ListNode struct {
	Val  int
	Next *ListNode
}

func removeNthFromEnd(head *ListNode, n int) *ListNode {
	find := head
	node := head
	prev := node

	for n > 1 {
		find = find.Next
		n--
	}

	for find.Next != nil {
		prev = node
		node = node.Next
		find = find.Next
	}

	if node == head {
		return head.Next
	}

	prev.Next = node.Next

	return head
}

func main() {
	// log.Info(removeNthFromEnd())
}
