import { Node, Edge } from "../store"
import * as source from "../nodes/source"
import * as blend from "../nodes/blend"
import * as colorMatrix from "../nodes/colorMatrix"
import * as componentTransfer from "../nodes/componentTransfer"
import * as composite from "../nodes/composite"
import * as convolveMatrix from "../nodes/convolveMatrix"
import { topologicalSort } from "../../lib/topologicalSort"

export const stringifiers = {
  source: source.stringify,
  blend: blend.stringify,
  colorMatrix: colorMatrix.stringify,
  componentTransfer: componentTransfer.stringify,
  composite: composite.stringify,
  convolveMatrix: convolveMatrix.stringify,
}

function getAncestors(n: string, ejs: Edge[], acc: Set<string> = new Set()) {
  // add node to acc
  acc.add(n)

  // get inbound edges of node
  const inbound = ejs.filter((e) => e.target === n)

  // for each inbound edge, create a new set with all the previous ancestors, plus the new ancestors returned by the recursive call
  for (const edge of inbound) {
    acc = new Set([...acc, ...getAncestors(edge.source, ejs, acc)])
  }

  // return the set of ancestors
  return acc
}

export function stringify(nodes: Node[], edges: Edge[]) {
  const order = topologicalSort(edges)

  // console.log(order)

  // nodes = nodes.map((n) => {
  //  // insert edge data into node data
  //   return {
  //     ...n,
  //     // order: order.indexOf(n.id),
  //     data: {
  //       ...n.data,
  //       ...getNodeTargets(edges, n.id),
  //       result: n.id,
  //     }
  //   } as Node & {edges: {in: string | null, in2: string | null, result: string}}
  // })

  return nodes.map((n) => {
    // get ancestors of given node
    const ancestors = getAncestors(n.id, edges)

    const localSvgFilter = Array.from(ancestors)
      .sort((a, b) => order.indexOf(a) - order.indexOf(b))
      .map((ancestor) => {
        const ancestorNode = nodes.find((n) => n.id === ancestor)

        const renderer = stringifiers[ancestorNode.type]

        return renderer
          ? renderer(ancestorNode)
          : `<${ancestorNode.type} no-render />`
      })
      .join("\n")

    return {
      ...n,
      data: {
        ...n.data,
        filterText: localSvgFilter,
      },
    }
  })
}
