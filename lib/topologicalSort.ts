import toposort from "toposort";

export function topologicalSort(nodes, edges) {
  const dimunitiveEdges = edges.map((edge) => {
    return [edge.source, edge.target];
  });

  const order = toposort(dimunitiveEdges);

  return order;
}
