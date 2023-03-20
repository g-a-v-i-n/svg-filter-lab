import { Edge } from "reactflow"
import { Node } from "../store"
import { uuid } from "../../lib/uuid"

const initialNodes = [
 
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
    selected: false,
    positionAbsolute: {
      x: 936.7479468784843,
      y: 341.59193690592167,
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
]

const initialEdges = [
  
]

export { initialNodes, initialEdges }
