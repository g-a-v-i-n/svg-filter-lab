import { Node } from "reactflow";
import { updateNodeProp } from "../lib/updateNodeProp";

export type ConvolutionMatrixNodeData = {
  kernelMatrix: number[][];
};

export type ConvolutionMatrixNodeState = Node<ConvolutionMatrixNodeData>;

export type ConvolutionMatrixNodeSlice = {
  updateKernalMatrix: (nodeId: string, newKernelMatrix: number[][]) => void;
};

export const createConvolutionMatrixNodeSlice = (set) => ({
  convolutionMatrixNode: {
    updateKernelMatrix: (nodeId: string, newKernalMatrix: number[][]) => updateNodeProp(set, nodeId, "values", newKernalMatrix),
  },
});
