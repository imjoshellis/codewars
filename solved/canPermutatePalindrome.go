func canPermutePalindrome(s string) bool {
	hasCenter := len(s)%2 != 0
	foundCenter := false
	m := make(map[rune]int)
	for _, c := range s {
		m[c] += 1
	}
	for _, n := range m {
		if n%2 == 0 {
			continue
		}
		if hasCenter && !foundCenter {
			foundCenter = true
			continue
		}
		return false
	}
	return true
}