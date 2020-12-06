package clonegraph

import "testing"

var testCases = []struct {
	s    *Node
	want *Node
}{
	{ // base case
		&Node{Val: 1, Neighbors: []*Node{{Val: 2}}},
		&Node{Val: 1, Neighbors: []*Node{{Val: 2}}},
	},
}

// TestCloneGraph tests the CloneGraph function against the above test cases
func TestCloneGraph(t *testing.T) {
	for _, tc := range testCases {
		got := cloneGraph(tc.s)
		if got == tc.s || got.Val != tc.want.Val {
			t.Fatalf("CloneGraph(%v) = %v, want %v.",
				tc.s, got, tc.want)
		}
	}
}
