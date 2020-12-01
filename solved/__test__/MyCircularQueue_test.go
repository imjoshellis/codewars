package main

import (
	"fmt"
	"testing"
)

func TestMyCircularQueue(t *testing.T) {
	cq := Constructor(2)
	if cq.EnQueue(4) != true {
		t.Fatal("01 went wrong")
	}
	if cq.Rear() != 4 {
		t.Fatal("02 went wrong")
	}
	if cq.EnQueue(9) != true {
		t.Fatal("03 went wrong")
	}
	if cq.DeQueue() != true {
		t.Fatal("04 went wrong")
	}
	if cq.Front() != 9 {
		t.Fatal("05 went wrong")
	}
	if cq.DeQueue() != true {
		t.Fatal("06 went wrong")
	}
	if cq.Front() != -1 {
		t.Fatal("07 went wrong")
	}
	if cq.DeQueue() != false {
		t.Fatal("08 went wrong")
	}
	fmt.Println(cq.IsEmpty(), "exp true")
	if cq.IsEmpty() != true {
		t.Fatal("09 went wrong")
	}
	if cq.DeQueue() != false {
		t.Fatal("10 went wrong")
	}
	if cq.EnQueue(6) != true {
		t.Fatal("11 went wrong")
	}
	if cq.EnQueue(4) != true {
		t.Fatal("12 went wrong")
	}
}
