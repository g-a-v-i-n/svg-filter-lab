import { uuid } from "../lib/uuid";

const initialNodes = [
  {
    id: "horizontal-1",
    selected: true,
    sourcePosition: "right",
    type: "blend",
    data: { mode: { key: "normal", label: "Normal", category: "Default" } },
    position: { x: 0, y: 0 },
  },
  {
    id: "horizontal-2",
    selected: false,
    type: "colorMatrix",
    sourcePosition: "right",
    targetPosition: "left",
    data: {
      type: { label: "Matrix", key: "matrix" },
      values: [
        [1, 0, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0],
      ],
    },
    position: { x: 250, y: 0 },
  },
  {
    id: "horizontal-3",
    selected: false,
    sourcePosition: "right",
    targetPosition: "left",
    type: "componentTransfer",
    data: {
      red: {
        isOn: true,
        type: { label: "Identity", key: "identity" },
        amplitude: 1,
        exponent: 1,
        offset: 0,
        slope: 0,
        intercept: 0,
        tableValues: [
          [1, 0, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 1, 0],
          [0, 0, 0, 1],
        ],
      },
      green: {
        isOn: true,
        type: { label: "Identity", key: "identity" },
        amplitude: 1,
        exponent: 1,
        offset: 0,
        slope: 0,
        intercept: 0,
        tableValues: [
          [1, 0, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 1, 0],
          [0, 0, 0, 1],
        ],
      },
      blue: {
        isOn: true,
        type: { label: "Identity", key: "identity" },
        amplitude: 1,
        exponent: 1,
        offset: 0,
        slope: 0,
        intercept: 0,
        tableValues: [
          [1, 0, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 1, 0],
          [0, 0, 0, 1],
        ],
      },
      alpha: {
        isOn: false,
        type: { label: "Identity", key: "identity" },
        amplitude: 1,
        exponent: 1,
        offset: 0,
        slope: 0,
        intercept: 0,
        tableValues: [
          [1, 0, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 1, 0],
          [0, 0, 0, 1],
        ],
      },
    },
    position: { x: 590, y: 0 },
  },
  {
    id: "horizontal-4",
    selected: false,
    sourcePosition: "right",
    type: "composite",
    data: {
      operator: { key: "over", label: "Over", category: "Default" },
      k1: 0,
      k2: 0,
      k3: 0,
      k4: 0,
    },
    position: { x: 860, y: 0 },
  },
  {
    id: "horizontal-5",
    selected: false,
    sourcePosition: "right",
    type: "convolutionMatrix",
    data: {
      kernelMatrix: [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ],
    },
    position: { x: 1080, y: 0 },
  },
];

const initialEdges = [
  {
    id: "horizontal-e1-2",
    source: "horizontal-1",
    sourceHandle: 'result',
    target: "horizontal-2",
    targetHandle: 'in1',
    type: "custom",
  },
  {
    id: "horizontal-e2-3",
    source: "horizontal-2",
    sourceHandle: 'result',
    target: "horizontal-3",
    targetHandle: 'in1',
    type: "custom",
  },
];

export { initialNodes, initialEdges };
