import { Node } from "reactflow"
import { createNodeMatrixSetter, createNodePropSetter } from "../setters"
import { UNSET, UnsetValue } from "../../lib/unset"
import { stringifyProp } from "../stringify/stringifyProp"
import { stringifyMatrixProp } from "../stringify/stringifyMatrixProp"

export const metadata = {
  type: "colorMatrix",
  title: "Color Matrix",
  tagName: "feColorMatrix",
  icon: "􀮟",
  mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix",
  inputs: ['in1'],
  outputs: ['result'],
  width: 200,
}

export type MatrixTypeKey =
  | UnsetValue
  | "matrix"
  | "saturate"
  | "hueRotate"
  | "luminanceToAlpha"

export type NodeData = {
  in1: string | null
  type: MatrixTypeKey
  values: {
    matrix: number[][] | UnsetValue
    saturate: number | UnsetValue
    hueRotate: number | UnsetValue
  }
}

export type NodeState = Node<NodeData> & { selected: boolean }

export type Slice = {
  type: {
    set: Function
  }
  values: {
    matrix: {
      set: Function
    }
    saturate: {
      set: Function
    }
    hueRotate: {
      set: Function
    }
  }
}

export const createSlice = (set: Function) => ({
  colorMatrixNode: {
    type: {
      set: createNodePropSetter(set, "type"),
    },
    values: {
      matrix: {
        set: createNodeMatrixSetter(set, "values.matrix"),
      },
      saturate: {
        set: createNodePropSetter(set, "values.saturate"),
      },
      hueRotate: {
        set: createNodePropSetter(set, "values.hueRotate"),
      },
    },
  },
})

export const defaultData: NodeData = {
  type: "matrix",
  in1: null,
  values: {
    matrix: [
      [1, 0, 0, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0],
    ],
    saturate: 0,
    hueRotate: 0,
  },
}

export function stringify(node: NodeState) {
  const { id, data } = node
  const { type, in1, values } = data

  // The value is a list of numbers, which is interpreted differently depending on the value of the type attribute:
  let valuesStr = ""

  // For type="matrix", values is a list of 20 matrix values (a00 a01 a02 a03 a04 a10 a11 … a34), separated by whitespace and/or a comma.
  if (type === "matrix") {
    valuesStr = stringifyMatrixProp("values", values.matrix)
  }

  // For type="saturate", values is a single real number value (0 to 1).
  if (type === "saturate") {
    valuesStr = stringifyProp("values", values.saturate)
  }

  // For type="hueRotate", values is a single one real number value (degrees).
  if (type === "hueRotate") {
    valuesStr = stringifyProp("values", values.hueRotate)
  }

  // For type="luminanceToAlpha", values is not applicable.

  const str = `<feColorMatrix ${stringifyProp(
    "type",
    type
  )} ${valuesStr} in="${in1}" result="${id}" />`
  return str
}

export function parse(node):NodeState {
  return {
    ...node.attributes
  }
}