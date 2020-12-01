import { wordBreak2 } from './wordBreak2'

it('does nothing', () => {
  const test = ['cat', 'cats', 'and', 'sand', 'dog']
  expect(wordBreak2('catsanddog', test).sort()).toEqual(
    ['cats and dog', 'cat sand dog'].sort()
  )
})
