package wallsandgates

import (
	"testing"

	"github.com/go-test/deep"
)

var testCases = []struct {
	rooms [][]int
	want  [][]int
}{
	{ // base case
		[][]int{{0, empty}},
		[][]int{{0, 1}},
	},
	{ // base case
		[][]int{{0, -1}, {empty, empty}},
		[][]int{{0, -1}, {1, 2}},
	},
}

// TestwallsAndGates tests the wallsAndGates function against the above test cases
func TestWallsAndGates(t *testing.T) {
	for _, tc := range testCases {
		wallsAndGates(tc.rooms)
		got := tc.rooms
		if diff := deep.Equal(got, tc.want); diff != nil {
			t.Fatalf("wallsAndGates(%v) = %v, want %v.",
				tc.rooms, got, tc.want)
		}
	}
}
