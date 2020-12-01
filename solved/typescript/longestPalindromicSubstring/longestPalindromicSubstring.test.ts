import {
  isPalindrome,
  longestPalindromicSubstring
} from './longestPalindromicSubstring'

describe('isPalindrome', () => {
  it('handles single char', () => {
    const test = 'a'
    expect(isPalindrome(test)).toBe(true)
  })

  it('handles two char', () => {
    expect(isPalindrome('aa')).toBe(true)
    expect(isPalindrome('ab')).toBe(false)
  })

  it('handles three char', () => {
    expect(isPalindrome('aba')).toBe(true)
    expect(isPalindrome('abb')).toBe(false)
  })

  it('handles four char', () => {
    expect(isPalindrome('abba')).toBe(true)
    expect(isPalindrome('abbc')).toBe(false)
  })
})

describe('longestPalindromicSubstring', () => {
  it('handles single char', () => {
    const test = 'a'
    expect(longestPalindromicSubstring(test)).toBe('a')
  })

  it('handles a palindrome', () => {
    const test = 'aba'
    expect(longestPalindromicSubstring(test)).toBe('aba')
  })

  it('handles abaa', () => {
    const test = 'abaa'
    expect(longestPalindromicSubstring(test)).toBe('aba')
  })

  it('handles leetcode', () => {
    expect(longestPalindromicSubstring('cbbd')).toBe('bb')
    expect(longestPalindromicSubstring('babad')).toBe('aba')
  })
})
