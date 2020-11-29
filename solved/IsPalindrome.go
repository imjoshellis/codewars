// Package algos has solved algorithms
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/883/
package algos

import (
	"regexp"
	"strings"
)

func isPalindrome(s string) bool {
	s = strings.ToLower(s)
	r := regexp.MustCompile("[^a-z0-9]+")
	s = r.ReplaceAllString(s, "")
	start := 0
	end := len(s) - 1
	for start < end {
		if s[start] != s[end] {
			return false
		}
		start++
		end--
	}
	return true
}
