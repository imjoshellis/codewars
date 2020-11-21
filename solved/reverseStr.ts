// amazon-interview-mock

const splitArr = (arr: any[]) => ({
  last: arr[arr.length - 1],
  rest: arr.slice(0, arr.length - 1)
})

const reducer = (k: number) => (a: string[][], c: string) =>
  splitArr(a).last.length === k
    ? [...a, [c]]
    : [...splitArr(a).rest, [...splitArr(a).last, c]]

const mapper = (el: string[], i: number) =>
  i % 2 ? el.join('') : el.reverse().join('')

const reverseStr = (s: string, k: number): string =>
  [...s]
    .reduce(reducer(k), [[]])
    .map(mapper)
    .join('')

export { reverseStr }
