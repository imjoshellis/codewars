// Package dailytemperatures solves X problem from Y
// URL: https://leetcode.com/problems/daily-temperatures/
package dailytemperatures

// DailyTemperatures is the primary function for the problem
func dailyTemperatures(T []int) []int {
	st, res := [][]int{}, make([]int, len(T))
	for i, el := range T {
		for l := len(st) - 1; l >= 0 && el > st[l][0]; l-- {
			j := st[l][1]
			res[j] = i - j
			st = st[:l]
		}
		st = append(st, []int{el, i})
	}
	return res
}
