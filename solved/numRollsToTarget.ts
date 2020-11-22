// amazon-interview-mock
const numRollsToTarget = (
  d: number,
  f: number,
  t: number
): number | boolean => {
  let cur = Array(t + 1).fill(0)
  cur[0] = 1
  for (let i = 1; i <= d; i++) {
    let pre = [...cur]
    cur.fill(0)
    for (let j = 1; j <= t; j++)
      for (let k = 1; k <= f; k++)
        if (j - k >= 0) cur[j] = (cur[j] + pre[j - k]) % (1e9 + 7)
        else break
  }
  return cur[t]
}

export { numRollsToTarget }
