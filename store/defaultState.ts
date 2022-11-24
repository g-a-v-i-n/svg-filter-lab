const initialNodes = [
  {
    id: "horizontal-1",
    sourcePosition: "right",
    type: "blend",
    data: { mode: { key: "normal", label: "Normal", category: "Default" } },
    position: { x: 0, y: 0 },
  },
  {
    id: "horizontal-2",
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
    position: { x: 550, y: 0 },
  },
  {
    id: "horizontal-4",
    sourcePosition: "right",
    type: "composite",
    data: {
      operator: { key: "over", label: "Over", category: "Default" },
      k1: 0,
      k2: 0,
      k3: 0,
      k4: 0,
    },
    position: { x: 760, y: 0 },
  },
  {
    id: "horizontal-5",
    sourcePosition: "right",
    type: "convolutionMatrix",
    data: {
      kernelMatrix: [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ],
    },
    position: { x: 980, y: 0 },
  },
];

const initialEdges = [
  {
    id: "horizontal-e1-2",
    source: "horizontal-1",
    target: "horizontal-2",
    type: "custom",
  },
  {
    id: "horizontal-e2-3",
    source: "horizontal-2",
    target: "horizontal-3",
    type: "custom",
  },
];

export { initialNodes, initialEdges };
