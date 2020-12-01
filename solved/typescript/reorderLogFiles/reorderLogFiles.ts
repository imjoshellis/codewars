// https://leetcode.com/problems/reorder-data-in-log-files/
const split = (s: string) => [s.match(/^\w+/)![0], s.match(/ \b.+/)![0].trim()]
const join = (s: string[]) => s.join(' ')

const isDigits = (s: string) => /[0-9]/.test(s)
const digitSort = (a: string) => (isDigits(a) ? 1 : -1)
const letterSort = (a: string, b: string) =>
  a.toLowerCase().localeCompare(b.toLowerCase())

const byType = ([idA, a]: string[], [idB, b]: string[]) =>
  isDigits(a) || isDigits(b)
    ? digitSort(a)
    : letterSort(a, b) === 0
    ? letterSort(idA, idB)
    : letterSort(a, b)

const reorderLogFiles = (logs: string[]): string[] =>
  logs
    .map(split)
    .sort(byType)
    .map(join)

export { reorderLogFiles }
