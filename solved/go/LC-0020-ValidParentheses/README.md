# Valid Parentheses (LC #0020)

🛑️ This won't make any sense unless you're familiar with the problem explanation on LeetCode: <https://leetcode.com/problems/valid-parentheses>

## Simplified Problem

For the simplest case of a string with length 2 and only `(` or `)`, there are four options:

```txt
(), )(, ((, ))
```

How can we decide that the first one is the only valid one? I think about this problem as trying to find when it is **invalid** rather than valid. So we need to consider the ways a string could be invalid, and if it passes all those checks, we can consider it valid.

There are exactly two ways a string can be invalid:

1. We reach a closing bracket that hasn't yet been opened (second and fourth cases above)
2. We reach the end of the string with open brackets that aren't closed (third case above)

So, the solution here is to use a stack that we add to whenever we encounter an open bracket. To check the above conditions:

1. When we reach a closing bracket, if it doesn't match the top of the stack, the string is invalid.
2. If we've processed the whole string and there are elements left in our stack, the string is invalid.

## Example With Valid String

This is how we will process a string.

We start with an empty stack:

```txt
stack: empty
string: (([]){}[])
current: empty
```

We then look at the first element of the string. In this case, it's an opening bracket, so we can put it onto the stack and continue.

```txt
stack: (
string: (([]){}[])
        ^
```

We encounter a few opening brackets, so let's fast-forward through them.

We just add to stack every time:

```txt
stack: (([
string: (([]){}[])
          ^
```

Now, we've hit our first closing bracket. So we look at the top of the stack and see if it matches:

```txt
stack: (([
string: (([]){}[])
           ^
```

It does, so we can continue. Remove the match from the stack and step forward. We're on another closing bracket, so we again compare to the stack:

```txt
stack: ((
string: (([]){}[])
            ^
```

Hopefully you can see that this will work for the rest of the string. At the end, we can confidently `return true` because the stack is empty and we didn't encounter any issues.

## Example With Invalid String

Let's look at what would happen with a bad string. I've skipped the first few elements (you can see they're already on the stack):

```txt
stack: ((
string: ((]){}[])
          ^
```

In this case, we've encountered a closing bracket that doesn't match the top of the stack. Therefore, we can `return false`.

What about the second way we can fail, where there are too many opening brackets? Here's what it would look like when we reach the end of the string:

```txt
stack: ({
string: ((){
```

In that case, we can `return false` at the end of the function if `len(stack) > 0` and `true` otherwise. Therefore we can simply `return len(stack) == 0`.

## Final Solution

I hope my code is simple and clear after that explanation. The only thing I do differently is instead of storing the open brackets on the stack, I store the matches that we're looking for. Please let me know if you have any questions about how it works.

```go
func isValid(s string) bool {
  // if the string isn't of even length,
  // it can't be valid so we can return early
  if len(s)%2 != 0 {
    return false
  }

  // set up stack and map
  st := []rune{}
  open := map[rune]rune{
    '(': ')',
    '[': ']',
    '{': '}',
  }

  // loop over string
  for _, r := range s {
  
    // if the current character is in the open map,
    // put its closer into the stack and continue
    if closer, ok := open[r]; ok {
      st = append(st, closer)
      continue
    }

    // otherwise, we're dealing with a closer
    // check to make sure the stack isn't empty
    // and whether the top of the stack matches
    // the current character
    l := len(st) - 1
    if l < 0 || r != st[l] {
      return false
    }

    // take the last element off the stack
    st = st[:l]
  }
  
  // if the stack is empty, return true, otherwise false
  return len(st) == 0
}
```
