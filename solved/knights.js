// https://www.codewars.com/kata/549ee8b47111a81214000941/train/javascript

const knight = (s, f) => {
  let min = 6

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

  const move = (position, type) => {
    switch (type) {
      case 0:
        return [position[0] + 2, position[1] - 1]
      case 1:
        return [position[0] + 1, position[1] - 2]
      case 2:
        return [position[0] - 2, position[1] - 1]
      case 3:
        return [position[0] - 1, position[1] - 2]
      case 4:
        return [position[0] + 2, position[1] + 1]
      case 5:
        return [position[0] + 1, position[1] + 2]
      case 6:
        return [position[0] - 2, position[1] + 1]
      case 7:
        return [position[0] - 1, position[1] + 2]
    }
  }

  // recursively check for paths while recording the shortest so far
  const tryMoves = (position, moveType, moveCount) => {
    const newPosition = move(position, moveType)
    if (newPosition[0] <= 0 || newPosition[1] <= 0) {
      return null
    } else {
      const newMoveCount = moveCount + 1
      if (newMoveCount <= min) {
        if (newPosition[0] === finish[0] && newPosition[1] === finish[1]) {
          min = newMoveCount
          return null
        } else {
          for (let i = 0; i < 8; i++) {
            tryMoves(newPosition, i, newMoveCount)
          }
        }
      } else {
        return null
      }
    }
  }

  for (let i = 0; i < 8; i++) {
    tryMoves(start, i, 0)
  }

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
