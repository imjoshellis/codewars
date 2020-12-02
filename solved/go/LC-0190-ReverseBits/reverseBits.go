// Package reversebits solves X problem from Y
// URL: https://leetcode.com/problems/reverse-bits/
package reversebits

// reverseBits is the primary function for the problem
func reverseBits(n uint32) uint32 {
	// initialize return value
	r := uint32(0)

	// loop over all 32 bits
	for i := 0; i < 32; i++ {

		// shift r left by 1 and add opposite of n's last bit
		r = r<<1 + n&1

		// shift n right by 1 to remove the last bit
		n >>= 1
	}

	return r
}
