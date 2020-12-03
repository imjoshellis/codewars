// Package minstack solves X problem from Y
// URL: https://leetcode.com/problems/min-stack/
package minstack

import "math"

// MinStack defines the type structure
type MinStack struct {
	st  []int
	min int
}

// Constructor intializes a MinStack
func Constructor() MinStack {
	return MinStack{min: math.MaxInt64}
}

func (ms *MinStack) Push(x int) {
	ms.st = append(ms.st, x)
	if x < ms.min {
		ms.min = x
	}
}

func (ms *MinStack) Pop() {
	l := len(ms.st)
	last := ms.st[l-1]
	ms.st = ms.st[:l-1]
	if last != ms.min {
		return
	}

	ms.min = math.MaxInt64
	for _, x := range ms.st {
		if x < ms.min {
			ms.min = x
		}
	}
}

func (ms *MinStack) Top() int {
	return ms.st[len(ms.st)-1]
}

func (ms *MinStack) GetMin() int {
	return ms.min
}
