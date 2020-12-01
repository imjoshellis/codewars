// Package main has solved algorithms
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/886/
package main

import (
	"strconv"

	log "github.com/sirupsen/logrus"
)

func main() {
	log.Info("n = 4: ", countAndSay(4))
}

func countAndSay(n int) string {
	if n == 1 {
		return "1"
	}
	str := countAndSay(n - 1)
	res := ""
	pre := 0
	for i := 0; i < len(str); i++ {
		if i+1 == len(str) || str[i+1] != str[i] {
			res += strconv.Itoa(i-pre+1) + string(str[i])
			pre = i + 1
		}
	}
	return res
}
