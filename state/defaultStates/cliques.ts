import { Edge } from "reactflow"
import { Node } from "../store"
import { uuid } from "../../lib/uuid"

const initialNodes = [
  {
    id: "source-3GIuHW8x",
    type: "source",
    position: {
      x: 141.78775201617907,
      y: 134.82838593987302,
    },
    data: {
      source: "SourceGraphic",
    },
    width: 250,
    height: 104,
    selected: false,
    positionAbsolute: {
      x: 141.78775201617907,
      y: 134.82838593987302,
    },
    dragging: false,
  },
  {
    id: "source-jDxqNyUE",
    type: "source",
    position: {
      x: 121.39551955075382,
      y: 471.52238734981046,
    },
    data: {
      source: "SourceGraphic",
    },
    width: 250,
    height: 104,
    selected: true,
    positionAbsolute: {
      x: 121.39551955075382,
      y: 471.52238734981046,
    },
    dragging: false,
  },
  {
    id: "colorMatrix-ocN81gSn",
    type: "colorMatrix",
    position: {
      x: 487.18803827099657,
      y: 207.83857566733013,
    },
    data: {
      type: "matrix",
      values: {
        matrix: [
          [1, 1, 2, 0, 0],
          [0, 1, 0, 1, 0],
          [0, 0, 1, 0, 0],
          [0, 1, 0, 1, 0],
        ],
        saturate: 1,
        hueRotate: 0,
      },
    },
    width: 270,
    height: 187,
    selected: false,
    positionAbsolute: {
      x: 487.18803827099657,
      y: 207.83857566733013,
    },
    dragging: false,
  },
  {
    id: "blend-gu7ziBxU",
    type: "blend",
    position: {
      x: 936.7479468784843,
      y: 341.59193690592167,
    },
    data: {
      mode: "color-burn",
    },
    width: 210,
    height: 104,
    selected: false,
    positionAbsolute: {
      x: 936.7479468784843,
      y: 341.59193690592167,
    },
    dragging: false,
  },
]

const initialEdges = [
  {
    source: "source-3GIuHW8x",
    sourceHandle: "result",
    target: "colorMatrix-ocN81gSn",
    targetHandle: "in1",
    data: {
      source: "SourceGraphic",
    },
    type: "custom",
    id: "reactflow__edge-source-3GIuHW8xresult-colorMatrix-ocN81gSnin1",
  },
  {
    source: "colorMatrix-ocN81gSn",
    sourceHandle: "result",
    target: "blend-gu7ziBxU",
    targetHandle: "in1",
    type: "custom",
    id: "reactflow__edge-colorMatrix-ocN81gSnresult-blend-gu7ziBxUin1",
  },
  {
    source: "source-jDxqNyUE",
    sourceHandle: "result",
    target: "blend-gu7ziBxU",
    targetHandle: "in2",
    data: {
      source: "SourceGraphic",
    },
    type: "custom",
    id: "reactflow__edge-source-jDxqNyUEresult-blend-gu7ziBxUin2",
  },
]

export { initialNodes, initialEdges }
