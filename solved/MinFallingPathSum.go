// Package main has solved algorithms
// https://leetcode.com/problems/minimum-falling-path-sum-ii/
package main

import "math"

// import log "github.com/sirupsen/logrus"

func minFallingPathSum(arr [][]int) int {
	if len(arr) == 0 {
		return 0
	}

	fm := float64(0)
	sm := float64(0)
	pos := -1
	for i := range arr {
		fm2 := math.Inf(1)
		sm2 := math.Inf(1)
		pos2 := -1

		for j := range arr[0] {
			cur := float64(arr[i][j])
			if j == pos {
				cur += sm
			} else {
				cur += fm
			}

			if cur < fm2 {
				pos2 = j
				sm2 = fm2
				fm2 = cur
			} else {
				sm2 = math.Min(float64(cur), float64(sm2))
			}
		}
		fm = fm2
		sm = sm2
		pos = pos2
	}
	return int(fm)
}

func main() {
	// log.Info(minFallingPathSum())
}
