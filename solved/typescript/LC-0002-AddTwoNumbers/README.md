# Add Two Numbers (LC-0002)

View the problem explanation on LeetCode: <https://leetcode.com/problems/add-two-numbers/>

## Simple Case

Let's start with the assumption that we're adding two non-null single-digit nodes.

In that case, we would start by adding the two values together:

```ts
const addTwoNumbers = (
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null => {
  const sum = l1.val + l2.val
}
```

Next, we need to split the sum into a remainder and carry if it's greater than 10:

```ts
const rem = sum % 10
const carry = sum > 9 ? 1 : 0
```

Finally, we'd return a new ListNode pointing at the carry if it exists:

```ts
const carryNode = carry > 0 ? new ListNode(carry) : null
return new ListNode(rem, carryNode)
```

So far, what we have is this, which will work great if `l1` and `l2` are exactly one digit:

```ts
const addTwoNumbers = (
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null => {
  const sum = l1.val + l2.val
  const rem = sum % 10
  const carry = sum > 9 ? 1 : 0
  const carryNode = carry > 0 ? new ListNode(carry) : null
  return new ListNode(rem, carryNode)
}
```

## Recursion

Now we need to think about how to handle carrying a little better. What we need is a generic function that traverses down the list. Let's use recursion.

When the function returns, we want to move on to process the next nodes in each list.

Let's start by adding carry to the list of arguments, defaulting to 0. This way, we can pass the carry along with the recursive call:

```ts
const addTwoNumbers = (
  l1: ListNode | null,
  l2: ListNode | null,
  carry: number = 0
): ListNode | null => {
  // ...
```

We can do that by calling `addTwoNumbers` with `l1.next`, `l2.next`, and `carry` in the `next` part of the ListNode constructor:

```ts
return new ListNode(rem, addTwoNumbers(l1?.next, l2?.next, carry))
```

This will work if we also make sure to handle the null cases.

If both l1 and l2 are empty, we check the value of carry. If carry is 0, we are done and can return null. Otherwise, we're still done, but we need to return a node containing carry:

```ts
if (!l1 && !l2) return carry > 0 ? new ListNode(carry) : null
```

With that base case in place, this code will be accepted by LeetCode, but there's one obvious optimization to be added still:

```ts
const addTwoNumbers = (
  l1: ListNode | null,
  l2: ListNode | null,
  carry: number = 0
): ListNode | null => {
  if (!l1 && !l2) return carry > 0 ? new ListNode(carry) : null
  const l1val = l1?.val || 0
  const l2val = l2?.val || 0
  const sum = l1val + l2val + carry
  const rem = sum % 10
  carry = sum > 9 ? 1 : 0
  return new ListNode(rem, addTwoNumbers(l1?.next, l2?.next, carry))
}
```

## Optimization

What if one of the lists is significantly longer than the other? We would waste time traversing it! If a list is empty and carry is 0, we can simply return the other list:

```ts
if (!l1 && carry === 0) return l2
if (!l2 && carry === 0) return l1
```

## Final Solution

Here's the final solution. On a good run, it's faster than ~98% of other TypeScript submissions.

To further optimize, we'd have to switch to an iterative method using a loop instead of recursion.

```ts
const addTwoNumbers = (
  l1: ListNode | null,
  l2: ListNode | null,
  carry: number = 0
): ListNode | null => {
  if (!l1 && !l2) return carry > 0 ? new ListNode(carry) : null
  if (!l1 && carry === 0) return l2
  if (!l2 && carry === 0) return l1
  const l1val = l1?.val || 0
  const l2val = l2?.val || 0
  const sum = l1val + l2val + carry
  const rem = sum % 10
  carry = sum > 9 ? 1 : 0
  return new ListNode(rem, addTwoNumbers(l1?.next, l2?.next, carry))
}
```
