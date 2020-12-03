# DailyTemperatures (LC #0739)

🛑️ This won't make any sense unless you're familiar with the problem explanation on LeetCode: <https://leetcode.com/problems/daily-temperatures/>

## Simplify Problem

I always like to simplify the problem as much as possible to wrap my mind around it. In this case, let's start with three elements. If they're all increasing, you just have to wait a day every time except for the end:

```js
[30, 40, 70]
=> [1, 1, 0]
```

If they are decreasing, every result will be zero:

```js
[70, 60, 50]
=> [0, 0, 0]
```

If there's a "valley" (meaning the middle is less than both ends), there are two options, depending on whether the start or end is greater:

```js
[70, 50, 60]
=> [0, 1, 0]

[60, 50, 70]
=> [2, 1, 0]
```

Finally, if there's a "peak" (meaning the middle is greater than both ends), there are two options, depending on whether the start or end is greater:

```js
[70, 80, 60]
=> [1, 0, 0]

[60, 80, 70]
=> [1, 0, 0]
```

## Abstracting

So, we've looked at some simple examples. What can we gather? The first thing I observed is the result array is related to the difference between the indices of elements. Let's take an example with an interesting result and annotate it with indices:

```js
 0   1   2
[60, 50, 70]
=> [2, 1, 0]
=> [2 - 0 = 2, // idx of 70 - idx of 60
    2 - 1 = 1, // idx of 70 - idx of 50
    0] // a higher temp was never reached
```

So now we know that when we hit a higher temperature, we can take the difference of it's index and the difference of previous "pending" lower temperatures to find the correct result value.

Here's another example with more temps in case it's not clear yet how this works:

```js
 0   1   2   3   4   5
[60, 50, 70, 40, 40, 80]
=> [2, 1, 3, 2, 1, 0]
=> [2 - 0 = 2, // idx of 70 - idx of 60
    2 - 1 = 1, // idx of 70 - idx of 50
    5 - 2 = 3, // idx of 80 - idx of 70
    5 - 3 = 2, // idx of 80 - idx of first 40
    5 - 4 = 1, // idx of 80 - idx of second 40
    0] // a higher temp was never reached
```

## Putting It Into Code

In order to manage the "pending" temperatures, we'll use a stack. We also initialize `res` as the same length as `T`, which will make sure we have the right amount of zeroes at the end of `res`.

In our stack, we'll use tuples where the first value is the temperature and the second is its index.

```go
func dailyTemperatures(T []int) []int {
  st, res := [][]int{}, make([]int, len(T))
  // ...
  return res
}
```

Then, we loop over every element in `T`.

```go
func dailyTemperatures(T []int) []int {
  // ...
  for i, el := range T {
    // ...
  }
  return res
}
```

An inner loop checks to make sure the stack isn't empty and whether the current element is greater than the top of the stack.

```go
func dailyTemperatures(T []int) []int {
  // ...
  for i, el := range T {
    for l := len(st) - 1; l >= 0 && el > st[l][0]; l-- {
      // ...
    }
    // ...
  }
  return res
}
```

Inside the inner loop, set `j` to be the index of the temperature at the top of the stack and add the difference between indices to `res` at `j`. Last, we need to shorten the stack.

```go
func dailyTemperatures(T []int) []int {
  // ...
  for i, el := range T {
    for l := len(st) - 1; l >= 0 && el > st[l][0]; l-- {
      j := st[l][1]
      res[j] = i - j
      st = st[:l]
    }
    // ...
  }
  return res
}
```

Once we're back outside the inner loop, we can add the current temperature and its index to the stack and continue the outer loop.

```go
func dailyTemperatures(T []int) []int {
  // ...
  for i, el := range T {
    // ...
    st = append(st, []int{el, i})
  }
  return res
}
```

## Final Solution

This solution isn't too bad, but it's possible to optimize by traversing `T` from end to start instead of going from start to end and using a stack.

```go
func dailyTemperatures(T []int) []int {
  st, res := [][]int{}, make([]int, len(T))
  for i, el := range T {
    for l := len(st) - 1; l >= 0 && el > st[l][0]; l-- {
      j := st[l][1]
      res[j] = i - j
      st = st[:l]
    }
    st = append(st, []int{el, i})
  }
  return res
}
```
