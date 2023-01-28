import { addProperty } from "../addProperty"

export function componentTransfer(node, targetEdges, sourceEdge) {
  const { id, data } = node
  const { type, values } = data

  const in1 = targetEdges[0]?.source || ""
  const result = sourceEdge.target
  const str = `
        <feComponentTransfer
            in="${in1}"
            type="${type.key}"
            values="${values.join(" ")}"
            result="${result}"
        />`
  return str
}
