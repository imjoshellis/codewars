import { convert } from './zigzagConversion'

it('passes simple case', () => {
  /*
   *  P  Y
   *  A  P
   */
  expect(convert('PAYP', 2)).toBe('PYAP')
})
it('passes PAYPALISHIRING', () => {
  expect(convert('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR')
})
