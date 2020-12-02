# Reverse Bits (LC #190)

🛑️ This won't make any sense unless you're familiar with the problem explanation on LeetCode: <https://leetcode.com/problems/reverse-bits/>

## Pop & Push

This problem can be thought of as a pop and push. If you want to reverse three arbitrary elements, you can take off one side and push into the other:

```txt
a b c ->
_ _ _ <-

_ a b ->
_ _ c <-

_ _ a ->
_ c b <-

_ _ _ ->
c b a <-
```

We can reverse bits in the same way.

## Final Solution

```go
func reverseBits(n uint32) uint32 {
    // initialize return value
    r := uint32(0)

    // loop over all 32 bits
    for i := 0; i < 32; i++ {

        // shift r left by 1 and add n's last bit
        r = r << 1 + n & 1

        // shift n right by 1 to remove the last bit
        n >>= 1
    }

    return r
}
```
