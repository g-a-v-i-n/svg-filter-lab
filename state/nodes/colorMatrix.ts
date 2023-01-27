import { Node } from "reactflow";

import { updateNodeProp } from "../../lib/updateNodeProp";

export const metadata = {
  type: "colorMatrix",
  title: "Color Matrix",
  tagName: "feColorMatrix",
  icon: "􀮟",
  mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix",
};

export type NodeData = {
  type: string;
  values: number[][];
};

export type NodeState = Node<NodeData>;

export type Slice = {
  updateType: (nodeId: string, type: string) => void;
  updateValues: (nodeId: string, newKernelMatrix: number[][]) => void;
};

export const createSlice = (set) => ({
  colorMatrixNode: {
    updateType: (nodeId: string, newType: string) =>
      updateNodeProp(set, nodeId, "type", newType),
    updateValues: (nodeId: string, newValues: number[][]) =>
      updateNodeProp(set, nodeId, "values", newValues),
  },
});

export const defaultData: NodeData = {
  type: "matrix",
  values: [
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
  ],
};
