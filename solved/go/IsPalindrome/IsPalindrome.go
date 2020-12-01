// Package main has solved algorithms
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/772/
package main

// import log "github.com/sirupsen/logrus"

type ListNode struct {
	Val  int
	Next *ListNode
}

func isPalindrome(head *ListNode) bool {
	if head == nil || head.Next == nil {
		return true
	}

	st := make([]int, 0)
	slow := head
	fast := head

	for fast != nil && fast.Next != nil {
		st = append(st, slow.Val)
		slow = slow.Next
		fast = fast.Next.Next
	}

	if fast != nil {
		slow = slow.Next
	}

	for i := len(st) - 1; i >= 0; i-- {
		if st[i] != slow.Val {
			return false
		}
		slow = slow.Next
	}

	return true
}

func main() {
	// log.Info(isPalindrome())
}
