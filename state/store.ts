import { create } from "zustand"
import { temporal } from 'zundo';
import { immer } from "zustand/middleware/immer"
import { persist, createJSONStorage } from "zustand/middleware"

import {
  Edge as RFEdge,
} from "reactflow"

import nodes from './nodes/index'

import { createSidebarSlice } from "./panels/sidebar"
import { createNodeSlice } from "./common"
import { createXyFlowSlice } from "./xyFlow"

export type Edge = RFEdge

export type Node =
  | source.NodeState
  | blend.NodeState
  | colorMatrix.NodeState
  | componentTransfer.NodeState
  | composite.NodeState
  | convolveMatrix.NodeState
  | gaussianBlur.NodeState
  | offset.NodeState
  | specularLighting.NodeState
  | turbulence.NodeState

export type Nodes = Node[]
export type Edges = Edge[]

// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useStore = create<any>()(
  temporal(
    immer((set) => ({
      // React Flow / xyFlow
      ...createXyFlowSlice(set),

      // Panel slices
      ...createSidebarSlice(set),

      // Node slices
      ...Object.values(nodes).reduce((acc, node) => {
        return {
          ...acc,
          ...createNodeSlice(set, node.definition),
        }
      }, {}),
    }))
  )
)

export default useStore;