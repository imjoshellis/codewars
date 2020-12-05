package clonegraph

import "testing"

var testCases = []struct {
	s           string
	want        string
	expectError bool
}{
	{ // base case
		"",
		"",
		false,
	},
}

// TestCloneGraph tests the CloneGraph function against the above test cases
func TestCloneGraph(t *testing.T) {
	for _, tc := range testCases {
		got, err := CloneGraph(tc.s)
		if tc.expectError {
			var _ error = err
			if err == nil {
				t.Fatalf("CloneGraph(%v); expected error, got nil.",
					tc.s)
			}
		} else {
			if err != nil {
				t.Fatalf("CloneGraph(%v) returned unexpected error: %v",
					tc.s, err)
			}
			if got != tc.want {
				t.Fatalf("CloneGraph(%v) = %v, want %v.",
					tc.s, got, tc.want)
			}
		}
	}
}
