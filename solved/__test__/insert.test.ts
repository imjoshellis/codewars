import { insert, Node } from './insert'

it('handles null node', () => {
  const node = new Node(1)
  node.next = node
  expect(insert(null, 1)).toEqual(node)
})

it('handles single node', () => {
  const node = new Node(2)
  node.next = node
  const res = new Node(2)
  const res2 = new Node(1, res)
  res.next = res2
  expect(insert(node, 1)).toEqual(res)
})

it('handles adding between two nodes', () => {
  const node2 = new Node(3)
  const node1 = new Node(1, node2)
  node2.next = node1

  const res3 = new Node(3)
  const res2 = new Node(2, res3)
  const res1 = new Node(1, res2)
  res3.next = res1
  expect(insert(node1, 2)).toEqual(res1)
})
