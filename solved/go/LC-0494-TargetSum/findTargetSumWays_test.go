package findtargetsumways

import "testing"

var testCases = []struct {
	s    string
	want string
}{
	{ // base case
		"",
		"",
	},
}

// TestfindTargetSumWays tests the findTargetSumWays function against the above test cases
func TestfindTargetSumWays(t *testing.T) {
	for _, tc := range testCases {
		got := findTargetSumWays(tc.s)
		if got != tc.want {
			t.Fatalf("findTargetSumWays(%v) = %v, want %v.",
				tc.s, got, tc.want)
		}
	}
}
