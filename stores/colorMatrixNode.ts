import { Node } from "reactflow";
import { State } from "./store";

export const colorMatrixTypes = [
  { label: "Matrix", key: "matrix", category: "custom" },
  { label: "Saturate", key: "saturate", category: "preset" },
  { label: "Hue Rotate", key: "hueRotate", category: "preset" },
  { label: "Luminance to Alpha", key: "luminanceToAlpha", category: "preset" },
];

export type ColorMatrixTypes = typeof colorMatrixTypes;

export type ColorMatrixType = ColorMatrixTypes[number];

export type ColorMatrixNodeData = {
  type: ColorMatrixType;
  values: number[][];
};

export type ColorMatrixNodeState = Node<ColorMatrixNodeData>;

export type ColorMatrixNodeSlice = {
  updateType: (nodeId: string, type: ColorMatrixType) => void;
  updateValues: (nodeId: string, newKernelMatrix: number[][]) => void;
};

export const createColorMatrixNodeSlice = (set) => ({
  colorMatrixNode: {
    updateType: (nodeId: string, newType: ColorMatrixType) => {
      set((state: State) => {
        const index = state.nodes.findIndex((node) => node.id === nodeId);
        state.nodes[index].data.type = newType;
      });
    },
    updateValues: (nodeId: string, newValues: number[][]) => {
      set((state: State) => {
        const index = state.nodes.findIndex((node) => node.id === nodeId);
        state.nodes[index].data.values = newValues;
      });
    },
  },
});
