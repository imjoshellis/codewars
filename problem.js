function determinant (m) {
  let d = 0
  console.log(m)
  if (m.length === 1) {
    return m
  } else {
    for (let n in m[0]) {
      n = parseInt(n)
      d +=
        (n % 2 === 0 ? 1 : -1) *
        m[0][n] *
        determinant(
          m.filter((r, i) => i !== 0).map((r) =>
            r.filter((c, i) => {
              return i !== n
            })
          )
        )
    }
  }
  return d
}

const m2 = [[2, 5, 3], [1, -2, -1], [1, 3, 4]]

console.log(determinant([[1, 3], [2, 5]]), 'should be -1')
console.log(determinant(m2), 'should be -20')
