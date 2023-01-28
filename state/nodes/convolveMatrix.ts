import { Node } from "reactflow"
import { setNodeProp } from "../../lib/setNodeProp"

export const metadata = {
    type: "convolveMatrix",
    title: "Convolve Matrix",
    tagName: "feConvolveMatrix",
    icon: "􀦸",
    mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feConvolveMatrix",
}

export type NodeData = {
    metadata: typeof metadata
    kernelMatrix: number[][]
}

export type NodeState = Node<NodeData> & { selected:boolean }

export type Slice = {
    updateKernalMatrix: (nodeId: string, newKernelMatrix: number[][]) => void
}

export const createSlice = (set) => ({
    convolveMatrixNode: {
        updateKernelMatrix: (nodeId: string, newKernalMatrix: number[][]) =>
            setNodeProp(set, nodeId, "kernelMatrix", newKernalMatrix),
    },
})

export const defaultData: NodeData = {
    metadata: metadata,
    kernelMatrix: [
        [1, 0, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0],
    ],
}
