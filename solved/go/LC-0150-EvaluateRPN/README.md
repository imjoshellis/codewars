# Evaluate Reverse Polish Notation (LC #0150)

🛑️ This won't make any sense unless you're familiar with the problem explanation on LeetCode: <https://leetcode.com/problems/evaluate-reverse-polish-notation/>

## Solution w/ Comments

```go
func evalRPN(tokens []string) int {
  // initiate a stack
  st := []int{}

  // loop over tokens
  for _, el := range tokens {
    // try to convert to int...
    n, err := strconv.Atoi(el)
    // if no error (aka success)...
    if err == nil {
      // add n to the stack and continue
      st = append(st, n)
      continue
    }

    // otherwise, we need to operate on the stack
    // the second to last element is the first one,
    // and the last element will be added/subtracted/etc  
    i := len(st) - 2
    switch el {
    case "+":
      // operate in place because we'll
      // leave the result in the stack
      st[i] += st[i+1]
    case "/":
      st[i] /= st[i+1]
    case "*":
      st[i] *= st[i+1]
    case "-":
      st[i] -= st[i+1]
    }
    // remove the last element from the stack
    st = st[:i+1]
  }
  
  // at the end, we should have one element left
  return st[0]
}
```
