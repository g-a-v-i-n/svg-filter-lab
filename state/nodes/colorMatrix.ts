import { Node } from "reactflow"
import { createNodeMatrixSetter, createNodePropSetter } from "../setters"
import { matrixToString } from "../../lib/matrixToString"
import { UnsetValue } from "../../lib/unset"

export const metadata = {
  type: "colorMatrix",
  title: "Color Matrix",
  tagName: "feColorMatrix",
  icon: "􀮟",
  mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix",
}

export type MatrixTypeKey = UnsetValue | "matrix" | "saturate" | "hueRotate" | "luminanceToAlpha"

export type NodeData = {
  in1: string | null,
  result: string | null,
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
    set: Function,
  }
  values: {
    matrix: {
      set: Function,
    }
    saturate: {
      set: Function,
    }
    hueRotate: {
      set: Function,
    }
  }
}

export const createSlice = (set:Function) => ({
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
      }
    }
  },
})

export const defaultData: NodeData = {
  type: "matrix",
  values: {
    matrix: [
      [1, 0, 0, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0],
    ],
    saturate: 0,
    hueRotate: 0,
  }
}

export function render(node:NodeState) {
  const { id, data } = node
  const { type, in1, result } = data

  // The value is a list of numbers, which is interpreted differently depending on the value of the type attribute:
  let valuesStr = ""

  // For type="matrix", values is a list of 20 matrix values (a00 a01 a02 a03 a04 a10 a11 … a34), separated by whitespace and/or a comma.
  if (type === "matrix") {
    const values = matrixToString(data.values.matrix)
    valuesStr = `values="${values}"`
  }

  // For type="saturate", values is a single real number value (0 to 1).
  if (type === "saturate") {
    const values = data.values.saturate
    valuesStr = `values="${values}"`
  }
  // For type="hueRotate", values is a single one real number value (degrees).
  if (type === "hueRotate") {
    const values = data.values.hueRotate
    valuesStr = `values="${values}"`
  }

  // For type="luminanceToAlpha", values is not applicable.

  const str = `<feColorMatrix id="${id}" in="${in1}" type="${type}" ${valuesStr} result="${result}" />`
  return str
}

export function importer(attributes):NodeState {
  const valuesKey = attributes.type === "hueRotate"
    ? "hueRotateValues"
    : attributes.type === "saturate"
    ? "saturateValues"  
    : "matrixValues"

  return {
    ...defaultData,
    ...attributes,
    [valuesKey]: attributes.values,
  }
}