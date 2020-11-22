import { countCharacters } from './countCharacters'

it('solves lc scenario', () => {
  const words = ['cat', 'bt', 'hat', 'tree']
  const chars = 'atach'

  expect(countCharacters(words, chars)).toBe(6)
})
