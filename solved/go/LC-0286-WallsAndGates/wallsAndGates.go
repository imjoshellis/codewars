// Package wallsandgates solves the problem of filling each empty room with the distance to its nearest gate
// URL: https://leetcode.com/problems/walls-and-gates/
package wallsandgates

import (
	"math"
)

const (
	empty = math.MaxInt32
	gate  = 0
)

// a list of all the possible directions
var dirs = [4][2]int{
	{1, 0},
	{-1, 0},
	{0, 1},
	{0, -1},
}

// wallsAndGates is the primary function for the problem
func wallsAndGates(rooms [][]int) {
	// return early if given bad input
	if len(rooms) == 0 || len(rooms[0]) == 0 {
		return
	}

	// save rows and cols for later
	rs, cs := len(rooms), len(rooms[0])

	// set up queue starting with the gates
	q := [][]int{}
	for row := range rooms {
		for col := range rooms[row] {
			if rooms[row][col] == gate {
				// add gate to queue
				q = append(q, []int{row, col})
			}
		}
	}

	// while there are items in the queue
	for len(q) > 0 {
		// pop the first item off
		p := q[0]
		q = q[1:]

		// extract row and col from p
		row, col := p[0], p[1]

		// loop over possible directions
		for _, dir := range dirs {
			// set local r & c based on dir
			r := row + dir[0]
			c := col + dir[1]

			// if outside grid or on non-empty spot, continue
			if r < 0 || c < 0 || r >= rs || c >= cs || rooms[r][c] != empty {
				continue
			}

			// if the current room is valid,
			// distance is one greater than the previous
			rooms[r][c] = rooms[row][col] + 1

			// add room to queue for processing later
			q = append(q, []int{r, c})
		}
	}
}
