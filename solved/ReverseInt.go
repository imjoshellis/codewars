// Package algos has solved algorithms
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/880/
package algos

import (
	"strconv"
)

func reverseInt(x int) int {
	neg := 1
	if x < 0 {
		x = -x
		neg = -1
	}
	rs := []rune(strconv.Itoa(x))
	start := 0
	end := len(rs) - 1
	for start < end {
		rs[start], rs[end] = rs[end], rs[start]
		start++
		end--
	}
	ans, err := strconv.ParseInt(string(rs), 10, 32)
	if err != nil {
		return 0
	}
	return int(ans) * neg
}
