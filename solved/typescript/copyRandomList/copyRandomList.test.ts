import { Node, copyRandomList } from './copyRandomList'

it('solves null case', () => {
  const test = null
  expect(copyRandomList(test)).toBe(null)
})

it('solves simple case', () => {
  let node = new Node(2)
  node.random = node
  const test = new Node(1, node, node)
  expect(copyRandomList(test)).toEqual(test)
})
