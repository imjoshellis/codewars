class User {
  constructor () {
    this.rank = -8
    this.progress = 0
  }

  incProgress = (rank) => {
    if (rank === this.rank) {
      this.addProgress(3)
    } else if (rank === this.rank - 1) {
      this.addProgress(1)
    } else if (rank > this.rank) {
      const d = this.rank - rank
      const points = 10 * d * d
      this.addProgress(points)
    }
  }

  addProgress = (points) => {
    this.progress += points
    while (this.progress > 99) {
      this.progress = this.progress - 100
      this.rankUp()
    }
  }

  rankUp = () => {
    this.rank += 1
    if (this.rank === 0) {
      this.rank = 1
    }
  }
}

const user = new User()
