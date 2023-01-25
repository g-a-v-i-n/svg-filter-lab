import { Node } from "reactflow";
import { updateNodeProp } from "../lib/updateNodeProp";

export const colorMatrixTypes = [
  { label: "Matrix", key: "matrix", category: "custom" },
  { label: "Saturate", key: "saturate", category: "preset" },
  { label: "Hue Rotate", key: "hueRotate", category: "preset" },
  { label: "Luminance to Alpha", key: "luminanceToAlpha", category: "preset" },
];

export const colorMatrixTypesByCategory = [
  {
    "category": "custom",
    "items": [
      {
        "key": "matrix",
        "label": "Matrix"
      }
    ]
  },
  {
    "category": "preset",
    "items": [
      {
        "key": "saturate",
        "label": "Saturate"
      },
      {
        "key": "hueRotate",
        "label": "Hue Rotate"
      },
      {
        "key": "luminanceToAlpha",
        "label": "Luminance to Alpha"
      }
    ]
  }
]

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
    updateType: (nodeId: string, newType: ColorMatrixType) => updateNodeProp(set, nodeId, "type", newType),
    updateValues: (nodeId: string, newValues: number[][]) => updateNodeProp(set, nodeId, "values", newValues),
  },
});

export const defaultColorMatrixNodeData: ColorMatrixNodeData = {
  type: colorMatrixTypes[0],
  values: [
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
  ],
};