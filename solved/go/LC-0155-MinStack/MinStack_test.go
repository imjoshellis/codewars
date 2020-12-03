package minstack

import "testing"

// TestMinStack tests the MinStack function against the above test cases
func TestMinStack(t *testing.T) {
	ms := Constructor()
	ms.Push(-2)
	ms.Push(0)
	ms.Push(-3)
	got := ms.GetMin()
	want := -3
	if got != want {
		t.Fatalf("ms.GetMin(): Wanted %v, got %v", want, got)
	}
	ms.Pop()
	ms.Top()
	got = ms.GetMin()
	want = -2
	if got != want {
		t.Fatalf("ms.GetMin(): Wanted %v, got %v", want, got)
	}
}
