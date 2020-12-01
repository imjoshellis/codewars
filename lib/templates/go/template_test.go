package template

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

// TestTemplate tests the Template function against the above test cases
func TestTemplate(t *testing.T) {
	for _, tc := range testCases {
		got, err := Template(tc.s)
		if tc.expectError {
			var _ error = err
			if err == nil {
				t.Fatalf("Template(%v); expected error, got nil.",
					tc.s)
			}
		} else {
			if err != nil {
				t.Fatalf("Template(%v) returned unexpected error: %v",
					tc.s, err)
			}
			if got != tc.want {
				t.Fatalf("Template(%v) = %v, want %v.",
					tc.s, got, tc.want)
			}
		}
	}
}
