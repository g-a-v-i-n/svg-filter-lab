import { Node } from "reactflow"
import { setNodeProp } from "../../lib/setNodeProp"
import { State } from "../../state/store"

export const metadata = {
  type: "colorMatrix",
  title: "Color Matrix",
  tagName: "feColorMatrix",
  icon: "􀮟",
  mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix",
}

// The value is a list of numbers, which is interpreted differently depending on the value of the type attribute:
// For type="matrix", values is a list of 20 matrix values (a00 a01 a02 a03 a04 a10 a11 … a34), separated by whitespace and/or a comma.
// For type="saturate", values is a single real number value (0 to 1).
// For type="hueRotate", values is a single one real number value (degrees).
// For type="luminanceToAlpha", values is not applicable.
export type NodeData = {
  type: string
  matrixValues: number[][]
  saturateValues: number
  hueRotateValues: number
}

export type NodeState = Node<NodeData> & { selected: boolean }

export type Slice = {
  updateType: (id: string, type: string) => void
  updateMatrixValues: (
    id: string,
    i: number,
    j: number,
    newValue: number
  ) => void
  updateSaturateValues: (id: string, newValues: string) => void
  updateHueRotateValues: (id: string, newValues: string) => void
}

export const createSlice = (set) => ({
  colorMatrixNode: {
    updateType: (id: string, newValue: string) => {
      setNodeProp(set, id, "type", newValue)
    },
    updateMatrixValues: (
      id: string,
      i: number,
      j: number,
      newValue: number
    ) => {
      set((state: State) => {
        const index = state.nodes.findIndex((node) => node.id === id)
        state.nodes[index].data.matrixValues[i][j] = newValue
      })
    },
    updateSaturateValues: (id: string, newValue: number) => {
      setNodeProp(set, id, "saturateValues", newValue)
    },
    updateHueRotateValues: (id: string, newValue: number) => {
      setNodeProp(set, id, "hueRotateValues", newValue)
    },
  },
})

export const defaultData: NodeData = {
  type: "matrix",
  matrixValues: [
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
  ],
  saturateValues: 1,
  hueRotateValues: 0,
}
