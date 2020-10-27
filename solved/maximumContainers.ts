export const maximumContainers = (scenarios: string[]): void => {
  const calculateContainers = (
    money: number,
    cost: number,
    rate: number
  ): number => {
    let current = 0,
      total = 0

    while (money >= cost) {
      money -= cost
      total++
      current++
    }

    while (current >= rate) {
      current -= rate
      current++
      total++
    }

    return total
  }

  for (let el of scenarios) {
    const [money, cost, rate] = el.split(' ').map(i => parseInt(i))
    console.log(calculateContainers(money, cost, rate))
  }
}
