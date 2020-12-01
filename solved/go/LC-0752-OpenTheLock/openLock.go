// Package openlock solves LeetCode problem 752
// URL: https://leetcode.com/problems/open-the-lock/
package openlock

import (
	"strconv"
)

// openLock is the primary function for the problem
func openLock(deadends []string, target string) int {
	m, q := make([]bool, 10000), []int{0}
	for _, s := range deadends {
		i, _ := strconv.Atoi(s)
		m[i] = true
	}
	if m[0] {
		return -1
	}
	t, _ := strconv.Atoi(target)
	m[0] = true
	for turns := 0; 0 < len(q); turns++ {
		for s := len(q); s > 0; s-- {
			cur := q[0]
			q = q[1:]
			if cur == t {
				return turns
			}
			for mod := 1; mod < 10000; mod *= 10 {
				d := modDown(cur, mod)
				if !m[d] {
					q = append(q, d)
					m[d] = true
				}
				u := modUp(cur, mod)
				if !m[u] {
					q = append(q, u)
					m[u] = true
				}
			}
		}
	}
	return -1
}

func modDown(cur int, mod int) int {
	if (cur/mod)%10 == 0 {
		return cur + 9*mod
	} else {
		return cur - mod
	}
}

func modUp(cur int, mod int) int {
	if (cur/mod)%10 == 9 {
		return cur - 9*mod
	} else {
		return cur + mod
	}
}
