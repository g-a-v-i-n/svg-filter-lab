import { addProperty } from "../addProperty";
import { matrixToString } from "../matrixToString";

export function colorMatrix(node, targetEdges, sourceEdge) {
  const { id, data } = node;

  const in1 = targetEdges[0]?.source || '';
  const result = sourceEdge.target;

  const type = data.type.key

  let valuesStr = ''

  if (type === 'matrix') {
    const values = matrixToString(data.values)
    valuesStr = `values="${values}"`
  }

  const str = `
        <feColorMatrix
            id="${id}"
            in="${in1}"
            type="${type}"
            ${valuesStr}
            result="${result}"
        />`;
  return str;
}