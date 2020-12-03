# Min Stack (LC #155)

🛑️ This won't make any sense unless you're familiar with the problem explanation on LeetCode: <https://leetcode.com/problems/min-stack/>

## Type

`MinStack` is a simple struct with two fields. It will have a stack which is a slice of integers and an in that represents its minimum value.

```go
type MinStack struct {
  st  []int
  min int
}
```

## Constructor

When we create an instance of `MinStack`, we can rely on Go to initialize a nil stack for us. We just have to set `min` to be a maximum int.

```go
func Constructor() MinStack {
  return MinStack{min: math.MaxInt64}
}
```

## Push

When we `push` an element, it must go at the end, so we use `append`. When adding an element, it could be lower than the current `min`, so we check for that and adjust `min` if needed.

```go
func (ms *MinStack) Push(x int) {
  ms.st = append(ms.st, x)
  if x < ms.min {
    ms.min = x
  }
}
```

## Pop

Next, we have the `pop` function. The first part is simple. Remove the last element from the stack. We save its value in `last` beacuse we need to make sure it's not the minimum value. If it's not the minimum, we can return early.

```go
func (ms *MinStack) Pop() {
  l := len(ms.st)
  last := ms.st[l-1]
  ms.st = ms.st[:l-1]
  if last != ms.min {
    return
  }
  // ...
}
```

If we get to the rest of `pop`, it means we just popped an element off that had the min value, so we need to recompute the minimum by iterating though the list.

```go
func (ms *MinStack) Pop() {
  // ...
  ms.min = math.MaxInt64
  for _, x := range ms.st {
    if x < ms.min {
      ms.min = x
    }
  }
}
```

## Top & GetMin

The `top` and `getMin` functions are trivial.

```go
func (ms *MinStack) Top() int {
  return ms.st[len(ms.st)-1]
}

func (ms *MinStack) GetMin() int {
  return ms.min
}
```

## Final Solution

With the way I've set this up, it's optimized for reading the min and inserting new elements. The slow part is when you remove elements because if you happen to remove the `min` element, it needs to iterate over the entire stack, which is O(n) time.

An alternative way of handling this would be to have a second internal stack that's sorted, which would make updating `min` during a `pop` trivial and O(1) time. However, this is at the cost of space, and it will make the `push` function take longer because it will require adding into a sorted list, which is an O(n) operation.

So in this alternate structure, we have an O(n) operation at every `push` rather than having the chance of O(n) during `pop`. Therefore, if you're going to be doing `pop` more often than `push`, you should give the complexity to `push`. Otherwise, `pop` should have the complexity.

```go
import "math"

type MinStack struct {
  st  []int
  min int
}

func Constructor() MinStack {
  return MinStack{min: math.MaxInt64}
}

func (ms *MinStack) Push(x int) {
  ms.st = append(ms.st, x)
  if x < ms.min {
    ms.min = x
  }
}

func (ms *MinStack) Pop() {
  l := len(ms.st)
  last := ms.st[l-1]
  ms.st = ms.st[:l-1]
  if last != ms.min {
   return
  }

  ms.min = math.MaxInt64
  for _, x := range ms.st {
    if x < ms.min {
      ms.min = x
    }
  }
}

func (ms *MinStack) Top() int {
  return ms.st[len(ms.st)-1]
}

func (ms *MinStack) GetMin() int {
  return ms.min
}
```
