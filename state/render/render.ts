import { Node, Edge} from "../store"
import * as source from "../nodes/source"
import * as blend from "../nodes/blend"
import * as colorMatrix from "../nodes/colorMatrix"
import * as componentTransfer from "../nodes/componentTransfer"
import * as composite from "../nodes/composite"
import * as convolveMatrix from "../nodes/convolveMatrix"
import { topologicalSort } from "../../lib/topologicalSort"

export const renderers = {
    source: source.render,
    blend: blend.render,
    colorMatrix: colorMatrix.render,
    componentTransfer: componentTransfer.render,
    composite: composite.render,
    convolveMatrix: convolveMatrix.render,
}

function getAncestors(n:string, ejs:Edge[], acc:Set<string> = new Set()) {
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

function getNodeTargets(edges:Edge[], nodeId:string) {
  return edges
      .filter((edge) => edge.target === nodeId)
      .reduce((acc, edge) => {
        console.log(edge)
        if (edge.data?.source) {
          acc[edge.targetHandle] = edge.data.source
        } else {
          acc[edge.targetHandle] = edge.source
        }
        return acc
      }, {})
}


export function render(nodes:Node[], edges:Edge[]) {

  const order = topologicalSort(edges)

  // console.log(order)

  nodes = nodes.map((n) => {
   // insert edge data into node data
    return {
      ...n,
      // order: order.indexOf(n.id),
      data: {
        ...n.data,
        ...getNodeTargets(edges, n.id),
        result: n.id,
      }
    } as Node & {edges: {in: string | null, in2: string | null, result: string}}
  })


  return nodes.map((n) => {

    // get ancestors of given node
    const ancestors = getAncestors(n.id, edges)

    const localSvgFilter = Array
      .from(ancestors)
      .sort((a, b) => order.indexOf(a) - order.indexOf(b))
      .map(ancestor => {

        const ancestorNode = nodes.find((n) => n.id === ancestor)

        const renderer = renderers[ancestorNode.type]

        return renderer ? renderer(ancestorNode) : `<${ancestorNode.type} no-render />`
      })
      .join('\n')


    return {
      ...n,
      data: {
        ...n.data,
        filterText: localSvgFilter,
      }
    }
  })

}
