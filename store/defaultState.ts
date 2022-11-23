const initialNodes = [
  {
    id: "horizontal-1",
    sourcePosition: "right",
    type: "blend",
    data: { mode: { key: "normal", label: "Normal", category: "Default" } },
    position: { x: 0, y: 80 },
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
];

const initialEdges = [
  {
    id: "horizontal-e1-2",
    source: "horizontal-1",
    target: "horizontal-2",
    type: "custom",
  },
];

export { initialNodes, initialEdges };
