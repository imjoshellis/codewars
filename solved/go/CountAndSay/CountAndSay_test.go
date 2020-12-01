package main

import "testing"

func TestCountAndSay(t *testing.T) {
	exp := []string{"1", "11", "21", "1211", "111221", "312211", "13112221", "1113213211", "31131211131221", "13211311123113112211"}
	inp := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	for i := range inp {
		res := countAndSay(inp[i])
		if res != exp[i] {
			t.Fatalf("Expected %v, got %v", exp[i], res)
		}
	}
}
