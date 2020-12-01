# OpenLock

🛑️ This won't make any sense unless you're familiar with the problem explanation on LeetCode: <https://leetcode.com/problems/open-the-lock/>

## Simple Case

I always like to start with an overly simplified case to wrap my mind around a problem. Let's pretend we only have one wheel to turn, and our target is 8. You can visualize the possibilities as a tree:

```txt
    0
   / \
  9   1
 / \ / \
8*  0   2
```

Because the first time we see 8 is on the 2nd level of the tree, the answer for min number of turns would be 2.

From this simple exercise, we've learned at least two key things.

The first is we're looking at a Breadth First Search problem. We'll need to check all the options for one turn from the current state before checking the next level of possibilities.

The second is we will come across duplicates and need to have a plan for dealing with them.

## My First Solution

The first solution that I came up with was very rough, so I won't be sharing the code. It was missing a lot of optimization, but the basic ideas and logic were solid:

1. Initialize `map` to keep track of whether we've visited a permutation.
2. Initialize `queue` with the starting "0000" case.
3. Initialize `turns`, which will keep track of our level in the search.
4. If `deadends` has "0000" in it, `return -1`.
5. Start a loop that will run until `queue` is empty.
6. Evaluate a level of possibilities, adding and removing elements from `queue`, and increment `turns` as necessary.
7. Don't add a possibility to `queue` if it's in `deadends`
8. If we hit the target, return `turns`.

## A Surprising Optimization

The key optimization that I had missed at first was that we can think of the permutations of the lock as integers and use a 10,000 element boolean array as our map instead of a real hash map.

This optimizes the solution quite a bit. Let's look at the code.

## Code Walkthrough

To start, we initialize the map and queue:

```go
func openLock(deadends []string, target string) int {
  m, q := make([]bool, 10000), []int{0}
}
```

Then, we convert `deadends` to integers and mark them as visited:

```go
for _, s := range deadends {
  i, _ := strconv.Atoi(s)
  m[i] = true
}
```

Guard against the edge case of "0000" being in `deadends`:

```go
if m[0] {
  return -1
}
```

Convert target to integer and mark "0000" as visited:

```go
t, _ := strconv.Atoi(target)
m[0] = true
```

Start the main loops. The outer loop initializes `turns`, continues as long as `len(q) > 0` and increments `turns` on every pass.

The inner loop uses `s` initialized to the current length of `q` and counting down to know when the level has been fully traversed.
  
```go
for turns := 0; 0 < len(q); turns++ {
  for s := len(q); s > 0; s-- {
  }
}
```

**Important:** For the rest of this section, keep in mind that we're inside the above loops!

At the start of each inner loop (meaning, for each node of the current level), we pull the head off `q` and return `turns` if we found the target:

```go
cur := q[0]
q = q[1:]
if cur == t {
  return turns
}
```

Otherwise, we iterate over the possible rotations from the `cur` position, adding them to `q` if they're not in our map. The utility functions `modUp` and `modDown` are explained in the next section.

Notice the for loop using `mod` is designed to iterate like this: `mod = 1 => 10 => 100 => 1000`.

```go
for mod := 1; mod < 10000; mod *= 10 {
  d := modDown(cur, mod)
  if !m[d] {
    q = append(q, d)
    m[d] = true
  }
  u := modUp(cur, mod)
  if !m[u] {
    q = append(q, u)
    m[u] = true
  }
}
```

After the bottom of the outer loop, we can `return -1` because we've exhausted all possibilities and can safely say it's not possible to reach target given the `deadends`.

## Utility Functions

The loop was getting messy, so I extracted these utility functions outside the main function. They're responsible for moving the digit up or down correctly. We can't naively add/subtract. For example: rotating the "9" in "0090" up should result in "0000", but simple addition would give you "0100".

Math with `%` can be confusing, but when you look at what what `mod` and `cur` could be, these functions should be simple:

```go
func modDown(cur int, mod int) int {
 if (cur/mod)%10 == 0 {
  return cur + 9*mod
 } else {
  return cur - mod
 }
}

func modUp(cur int, mod int) int {
 if (cur/mod)%10 == 9 {
  return cur - 9*mod
 } else {
  return cur + mod
 }
}
```

## Final Solution

```go
func openLock(deadends []string, target string) int {
 m, q := make([]bool, 10000), []int{0}
 for _, s := range deadends {
  i, _ := strconv.Atoi(s)
  m[i] = true
 }
 if m[0] {
  return -1
 }
 t, _ := strconv.Atoi(target)
 m[0] = true
 for turns := 0; 0 < len(q); turns++ {
  for s := len(q); s > 0; s-- {
   cur := q[0]
   q = q[1:]
   if cur == t {
    return turns
   }
   for mod := 1; mod < 10000; mod *= 10 {
    d := modDown(cur, mod)
    if !m[d] {
     q = append(q, d)
     m[d] = true
    }
    u := modUp(cur, mod)
    if !m[u] {
     q = append(q, u)
     m[u] = true
    }
   }
  }
 }
 return -1
}

func modDown(cur int, mod int) int {
 if (cur/mod)%10 == 0 {
  return cur + 9*mod
 } else {
  return cur - mod
 }
}

func modUp(cur int, mod int) int {
 if (cur/mod)%10 == 9 {
  return cur - 9*mod
 } else {
  return cur + mod
 }
}
```
