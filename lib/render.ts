import toposort from "toposort"
import * as renderers from "./renderers/index"

export function render(nodes, edges) {
  // toposort expects an array of arrays where
  const edgesAsKeys = edges.map((edge) => {
    return [edge.source, edge.target]
  })

  const order = toposort(edgesAsKeys)

  const nodesInTopoOrder = order.map((nodeId) => {
    const node = nodes.find((node) => node.id === nodeId)
    return node
  })

  const filterElementStrs = nodesInTopoOrder.map((node) => {
    // Target edges will either === 1 or === 2. Some SVG filter tags have a single 'in' attribute, others have 2.
    // The ones with 2 targets (or inputs) are the following:
    // feBlend
    // feComposite
    // feDisplacementMap
    const targetEdges = edges.filter((edge) => edge.target === node.id)

    // Source edges will always === 1. Every SVG filter tag has a single 'result' attribute.
    const sourceEdge = edges.filter((edge) => edge.source === node.id)[0]

    const nodeRenderer = renderers[node.type]

    if (typeof nodeRenderer === "function") {
      const elementStr = nodeRenderer(node, targetEdges, sourceEdge)
      return elementStr
    }
    return ""
  })

  const filterStr = `
    <filter id="filter">
      ${filterElementStrs.join("\n")}
    </filter>
  `
  return filterStr
}
