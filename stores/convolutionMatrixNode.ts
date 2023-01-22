import { Node } from "reactflow";
import { State } from "./store";

export type ConvolutionMatrixNodeData = {
  kernelMatrix: number[][];
};

export type ConvolutionMatrixNodeState = Node<ConvolutionMatrixNodeData>;

export type ConvolutionMatrixNodeSlice = {
  updateKernalMatrix: (nodeId: string, newKernelMatrix: number[][]) => void;
};

export const createConvolutionMatrixNodeSlice = (set) => ({
  convolutionMatrixNode: {
    updateKernelMatrix: (nodeId: string, newKernelMatrix: number[][]) => {
      set((state: State) => {
        const index = state.nodes.findIndex((node) => node.id === nodeId);
        state.nodes[index].data.kernelMatrix = newKernelMatrix;
      });
    },
  },
});
