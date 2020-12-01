// https://leetcode.com/problems/group-anagrams/
const makeHash = (s: string) => [...s].sort().join()
const updateMap = (
  s: string,
  map: Map<string, string[]>
): Map<string, string[]> => {
  const key = makeHash(s)
  const newVal = [s, ...(map.get(key) || [])]
  return map.set(key, newVal)
}

const groupAnagrams = (a: string[]): string[][] => {
  const map = new Map()
  for (let i = 0; i < a.length; i++) {
    updateMap(a[i], map)
  }
  return [...map.values()]
}

export { groupAnagrams }
