function permutations (str) {
  const o = {}
  const arr = []

  str.split('').map((c) => (o[c] ? (o[c] += 1) : (o[c] = 1)))

  const recursion = (obj, s = '') => {
    if (Object.values(obj).filter((v) => v !== 0).length === 0) {
      arr.push(s)
      return null
    }
    for (const c in obj) {
      if (obj[c] > 0) {
        const newObj = { ...obj }
        const newS = s + c
        newObj[c]--
        recursion(newObj, newS)
      }
    }
    return null
  }

  recursion(o)

  return arr
}

console.log(permutations('ab'))
console.log(permutations('aaaaabb'))
