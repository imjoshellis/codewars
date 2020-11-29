// Package algos has solved algorithms
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/882/
package algos

func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}
	rs := make([]int, 26)
	for i := range s {
		rs[s[i]-'a']++
		rs[t[i]-'a']--
	}
	for _, n := range rs {
		if n != 0 {
			return false
		}
	}
	return true
}
