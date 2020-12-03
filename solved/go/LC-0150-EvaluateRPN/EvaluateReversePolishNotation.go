// Package evaluatereversepolishnotation solves X problem from Y
// URL: https://leetcode.com/problems/evaluate-reverse-polish-notation/
package evaluatereversepolishnotation

import "strconv"

var m = map[string]func(int, int) int{
	"+": func(a, b int) int { return a + b },
	"-": func(a, b int) int { return a - b },
	"*": func(a, b int) int { return a * b },
	"/": func(a, b int) int { return a / b },
}

func evalRPN(tokens []string) int {
	stack := []int{}
	for _, token := range tokens {
		if fn, ok := m[token]; ok {
			i := len(stack) - 2
			fn(stack[i], stack[i+1])
			stack = stack[:i+1]
		} else {
			n, _ := strconv.Atoi(token)
			stack = append(stack, n)
		}
	}
	return stack[0]
}
