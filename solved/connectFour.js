class Connect4 {
  constructor () {
    this.grid = [[], [], [], [], [], [], []]
    this.player = 1
  }

  fullCol (col) {
    if (this.grid[col].length === 6) {
      return true
    } else {
      return false
    }
  }

  drop (col) {
    this.grid[col].push(this.player)
  }

  winner () {
    console.log(this.grid)
    for (let col in this.grid) {
      if (this.grid[col].length > 0) {
        for (let row in this.grid[col]) {
          let a, b, c, d
          col = parseInt(col)
          row = parseInt(row)

          // check columns
          a = this.grid[col][row] ? this.grid[col][row] : null
          b = this.grid[col][row + 1] ? this.grid[col][row + 1] : null
          c = this.grid[col][row + 2] ? this.grid[col][row + 2] : null
          d = this.grid[col][row + 3] ? this.grid[col][row + 3] : null

          if (a && b && c && d) {
            if (a === b && b === c && c === d) {
              return true
            }
          }

          // check rows
          a = this.grid[col][row] ? this.grid[col][row] : null
          b = this.grid[row + 1]
            ? this.grid[row + 1][row] ? this.grid[col + 1][row] : null
            : null
          c = this.grid[col + 2]
            ? this.grid[col + 2][row] ? this.grid[col + 2][row] : null
            : null
          d = this.grid[col + 3]
            ? this.grid[col + 3][row] ? this.grid[col + 3][row] : null
            : null

          if (a && b && c && d) {
            if (a === b && b === c && c === d) {
              return true
            }
          }

          // check up-right
          a = this.grid[col][row] ? this.grid[col][row] : null
          b = this.grid[col + 1]
            ? this.grid[col + 1][row + 1] ? this.grid[col + 1][row + 1] : null
            : null
          c = this.grid[col + 2]
            ? this.grid[col + 2][row + 2] ? this.grid[col + 2][row + 2] : null
            : null
          d = this.grid[col + 3]
            ? this.grid[col + 3][row + 3] ? this.grid[col + 3][row + 3] : null
            : null

          if (a && b && c && d) {
            if (a === b && b === c && c === d) {
              return true
            }
          }

          // check down-right
          a = this.grid[col][row] ? this.grid[col][row] : null
          b = this.grid[col + 1]
            ? this.grid[col + 1][row - 1] ? this.grid[col + 1][row - 1] : null
            : null
          c = this.grid[col + 2]
            ? this.grid[col + 2][row - 2] ? this.grid[col + 2][row - 2] : null
            : null
          d = this.grid[col + 3]
            ? this.grid[col + 3][row - 3] ? this.grid[col + 3][row - 3] : null
            : null

          if (a && b && c && d) {
            if (a === b && b === c && c === d) {
              return true
            }
          }
        }
      }
    }
  }
}

Connect4.prototype.play = function (col) {
  // Code Here
  if (this.finished) {
    return 'Game has finished!'
  }
  if (this.fullCol(col)) {
    return 'Column full!'
  }

  this.drop(col)

  if (this.winner()) {
    this.finished = true
    return `Player ${this.player} wins!`
  }

  const ret = `Player ${this.player} has a turn`
  this.player = this.player === 1 ? 2 : 1
  return ret
}

Connect4.prototype.play = function (col) {
  if (this.finished) {
    console.log('finished')
    return 'Game is finished!'
  }

  if (this.fullCol(col)) {
    console.log('full')
    return 'Column full!'
  }

  this.drop(col)

  if (this.winner()) {
    this.finished = true
    console.log('win')
    return `Player ${this.player} wins!`
  }

  const ret = `Player ${this.player} has a turn`
  this.player = this.player === 1 ? 2 : 1
  console.log(ret)
  return ret
}

const sampleTest = () => {
  let game = new Connect4()
  game.play(0)
  game.play(0)

  game = new Connect4()
  game.play(0)
  game.play(1)
  game.play(0)
  game.play(1)
  game.play(0)
  game.play(1)
  game.play(0)

  game = new Connect4()
  game.play(4)
  game.play(4)
  game.play(4)
  game.play(4)
  game.play(4)
  game.play(4)
  game.play(4)

  game = new Connect4()
  game.play(1)
  game.play(1)
  game.play(2)
  game.play(2)
  game.play(3)
  game.play(3)
  game.play(4)
  game.play(4)
}

sampleTest()
