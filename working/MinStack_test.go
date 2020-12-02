package minstack

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

// TestMinStack tests the MinStack function against the above test cases
func TestMinStack(t *testing.T) {
	for _, tc := range testCases {
		got, err := MinStack(tc.s)
		if tc.expectError {
			var _ error = err
			if err == nil {
				t.Fatalf("MinStack(%v); expected error, got nil.",
					tc.s)
			}
		} else {
			if err != nil {
				t.Fatalf("MinStack(%v) returned unexpected error: %v",
					tc.s, err)
			}
			if got != tc.want {
				t.Fatalf("MinStack(%v) = %v, want %v.",
					tc.s, got, tc.want)
			}
		}
	}
}
