export const majorityElement = (arr: number[]): number => {
  if (arr.length === 1) return arr[0]
  let map = new Map()
  for (let el of arr) {
    if (map.has(el)) {
      const n = map.get(el) + 1
      map.set(el, n)
      if (n > arr.length / 2) return el
    } else {
      map.set(el, 1)
    }
  }
  return 0
}
