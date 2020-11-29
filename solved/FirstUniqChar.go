// Package algos has solved algorithms
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/881/
package algos

func firstUniqChar(s string) int {
	charMap := make([]int, 26)
	for _, r := range s {
		idx := r - 'a'
		charMap[idx] = charMap[idx] + 1
	}
	for i, r := range s {
		idx := r - 'a'
		if charMap[idx] == 1 {
			return i
		}
	}
	return -1
}
