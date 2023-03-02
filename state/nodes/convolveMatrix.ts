import { Node } from "reactflow"
import { matrixToString } from "../../lib/matrixToString"
import { UnsetValue } from "../../lib/unset"
import { createNodePropSetter } from "../setters"

export const metadata = {
  type: "convolveMatrix",
  title: "Convolve Matrix",
  tagName: "feConvolveMatrix",
  icon: "􀦸",
  mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feConvolveMatrix",
}

export type NodeData = {
  kernelMatrix: number[][] | UnsetValue
  order: number | UnsetValue
  bias: number | UnsetValue
  divisor: number | UnsetValue
  edgeMode: string | UnsetValue
  kernelUnitLength: number | UnsetValue
  preserveAlpha: boolean | UnsetValue
  targetX: number | UnsetValue
  targetY: number | UnsetValue
}

export type NodeState = Node<NodeData> & { selected: boolean }

export type Slice = {
  kernalMatrix:{
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

export const createSlice = (set:Function) => ({
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
    }
  },
})

export const defaultData: NodeData = {
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

export const defaultState = {
  kernelMatrix: null,
  order: null,
  bias: null,
  divisor: null, // Sum of all values in kernelMatrix or 1 if sum is 0
  edgeMode: null,
  // kernelUnitLength: 1, deprecated
  preserveAlpha: null,
  targetX: null, // floor(orderX / 2)
  targetY: null, // floor(orderY / 2)
}

export const placeholders = {
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


export function render(node:NodeState) {
  const { id, data } = node
  const { kernelMatrix, in1, result } = data

  const str = `<feConvolveMatrix id="${id}" kernelMatrix="${matrixToString(kernelMatrix)}" in="${in1}" result="${result}" />`
  return str
}