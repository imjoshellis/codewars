// Package isvalid solves X problem from Y
// URL: https://leetcode.com/problems/valid-parentheses
package isvalid

// isValid is the primary function for the problem
func isValid(s string) bool {
	if len(s)%2 != 0 {
		return false
	}

	st := []rune{}
	open := map[rune]rune{
		'(': ')',
		'[': ']',
		'{': '}',
	}

	for _, r := range s {
		if pair, ok := open[r]; ok {
			st = append(st, pair)
			continue
		}

		l := len(st) - 1
		if l < 0 || r != st[l] {
			return false
		}
		st = st[:l]
	}

	return len(st) == 0
}
