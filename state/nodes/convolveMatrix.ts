import { Node } from "reactflow";
import { INPUTS, createNodeFnFactory } from '../common';
import { serialize } from '../exporter';
import { Attribute, Matrix, NodeDefinition } from '../../types';

export const definition = {
  meta: {
    nodeType: "convolveMatrix",
    title: "Convolve Matrix",
    tagName: "feConvolveMatrix",
    icon: "􀦸",
    mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feConvolveMatrix",
    inputs: ['in1'],
    outputs: ['result'],
    width: 200,
    attributeOrder: ['kernelMatrix'],
  },
  attributes: {
    kernelMatrix: {
      key: 'kernelMatrix',
      name: 'kernelMatrix',
      title: 'Kernal matrix',
      input: {
        type: 'matrix',
        rows: 3,
        cols: 3,
      },
      defaultValue: [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ],
      serializer: serialize.matrix,
    },
  },
} as NodeDefinition

// Used for creating the data property of a new node
export const createData = createNodeFnFactory(definition)

export type NodeState = Node<NodeData> & { selected: boolean }

// export type Slice = {
//   type: {
//     set: Function
//   }
//   values: {
//     set: Function
//   }
// }
// export type MatrixTypeKey =
//   | UnsetValue
//   | "matrix"
//   | "saturate"
//   | "hueRotate"
//   | "luminanceToAlpha"

// export type NodeData = {
//   in1: string | null
//   type: Value<MatrixTypeKey>
//   values: Value<number[][] | number>
// }

// export type NodeState = Node<NodeData> & { selected: boolean }

// export type Slice = {
//   type: {
//     set: Function
//   }
//   values: {
//     set: Function
//   }
// }

// export const createSlice = (set: Function) => ({
//   colorMatrixNode: {
//     type: {
//       set: createNodePropSetter(set, "type"),
//     },
//     values: {
//       set: createNodeMatrixSetter(set, "values"),
//     }
//   },
// })

// export const defaultData: NodeData = {
//   type: "matrix",
//   in1: null,
//   values: {
//     value: [
//       [1, 0, 0, 0, 0],
//       [0, 1, 0, 0, 0],
//       [0, 0, 1, 0, 0],
//       [0, 0, 0, 1, 0],
//     ],
//     type: 'MATRIX',
//   }
// }

// export function stringify(node: NodeState) {
//   const { id, data } = node
//   const { type, in1, values } = data

//   // The value is a list of numbers, which is interpreted differently depending on the value of the type attribute:
//   let valuesStr = ""

//   // For type="matrix", values is a list of 20 matrix values (a00 a01 a02 a03 a04 a10 a11 … a34), separated by whitespace and/or a comma.
//   if (type === "matrix") {
//     valuesStr = stringifyMatrixProp("values", values.matrix)
//   }

//   // For type="saturate", values is a single real number value (0 to 1).
//   if (type === "saturate") {
//     valuesStr = stringifyProp("values", values.saturate)
//   }

//   // For type="hueRotate", values is a single one real number value (degrees).
//   if (type === "hueRotate") {
//     valuesStr = stringifyProp("values", values.hueRotate)
//   }

//   // For type="luminanceToAlpha", values is not applicable.

//   const str = `<feColorMatrix ${stringifyProp(
//     "type",
//     type
//   )} ${valuesStr} in="${in1}" result="${id}" />`
//   return str
// }

// // if type is undefined, then the input will be disabled
// // if `type` is undefined, and `values` is defined, then the behavior will be to use the `matrix` type, with the given values
// // however, values may not be a valid matrix

// export function parse(node): NodeState['data'] {
//   return {
//     in1: node.attributes.in1,
//     type: parseProp(node.attributes.type),
//     values: parseProp(node.attributes.values),
//   }
// }