function balancedParens (n) {
  const arr = []

  const writeParens = (s, nOpen, nClosed, next) => {
    s += next
    if (nOpen < nClosed) {
      if (nOpen > 0) {
        writeParens(s, nOpen - 1, nClosed, '(')
      }
      writeParens(s, nOpen, nClosed - 1, ')')
    } else if (nOpen === nClosed && nOpen > 0) {
      writeParens(s, nOpen - 1, nClosed, '(')
    } else {
      return arr.push(s)
    }
  }

  writeParens('', n, n, '')

  return arr
}
