// Package main has solved algorithms
// https://leetcode.com/explore/learn/card/queue-stack/228/first-in-first-out-data-structure/1368/
package main

type MovingAverage struct {
	size int
	q    []int
	i    int
	full bool
	sum  float64
}

func Constructor(size int) MovingAverage {
	return MovingAverage{size: size, q: make([]int, size)}
}

func (ma *MovingAverage) Next(val int) float64 {
	ma.sum += float64(val - ma.q[ma.i])
	ma.q[ma.i] = val
	ma.i++
	if ma.i == ma.size {
		ma.full = true
		ma.i = 0
	}
	if !ma.full {
		return ma.sum / float64(ma.i)
	}
	return ma.sum / float64(ma.size)
}

func main() {
}
