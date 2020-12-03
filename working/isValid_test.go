package isvalid

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

// TestisValid tests the isValid function against the above test cases
func TestisValid(t *testing.T) {
	for _, tc := range testCases {
		got, err := isValid(tc.s)
		if tc.expectError {
			var _ error = err
			if err == nil {
				t.Fatalf("isValid(%v); expected error, got nil.",
					tc.s)
			}
		} else {
			if err != nil {
				t.Fatalf("isValid(%v) returned unexpected error: %v",
					tc.s, err)
			}
			if got != tc.want {
				t.Fatalf("isValid(%v) = %v, want %v.",
					tc.s, got, tc.want)
			}
		}
	}
}
