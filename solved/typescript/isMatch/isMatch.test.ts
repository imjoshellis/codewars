import { isMatch } from './isMatch'

describe('isMatch', () => {
  it('handles blank pattern', () => {
    const s = 'arst'
    const p = ''
    expect(isMatch(s, p)).toBe(false)
  })

  it('handles exact pattern', () => {
    const s = 'arst'
    const p = 'arst'
    expect(isMatch(s, p)).toBe(true)
  })

  it('handles simple mismatch pattern', () => {
    const s = 'aa'
    const p = 'a'
    expect(isMatch(s, p)).toBe(false)
  })

  it('handles simple star', () => {
    const s = 'arss'
    const p = 'ars*'
    expect(isMatch(s, p)).toBe(true)
  })

  it('handles weird star', () => {
    const s = 'arss'
    const p = 'arc*s*'
    expect(isMatch(s, p)).toBe(true)
  })

  it('handles mississippi star', () => {
    const s = 'mississippi'
    const p = 'mis*is*p*.'
    expect(isMatch(s, p)).toBe(false)
  })

  it('handles .*', () => {
    const s = 'mississippi'
    const p = '.*'
    expect(isMatch(s, p)).toBe(true)
  })

  it('handles false .*t', () => {
    const s = 'mississippi'
    const p = '.*t'
    expect(isMatch(s, p)).toBe(false)
  })

  it('handles true .*t', () => {
    const s = 'mat'
    const p = '.*t'
    expect(isMatch(s, p)).toBe(true)
  })
})
