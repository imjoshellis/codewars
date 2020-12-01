// https://leetcode.com/problems/merge-intervals/
type Interval = [number, number]

const merge = (arr: Interval[]): Interval[] =>
  arr
    .sort(byFirstEl)
    .reduce(
      (a, c): Interval[] =>
        end(a)[1] >= c[0] ? [...start(a), combineMax(c)(a)] : [...a, c],
      [arr[0]]
    )

const combineMax = (c: Interval) => (a: Interval[]): Interval => [
  end(a)[0],
  Math.max(end(a)[1], c[1])
]

const byFirstEl = (a: Interval, b: Interval): number => a[0] - b[0]
const end = (a: Interval[]): number[] => a[a.length - 1]
const start = (a: Interval[]): Interval[] => a.slice(0, a.length - 1)

export { merge }
