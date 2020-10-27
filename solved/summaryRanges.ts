// https://leetcode.com/problems/summary-ranges/
export const summaryRanges = (arg: number[]): string[] => {
  if (arg.length === 0) return []
  if (arg.length === 1) return [arg[0] + '']
  const ret = [] as string[]
  let start = arg[0]
  let end = arg[0]
  const makeRange = (start: number, end: number) => start + '->' + end

  for (let i = 1; i < arg.length; i++) {
    if (arg[i] === end + 1) {
      end = arg[i]
    } else if (start === end) {
      ret.push(start + '')
      start = arg[i]
      end = arg[i]
    } else {
      ret.push(makeRange(start, end))
      start = arg[i]
      end = arg[i]
    }
  }
  start !== end ? ret.push(makeRange(start, end)) : ret.push(start + '')
  return ret
}
