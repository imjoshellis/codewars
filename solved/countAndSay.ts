export const countAndSay = (n: number): string => {
  if (n === 1) return '1'

  const arr = [...countAndSay(n - 1)]
  const ret = [] as string[]
  let counter = 0
  let prev = ''
  for (let el of arr) {
    if (el === prev) {
      counter++
    } else {
      if (counter) ret.push(counter.toString() + prev)
      counter = 1
      prev = el
    }
  }

  ret.push(counter.toString() + prev)

  return ret.join('')
}
