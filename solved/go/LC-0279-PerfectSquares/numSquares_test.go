package numsquares

import "testing"

var testCases = []struct {
	n    int
	want int
}{
	{ // base
		4,
		1,
	},
	{ // simple 4 + 4 + 4
		12,
		3,
	},
	{ // simple 4 + 9
		13,
		2,
	},
	{ // simple 1 + 1
		2,
		2,
	},
}

// TestnumSquares tests the numSquares function against the above test cases
func TestNumSquares(t *testing.T) {
	for _, tc := range testCases {
		got := numSquares(tc.n)
		if got != tc.want {
			t.Fatalf("numSquares(%v) = %v, want %v.",
				tc.n, got, tc.want)
		}
	}
}
