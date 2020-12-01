package openlock

import "testing"

var testCases = []struct {
	deadends []string
	target   string
	want     int
}{
	{ // base case
		[]string{"0201", "0101", "0102", "1212", "2002"},
		"0202",
		6,
	},
	{ // base case
		[]string{"8888"},
		"0009",
		1,
	},
}

// TestopenLock tests the openLock function against the above test cases
func TestOpenLock(t *testing.T) {
	for _, tc := range testCases {
		got := openLock(tc.deadends, tc.target)
		if got != tc.want {
			t.Fatalf("openLock(%v, %v) = %v, want %v.",
				tc.deadends, tc.target, got, tc.want)
		}
	}
}
