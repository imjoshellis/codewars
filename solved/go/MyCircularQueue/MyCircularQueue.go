// Package main has solved algorithms
// https://leetcode.com/explore/learn/card/queue-stack/228/first-in-first-out-data-structure/1337/
package main

// import log "github.com/sirupsen/logrus"

type MyCircularQueue struct {
	q []int // queue
	s int   // size
	h int   // head
	t int   // tail
}

// Constructor intializes a circular queue.
func Constructor(size int) MyCircularQueue {
	return MyCircularQueue{
		s: size,
		h: -1,
		t: -1,
		q: make([]int, size),
	}
}

// EnQueue inserts an element into the circular queue.
func (cq *MyCircularQueue) EnQueue(v int) bool {
	if cq.IsFull() {
		return false
	}

	if cq.IsEmpty() {
		cq.h, cq.t = 0, 0
	} else {
		cq.t = (cq.t + 1) % cq.s
	}

	cq.q[cq.t] = v
	return true
}

// DeQueue deletes the element at head
func (cq *MyCircularQueue) DeQueue() bool {
	if cq.IsEmpty() {
		return false
	}

	if cq.h == cq.t {
		cq.h = -1
		cq.t = -1
	} else {
		cq.h = (cq.h + 1) % cq.s
	}

	return true
}

// Front returns the element at the head
func (cq *MyCircularQueue) Front() int {
	if cq.IsEmpty() {
		return -1
	}
	return cq.q[cq.h]
}

// Rear returns the element at the tail
func (cq *MyCircularQueue) Rear() int {
	if cq.IsEmpty() {
		return -1
	}
	return cq.q[cq.t]
}

// IsEmpty checks whether the queue is empty
func (cq *MyCircularQueue) IsEmpty() bool {
	return cq.h == -1
}

// IsFull checks whether the queue is full
func (cq *MyCircularQueue) IsFull() bool {
	return (cq.t+1)%cq.s == cq.h
}

func main() {
}
