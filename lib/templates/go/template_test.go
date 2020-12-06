package template

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

// TestTemplate tests the Template function against the above test cases
func TestTemplate(t *testing.T) {
	for _, tc := range testCases {
		got := Template(tc.s)
		if got != tc.want {
			t.Fatalf("Template(%v) = %v, want %v.",
				tc.s, got, tc.want)
		}
	}
}
