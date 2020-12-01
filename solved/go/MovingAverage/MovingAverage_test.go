package main

import (
	"fmt"
	"testing"
)

func TestMovingAverage(t *testing.T) {
	exp := []float64{1, 1.5, 2.5, 3.5}
	args := []int{1, 2, 3, 4}
	ma := Constructor(2)
	for i, arg := range args {
		res := ma.Next(arg)
		fmt.Println("ma.q:", ma.q)
		fmt.Println("ma.sum:", ma.sum)
		if res != exp[i] {
			t.Fatalf("Expected %v, got %v with %v arg", exp[i], res, arg)
		}
	}
}
