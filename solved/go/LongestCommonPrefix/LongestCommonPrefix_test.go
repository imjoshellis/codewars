package main

import "testing"

func TestLongestCommonPrefix(t *testing.T) {
	exp := []string{"hi", ""}
	a := []string{"hi", "hippo"}
	b := []string{"zi", "hippo"}
	args := [][]string{a, b}
	for i, arg := range args {
		res := longestCommonPrefix(arg)
		if res != exp[i] {
			t.Fatalf("Expected %v, got %v with %v", exp[i], res, arg)
		}
	}
}
