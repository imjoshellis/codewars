package isvalid

import "testing"

var testCases = []struct {
	s    string
	want bool
}{
	{ // base case
		"()",
		true,
	},
	{ // base case
		")(",
		false,
	},
	{ // base case
		"[({}{}(({({[[[]]]}[])})))]",
		true,
	},
}

// TestisValid tests the isValid function against the above test cases
func TestIsValid(t *testing.T) {
	for _, tc := range testCases {
		got := isValid(tc.s)
		if got != tc.want {
			t.Fatalf("isValid(%v) = %v, want %v.",
				tc.s, got, tc.want)
		}
	}
}
