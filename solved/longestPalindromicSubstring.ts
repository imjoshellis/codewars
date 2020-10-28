// https://leetcode.com/problems/longest-palindromic-substring/

export const isPalindrome = (s: string): boolean => {
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) return false
  }
  return true
}
export const longestPalindromicSubstring = (s: string): string => {
  let best = ''

  for (let i = 0; i < s.length; i++) {
    if (s.length - i < best.length) return best
    for (let j = s.length; j - i >= best.length; j--) {
      if (isPalindrome(s.slice(i, j))) best = s.slice(i, j)
    }
  }
  return best
}
