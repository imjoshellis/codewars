# Perfect Squares (LC #279)

🛑️ This won't make any sense unless you're familiar with the problem explanation on LeetCode: <https://leetcode.com/problems/perfect-squares/>

## Simplified Idea

It's actually quite difficult to simplify this problem, but we can start by considering what would happen if N were square:

```go
n = 4
```

As pattern-recognizing humans, we know that's a square number and can safely say the answer is 1. What about if it's one away from a square?

```go
n = 5
```

In that case, the answer is of course 2 because `5 = 1 + 4` is the optimal solution.

But how did we conclude that? We know 5 isn't a square, so we then try to subtract a square from 5. We could have chosen either 4 or 1 in this case. Then, once we choose 4 or 1, the result is a perfect square, so we know we've found the minimum path.

This is a tree problem, where at every level, we examine all possible ways to subtract a square from the previous node.

It's difficult to create a visualization, but hopefully this will help:

```txt
level [nodes] => how next level's nodes are calculated
___
1: [5] => 5 - 4 = (1), 5 - 1 = (4)
2: [1, 4] => 4 - 4 = (0), 1 - 1 = (0), 4 - 1 = (3)
3: [0, 3] => done b/c we found zero
```

In this way, we can see this problem can be solved by Breadth First Search (BFS).

## Writing the Code

We'll need a list of all the squares that exist which are smaller than N:

```go
sqs := []int{}
for i := 1; i*i <= n; i++ {
  sqs = append(sqs, i*i)
}
```

For BFS, we need a queue:

```go
q := []int{n}
```

Set up the outer/inner loops. The outer loop is to keep track of our level. The inner loop loops over one level at a time:

```go
for l := 1; l < n; l++ {
  for s := len(q); s > 0; s-- {
  }
}
```

**Important:** For the rest of this section, we'll be inside the inner loop!

Every time we loop, we need to take the head of the queue:

```go
cur := q[0]
q = q[1:]
```

Then, we iterate over any squares that are smaller than `cur` (breaking when we hit too large of a square).

For every possible square, we check to see if we've found the answer. If so, return `l`. Otherwise, add `cur - el` to the queue for later:

```go
for _, el := range sqs {
  if el > cur {
    continue
  }
  if x := cur - el; x == 0 {
    return l
  } else {
    q = append(q, x)
  }
}
```

Finally, I put a `return n` at the bottom of the function just to satisfy the compiler, but we should never need it.

## Final Solution

This isn't as optimized as some of the other solutions out there. There are much faster solutions that use a pre-generated list of squares rather than generating it every time.

I believe without the hard-coded list of squares, there may be a few minor optimizations that could be made to this algorithm, but I'm happy with where it ended up.

```go
func numSquares(n int) int {
  sqs := []int{}
  for i := 1; i*i <= n; i++ {
    sqs = append(sqs, i*i)
  }
  q := []int{n}
  for l := 1; l < n; l++ {
    for s := len(q); s > 0; s-- {
      cur := q[0]
      q = q[1:]
      for _, el := range sqs {
        if el > cur {
          break
        }
        if x := cur - el; x == 0 {
          return l
        } else {
          q = append(q, x)
        }
      }
    }
  }
  return n
}
```
