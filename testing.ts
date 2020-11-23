const findMaxConsecutiveOnes = (nums: number[]): number =>
  nums.reduce(reducer, [0, 0])[0]

const reducer = ([max, cur]: number[], n: number): number[] =>
  n === 1 ? [Math.max(max, cur + 1), cur + 1] : [max, 0]
