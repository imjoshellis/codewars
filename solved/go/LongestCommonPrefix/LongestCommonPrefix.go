// Package main has solved algorithms
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/887/
package main

// import log "github.com/sirupsen/logrus"

func longestCommonPrefix(arr []string) string {
	var cur byte
	res := ""

	if len(arr) == 0 {
		return res
	}

	for i := range arr[0] {
		cur = arr[0][i]
		for _, s := range arr {
			if i == len(s) || s[i] != cur {
				return res
			}
		}
		res += string(cur)
	}

	return res
}

func main() {
	// log.Info(longestCommonPrefix())
}
