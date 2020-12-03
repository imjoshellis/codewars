package evaluatereversepolishnotation

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

// TestEvaluateReversePolishNotation tests the EvaluateReversePolishNotation function against the above test cases
func TestEvaluateReversePolishNotation(t *testing.T) {
	for _, tc := range testCases {
		got, err := EvaluateReversePolishNotation(tc.s)
		if tc.expectError {
			var _ error = err
			if err == nil {
				t.Fatalf("EvaluateReversePolishNotation(%v); expected error, got nil.",
					tc.s)
			}
		} else {
			if err != nil {
				t.Fatalf("EvaluateReversePolishNotation(%v) returned unexpected error: %v",
					tc.s, err)
			}
			if got != tc.want {
				t.Fatalf("EvaluateReversePolishNotation(%v) = %v, want %v.",
					tc.s, got, tc.want)
			}
		}
	}
}
