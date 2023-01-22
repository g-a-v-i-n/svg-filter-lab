import { addProperty } from "../addProperty";

export function colorMatrix(node, targetEdges, sourceEdge) {

  const { id, data } = node;
  const { type, values } = data;

  const in1 = targetEdges[0]?.source || '';
  const result = sourceEdge.target;
  const str =  `
        <feColorMatrix
            in="${in1}"
            type="${type.key}"
            values="${values}"
            result="${result}"
        />`;
  return str;
}
