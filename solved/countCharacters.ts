// amazon-interview-mock
const countCharacters = (words: string[], chars: string): any => {
  return words
    .map(w => {
      const copy = [...chars]
      for (let char of w) {
        const i = copy.findIndex(c => c === char)
        if (i === -1) return false
        copy[i] = ''
      }
      return w
    })
    .filter(w => w)
    .join('').length
}

export { countCharacters }
