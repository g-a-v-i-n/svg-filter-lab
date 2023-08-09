import { create } from "zustand"
import { temporal } from 'zundo';
import { immer } from "zustand/middleware/immer"
import { persist, createJSONStorage } from "zustand/middleware"

import {
  Edge as RFEdge,
  ReactFlowInstance,
} from "reactflow"

// import * as source from "./nodes/source"
// import * as blend from "./nodes/blend"
// import * as composite from "./nodes/composite"
// import * as colorMatrix from "./nodes/colorMatrix"
// import * as componentTransfer from "./nodes/componentTransfer"
// import * as convolveMatrix from "./nodes/convolveMatrix"
// import * as gaussianBlur from "./nodes/gaussianBlur"
// import * as offset from "./nodes/offset"
// import * as specularLighting from "./nodes/specularLighting"
// import * as turbulence from "./nodes/turbulence"

import nodes from './nodes/index'

import { createSidebarSlice } from "./panels/sidebar"
import { createNodeSlice } from "./common"
import { createXyFlowSlice } from "./xyFlow"
// import { parse } from "./parse/parse"

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

// export type State = {
//   rfInstance: ReactFlowInstance | null
//   setReactFlowInstance: (instance: ReactFlowInstance<any, any>) => void

//   nodes: Nodes | []
//   edges: Edges | []

//   setEdge: Function

//   onNodeSelect: (node: Node) => void

//   filterText: string

//   // RF Events
//   onNodesChange: Function
//   onEdgesChange: Function
//   onConnect: Function

//   // Actions
//   deleteNode: (nodeId: string) => void

//   // Panels
//   onDragOver: OnDragOver
//   onDrop: OnDrop

//   // Node-specific updaters
//   sourceNode: source.Slice
//   blendNode: createSlice(blend.definition)
//   colorMatrixNode: colorMatrix.Slice
//   componentTransferNode: componentTransfer.Slice
//   compositeNode: composite.Slice
//   convolveMatrixNode: convolveMatrix.Slice
//   gaussianBlurNode: gaussianBlur.Slice
//   offsetNode: offset.Slice
//   specularLightingNode: specularLighting.Slice
//   turbulenceNode: turbulence.Slice
// }

// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useStore = create<any>()(
  temporal(
    immer((set) => ({
      ...createXyFlowSlice(set),

      // parse: (filter: string) => {
      //   set((state: State) => {
      //     const { nodes, edges } = parse(filter)
      //     state.nodes = nodes
      //     state.edges = edges
      //   })
      // },

      // Panel slices
      ...createSidebarSlice(set),

      // Node-specific slices
      // ...source.createSlice(set),
      ...createNodeSlice(set, nodes.blend.definition),
      ...createNodeSlice(set, nodes.colorMatrix.definition),

      // ...componentTransfer.createSlice(set),
      // ...composite.createSlice(set),
      // ...convolveMatrix.createSlice(set),
      // ...gaussianBlur.createSlice(set),
      // ...offset.createSlice(set),
      // ...specularLighting.createSlice(set),
      // ...turbulence.createSlice(set),
    }))
  )
)

export default useStore

// export const defaultNodeData = {
//   source: source.defaultData,
//   blend: blend.defaultData,
//   colorMatrix: colorMatrix.defaultData,
//   componentTransfer: componentTransfer.defaultData,
//   composite: composite.defaultData,
//   convolveMatrix: convolveMatrix.defaultData,
// }

// export const nodeMetadata = [
//   source.metadata,
//   blend.metadata,
//   colorMatrix.metadata,
//   componentTransfer.metadata,
//   composite.metadata,
//   convolveMatrix.metadata,
// ]
