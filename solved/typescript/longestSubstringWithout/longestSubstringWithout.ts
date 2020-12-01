// https://leetcode.com/problems/longest-substring-without-repeating-characters/
export const longestSubstring = (s: string): number => {
  const map = {} as { [key: string]: number }
  let left = 0,
    max = 0

  for (let i = 0; i < s.length; i++) {
    left = map[s[i]] >= left ? map[s[i]] + 1 : left
    map[s[i]] = i
    max = Math.max(max, i - left + 1)
  }

  return max
}
