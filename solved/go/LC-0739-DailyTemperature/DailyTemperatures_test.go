package dailytemperatures

import "testing"

var testCases = []struct {
	s    []int
	want []int
}{
	{ // base case
		[]int{1, 2},
		[]int{1, 0},
	},
	{ // base case
		[]int{1, 2, 1, 1, 1, 3},
		[]int{1, 4, 3, 2, 1, 0},
	},
	{ // base case
		[]int{73, 74, 75, 71, 69, 72, 76, 73},
		[]int{1, 1, 4, 2, 1, 1, 0, 0},
	},
}

// TestDailyTemperatures tests the DailyTemperatures function against the above test cases
func TestDailyTemperatures(t *testing.T) {
	for _, tc := range testCases {
		got := dailyTemperatures(tc.s)
		for i := range got {
			if got[i] != tc.want[i] {
				t.Logf("%v", tc.s)
				t.Logf("%v", got)
				t.Logf("%v", tc.want)
				t.Fatalf("DailyTemperatures(%v) = %v, want %v.",
					tc.s[i], got[i], tc.want[i])
			}
		}
	}
}
