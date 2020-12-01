export const romanNumerals = (roman: string) => {
  const arr = [...roman].reverse()
  const convert = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  } as { [key: string]: number }
  let big = 'I'
  let total = 0
  for (let el of arr) {
    if (convert[el] >= convert[big]) {
      total += convert[el]
      big = el
    } else {
      total -= convert[el]
    }
  }

  return total
}
