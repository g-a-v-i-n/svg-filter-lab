import { addProperty } from "../addProperty";

export function blend(node, targetEdges, sourceEdge) {

  console.log('renderBlendNode: ', node, targetEdges, sourceEdge)




  const { id, data } = node;
  const { mode } = data;

  const in1 = targetEdges[0]?.source || '';
  const in2 = targetEdges[1]?.source || '';
  const result = sourceEdge.target;
  const str = `
        <feBlend
            mode="${mode.key}"
            in="${in1}"
            in2="${in2}"
            result="${result}"
        />`;
  return str;
}
