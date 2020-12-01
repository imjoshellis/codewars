// https://leetcode.com/problems/baseball-game/
// An integer x - Record a new score of x.
// "+" - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
// "D" - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
// "C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.

const calPoints = (ops: string[]): number => {
  const pts: number[] = []
  ops.forEach(op => {
    switch (op) {
      case '+':
        pts.push(pts[pts.length - 1] + pts[pts.length - 2])
        break
      case 'D':
        pts.push(pts[pts.length - 1] * 2)
        break
      case 'C':
        pts.pop()
        break
      default:
        pts.push(parseInt(op))
        break
    }
  })
  return pts.reduce((acc, pt) => acc + pt)
}

export { calPoints }
