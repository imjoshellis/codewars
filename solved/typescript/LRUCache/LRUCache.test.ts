import { LRUCache } from './LRUCache'

describe('Given a capacity of 1', () => {
  const cache = new LRUCache(1)

  it('When #put(1, 1) is called', () => {
    cache.put(1, 1)
  })

  it('Then #get(1) returns 1', () => {
    expect(cache.get(1)).toBe(1)
  })
})

describe('Given a capacity of 1', () => {
  const cache = new LRUCache(1)

  it('When #put is not called', () => {})

  it('Then #get(1) returns -1', () => {
    expect(cache.get(1)).toBe(-1)
  })
})

describe('Given a capacity of 2', () => {
  const cache = new LRUCache(2)

  it('When the cache is overfilled', () => {
    cache.put(1, 1)
    cache.put(2, 2)
    cache.put(3, 3)
  })

  it('Then #get(3) returns 3', () => {
    expect(cache.get(3)).toBe(3)
  })
})

describe('Given a LeetCode scenario', () => {
  const cache = new LRUCache(2)

  it('solves the sequence', () => {
    cache.put(1, 1) // cache is {1=1}
    cache.put(2, 2) // cache is {1=1, 2=2}
    expect(cache.get(1)).toBe(1)
    cache.put(3, 3) // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
    expect(cache.get(2)).toBe(-1) // returns -1 (not found)
    cache.put(4, 4) // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
    expect(cache.get(1)).toBe(-1) // return -1 (not found)
    expect(cache.get(3)).toBe(3) // return 3
    expect(cache.get(4)).toBe(4) // return 4
  })
})

describe('Given a second LeetCode scenario', () => {
  const cache = new LRUCache(2)

  it('solves the sequence', () => {
    cache.put(2, 1)
    cache.put(1, 1)
    cache.put(2, 3)
    cache.put(4, 1)
    expect(cache.get(1)).toBe(-1)
    expect(cache.get(2)).toBe(3)
  })
})

describe('Given a third LeetCode scenario', () => {
  const cache = new LRUCache(3)

  it('solves the sequence', () => {
    cache.put(1, 1)
    cache.put(2, 2)
    cache.put(3, 3)
    cache.put(4, 4)
    expect(cache.get(4)).toBe(4)
    expect(cache.get(3)).toBe(3)
    expect(cache.get(2)).toBe(2)
    expect(cache.get(1)).toBe(-1)
    cache.put(5, 5)
    expect(cache.get(1)).toBe(-1)
    expect(cache.get(2)).toBe(2)
    expect(cache.get(3)).toBe(3)
    expect(cache.get(4)).toBe(-1)
    expect(cache.get(5)).toBe(5)
  })
})
