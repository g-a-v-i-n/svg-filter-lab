import { Node } from "reactflow"
import { UnsetValue } from "../../lib/unset"
import { stringifyProp } from "../stringify/stringifyProp"
import { createNodePropSetter } from "../setters"
import { stringifyMatrixProp } from "../stringify/stringifyMatrixProp"
import { stringifyBooleanProp } from "../stringify/stringifyBooleanProp"

export const metadata = {
  type: "convolveMatrix",
  title: "Convolve Matrix",
  tagName: "feConvolveMatrix",
  icon: "􀦸",
  mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feConvolveMatrix",
  inputs: ['in1'],
  outputs: ['result'],
  width: 200,
}

export type NodeData = {
  in1: string | null
  kernelMatrix: number[][] | UnsetValue
  order: number | UnsetValue
  bias: number | UnsetValue
  divisor: number | UnsetValue
  edgeMode: string | UnsetValue
  // kernelUnitLength: number | UnsetValue // deprecated
  preserveAlpha: boolean | UnsetValue
  targetX: number | UnsetValue
  targetY: number | UnsetValue
}

export type NodeState = Node<NodeData> & { selected: boolean }

export type Slice = {
  kernalMatrix: {
    set: Function
  }
  order: {
    set: Function
  }
  bias: {
    set: Function
  }
  divisor: {
    set: Function
  }
  edgeMode: {
    set: Function
  }
  kernelUnitLength: {
    set: Function
  }
  preserveAlpha: {
    set: Function
  }
  targetX: {
    set: Function
  }
  targetY: {
    set: Function
  }
}

export const createSlice = (set: Function) => ({
  convolveMatrixNode: {
    kernalMatrix: {
      set: createNodePropSetter(set, "kernelMatrix"),
    },
    order: {
      set: createNodePropSetter(set, "order"),
    },
    bias: {
      set: createNodePropSetter(set, "bias"),
    },
    divisor: {
      set: createNodePropSetter(set, "divisor"),
    },
    edgeMode: {
      set: createNodePropSetter(set, "edgeMode"),
    },
    kernelUnitLength: {
      set: createNodePropSetter(set, "kernelUnitLength"),
    },
    preserveAlpha: {
      set: createNodePropSetter(set, "preserveAlpha"),
    },
    targetX: {
      set: createNodePropSetter(set, "targetX"),
    },
    targetY: {
      set: createNodePropSetter(set, "targetY"),
    },
  },
})

export const defaultData: NodeData = {
  in1: null,
  kernelMatrix: [
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
  ],
  order: 3,
  bias: 0,
  divisor: 1, // Sum of all values in kernelMatrix or 1 if sum is 0
  edgeMode: "duplicate",
  // kernelUnitLength: 1, deprecated
  preserveAlpha: false,
  targetX: 0, // floor(orderX / 2)
  targetY: 0, // floor(orderY / 2)
}

// if the value value in state === null
// in the renderer, do not add the attribute
// in the node component, use a HTML `placeholder` instead of value
export function stringify(node: NodeState) {
  const { id, data } = node
  const {
    in1,
    kernelMatrix,
    order,
    bias,
    divisor,
    edgeMode,
    preserveAlpha,
    targetX,
    targetY,
  } = data

  const str = `<feConvolveMatrix in="${in1}" ${stringifyMatrixProp(
    "kernelMatrix",
    kernelMatrix
  )} ${stringifyProp("order", order)} ${stringifyProp(
    "bias",
    bias
  )} ${stringifyProp("divisor", divisor)} ${stringifyProp(
    "edgeMode",
    edgeMode
  )} ${stringifyBooleanProp("preserveAlpha", preserveAlpha)} ${stringifyProp(
    "targetX",
    targetX
  )} ${stringifyProp("targetY", targetY)} result="${id}" />`
  return str
}

export function parse(node):NodeState {
  return {
    ...node.attributes
  }
}