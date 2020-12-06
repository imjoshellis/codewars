// Package findtargetsumways solves X problem from Y
// URL: https://leetcode.com/problems/target-sum/
package findtargetsumways

// findTargetSumWays is the primary function for the problem
func findTargetSumWays(ns []int, S int) int {
	if S == 0 && len(ns) == 0 {
		return 1
	}
	if len(ns) == 0 {
		return 0
	}
	return findTargetSumWays(ns[1:], S-ns[0]) + findTargetSumWays(ns[1:], S+ns[0])
}
