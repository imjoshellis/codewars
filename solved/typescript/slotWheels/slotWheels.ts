export const slotWheels = (history: string[]): number => {
  let sum = 0
  const spinNums = history.map(row =>
    row
      .split('')
      .map(n => parseInt(n))
      .sort()
      .reverse()
  )

  while (spinNums[0].length > 0) {
    let max = 0
    for (let row of spinNums) {
      const n = row.pop() || 0
      if (n > max) max = n
    }
    sum += max
  }
  return sum
}
