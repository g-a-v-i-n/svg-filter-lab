import { Node } from "reactflow";
import { updateNodeProp } from "../../lib/updateNodeProp";

export const metadata = {
  type: "convolveMatrix",
  title: "Convolve Matrix",
  tagName: "feConvolveMatrix",
  icon: "􀦸",
  mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feConvolveMatrix",
};

export type NodeData = {
  metadata: typeof metadata;
  kernelMatrix: number[][];
};

export type NodeState = Node<NodeData>;

export type Slice = {
  updateKernalMatrix: (nodeId: string, newKernelMatrix: number[][]) => void;
};

export const createSlice = (set) => ({
  convolveMatrixNode: {
    updateKernelMatrix: (nodeId: string, newKernalMatrix: number[][]) =>
      updateNodeProp(set, nodeId, "kernelMatrix", newKernalMatrix),
  },
});

export const defaultData: NodeData = {
  metadata: metadata,
  kernelMatrix: [
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
  ],
};
