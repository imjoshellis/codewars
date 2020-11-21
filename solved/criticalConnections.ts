// amazon-interview-mock
var criticalConnections = (n: number, connections: number[][]): number[][] => {
  const adjList: { [key: string]: number[] } = {}
  for (let [x, y] of connections) {
    if (!adjList[x]) adjList[x] = []
    adjList[x].push(y)
    if (!adjList[y]) adjList[y] = []
    adjList[y].push(x)
  }

  const criticalEdges: number[][] = []
  const times: { [key: number]: number } = {}
  let time = 0

  const dfs = (vertex: number, parent: number | null) => {
    if (times[vertex] !== undefined) return times[vertex]
    const val = (times[vertex] = time++)
    for (let toVertex of adjList[vertex]) {
      if (toVertex === parent) continue
      const next = dfs(toVertex, vertex)
      if (val < next) criticalEdges.push([vertex, toVertex])
      times[vertex] = Math.min(next, times[vertex])
    }
    return times[vertex]
  }

  dfs(0, null)
  return criticalEdges
}

export { criticalConnections }
