// Package clonegraph solves X problem from Y
// URL: https://leetcode.com/problems/clone-graph/
package clonegraph

type Node struct {
	Val       int
	Neighbors []*Node
}

func dfs(node *Node, m map[*Node]*Node) *Node {
	if node == nil {
		return nil
	}
	if n, ok := m[node]; ok {
		return n
	}
	m[node] = &Node{
		Val:       node.Val,
		Neighbors: []*Node{},
	}
	for _, nn := range node.Neighbors {
		m[node].Neighbors = append(m[node].Neighbors, dfs(nn, m))
	}
	return m[node]
}

func cloneGraph(node *Node) *Node {
	return dfs(node, make(map[*Node]*Node))
}
