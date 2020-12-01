package wallsandgates

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

// TestWallsAndGates tests the WallsAndGates function against the above test cases
func TestWallsAndGates(t *testing.T) {
	for _, tc := range testCases {
		got, err := WallsAndGates(tc.s)
		if tc.expectError {
			var _ error = err
			if err == nil {
				t.Fatalf("WallsAndGates(%v); expected error, got nil.",
					tc.s)
			}
		} else {
			if err != nil {
				t.Fatalf("WallsAndGates(%v) returned unexpected error: %v",
					tc.s, err)
			}
			if got != tc.want {
				t.Fatalf("WallsAndGates(%v) = %v, want %v.",
					tc.s, got, tc.want)
			}
		}
	}
}
