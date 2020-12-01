// Package main has solved algorithms
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/560/
package main

// import log "github.com/sirupsen/logrus"

type ListNode struct {
	Val  int
	Next *ListNode
}

func reverseList(head *ListNode) *ListNode {
	if head == nil {
		return head
	}

	var prev *ListNode = nil
	var next *ListNode = nil
	var node *ListNode = head

	for node != nil {
		next = node.Next
		node.Next = prev
		prev = node
		node = next
	}

	return prev
}

func main() {
	// log.Info(reverseList())
}
