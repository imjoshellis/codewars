import { romanNumerals } from '../romanNumerals'

describe('roman numeral converter', () => {
  it('correctly returns 1 for I', () => {
    expect(romanNumerals('I')).toBe(1)
  })

  it('correctly returns 5 for V', () => {
    expect(romanNumerals('V')).toBe(5)
  })

  it('correctly returns 10 for X', () => {
    expect(romanNumerals('X')).toBe(10)
  })

  it('correctly returns 50 for L', () => {
    expect(romanNumerals('L')).toBe(50)
  })

  it('correctly returns 100 for C', () => {
    expect(romanNumerals('C')).toBe(100)
  })

  it('correctly returns 1000 for M', () => {
    expect(romanNumerals('M')).toBe(1000)
  })

  it('correctly returns values with I', () => {
    expect(romanNumerals('II')).toBe(2)
    expect(romanNumerals('III')).toBe(3)
  })

  it('correctly returns values with V and I', () => {
    expect(romanNumerals('IV')).toBe(4)
    expect(romanNumerals('VI')).toBe(6)
    expect(romanNumerals('VII')).toBe(7)
    expect(romanNumerals('VIII')).toBe(8)
  })

  it('correctly returns values with X and I', () => {
    expect(romanNumerals('IX')).toBe(9)
    expect(romanNumerals('X')).toBe(10)
    expect(romanNumerals('XIX')).toBe(19)
    expect(romanNumerals('XXIX')).toBe(29)
  })

  it('correctly returns values with X and V', () => {
    expect(romanNumerals('XV')).toBe(15)
    expect(romanNumerals('XXV')).toBe(25)
    expect(romanNumerals('XXXV')).toBe(35)
  })

  it('correctly returns values with X, V, and I', () => {
    expect(romanNumerals('XIV')).toBe(14)
    expect(romanNumerals('XXVI')).toBe(26)
    expect(romanNumerals('XXXVII')).toBe(37)
  })

  it('correctly returns values with X and L', () => {
    expect(romanNumerals('XL')).toBe(40)
    expect(romanNumerals('LXX')).toBe(70)
  })

  it('correctly returns values with L, X, V and I', () => {
    expect(romanNumerals('XLV')).toBe(45)
    expect(romanNumerals('LXIV')).toBe(64)
  })

  it('correctly returns values with C, L, X, V and I', () => {
    expect(romanNumerals('CXLV')).toBe(145)
    expect(romanNumerals('CCLXIV')).toBe(264)
  })

  it('correctly returns values with D, C, L, X, V and I', () => {
    expect(romanNumerals('CDXLV')).toBe(445)
    expect(romanNumerals('DCCLXIV')).toBe(764)
  })

  it('correctly returns values with M, C, L, X, V and I', () => {
    expect(romanNumerals('MCXLV')).toBe(1145)
    expect(romanNumerals('MMCCLXIV')).toBe(2264)
  })
})
