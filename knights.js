// https://www.codewars.com/kata/549ee8b47111a81214000941/train/javascript

const knight = (s, f) => {
  let min = 6
  min = 2
  // convert start and finish to coordinates
  const start = s.split('')
  const finish = f.split('')

  const numLookup = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8
  }

  const convertToNum = letter => numLookup[letter]

  start[0] = convertToNum(start[0])
  finish[0] = convertToNum(finish[0])

  start[1] = Number(start[1])
  finish[1] = Number(finish[1])

  const move = (direction, position) => {
    switch (direction) {
      case 'NNW':
        return [position[0] + 3, position[1] - 2]
      case 'NWW':
        return [position[0] + 2, position[1] - 3]
      case 'SSW':
        return [position[0] - 3, position[1] - 2]
      case 'SWW':
        return [position[0] - 2, position[1] - 3]
      case 'NNE':
        return [position[0] + 3, position[1] + 2]
      case 'NEE':
        return [position[0] + 2, position[1] + 3]
      case 'SSE':
        return [position[0] - 3, position[1] + 2]
      case 'SEE':
        return [position[0] - 2, position[1] + 3]
    }
  }

  console.log(start, finish, move('NNW', start))
  // recursively check for paths while recording the shortest so far
  return min
}

const testArr = [
  ['a1', 'c1', 2],
  ['a1', 'f1', 3],
  ['a1', 'f3', 3],
  ['a1', 'f4', 4],
  ['a1', 'f7', 5]
]

for (const i of testArr) {
  console.log(
    `Input: (${i[0]}, ${i[1]})`,
    `Result: ${knight(i[0], i[1])}`,
    `Expected: ${i[2]}`
  )
}
