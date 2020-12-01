// Package algos has solved algorithms
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/879/
package algos

func reverseString(s []byte) {
	start := 0
	end := len(s) - 1
	for start < end {
		s[start], s[end] = s[end], s[start]
		start++
		end--
	}
}
