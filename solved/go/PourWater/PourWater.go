// Package main has solved algorithms
// https://leetcode.com/problems/pour-water/
package main

import (
	"math"
)

// import log "github.com/sirupsen/logrus"

func pourWater(hs []int, V int, K int) []int {
	hs = append([]int{math.MaxInt64}, hs...)
	hs = append(hs, math.MaxInt64)
	K++

MainLoop:
	for V > 0 {
		V--
		pre := K
		for i := K - 1; hs[i] <= hs[K] && i > 0; i-- {
			if hs[i] < hs[pre] {
				pre = i
			}
			if hs[i] < hs[i-1] && hs[i] < hs[K] {
				hs[pre]++
				continue MainLoop
			}
		}
		pre = K
		for i := K + 1; hs[i] <= hs[K] && i < len(hs)-1; i++ {
			if hs[i] < hs[pre] {
				pre = i
			}
			if hs[i] < hs[i+1] && hs[i] < hs[K] {
				hs[pre]++
				continue MainLoop
			}
		}
		hs[K]++
	}

	return hs[1 : len(hs)-1]
}

func main() {
	// log.Info(pourWater())
}
