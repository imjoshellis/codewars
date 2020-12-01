package openlock

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

// TestopenLock tests the openLock function against the above test cases
func TestopenLock(t *testing.T) {
	for _, tc := range testCases {
		got, err := openLock(tc.s)
		if tc.expectError {
			var _ error = err
			if err == nil {
				t.Fatalf("openLock(%v); expected error, got nil.",
					tc.s)
			}
		} else {
			if err != nil {
				t.Fatalf("openLock(%v) returned unexpected error: %v",
					tc.s, err)
			}
			if got != tc.want {
				t.Fatalf("openLock(%v) = %v, want %v.",
					tc.s, got, tc.want)
			}
		}
	}
}
