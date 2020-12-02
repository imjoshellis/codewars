// Package numsquares solves X problem from Y
// URL: https://leetcode.com/problems/perfect-squares/
package numsquares

// numSquares is the primary function for the problem
func numSquares(n int) int {
	sqs := []int{}
	for i := 1; i*i <= n; i++ {
		sqs = append(sqs, i*i)
	}
	q := []int{n}
	for l := 1; l < n; l++ {
		for s := len(q); s > 0; s-- {
			cur := q[0]
			q = q[1:]
			for _, el := range sqs {
				if el > cur {
					break
				}
				if x := cur - el; x == 0 {
					return l
				} else {
					q = append(q, x)
				}
			}
		}
	}
	return n
}
