// https://leetcode.com/explore/learn/card/array-and-string/202/introduction-to-2d-array/1170/
const pascalTriangle = (numRows: number): number[][] => {
  const tri = [] as number[][]
  while (numRows--) {
    tri.unshift(Array(tri.length + 1).fill(1))
    for (let j = 1; j < tri.length - 1; j++)
      tri[0][j] = tri[1][j - 1] + tri[1][j]
  }
  return tri.reverse()
}

export { pascalTriangle }
