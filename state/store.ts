import {create} from "zustand"
import { immer } from "zustand/middleware/immer"
import {
  Connection,
  Edge,
  EdgeChange,
  NodeChange,
  addEdge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  applyNodeChanges,
  applyEdgeChanges,
  ReactFlowInstance,
  getConnectedEdges,
} from "reactflow"



import { initialNodes, initialEdges } from "./defaultStates/cliques"

import * as source from "./nodes/source"
import * as blend from "./nodes/blend"
import * as composite from "./nodes/composite"
import * as colorMatrix from "./nodes/colorMatrix"
import * as componentTransfer from "./nodes/componentTransfer"
import * as convolveMatrix from "./nodes/convolveMatrix"

import { render } from "./render/render"
import { uuid } from "../lib/uuid"
import { createDragAndDropSlice, OnDragOver,
  OnDrop } from "./panels/dragAndDrog"

export type Edge = Edge

export type Node = (
  source.NodeState
  | blend.NodeState
  | colorMatrix.NodeState
  | componentTransfer.NodeState
  | composite.NodeState
  | convolveMatrix.NodeState
)

export type Nodes = Node[]
export type Edges = Edge[]

export type State = {
  rfInstance: ReactFlowInstance | null
  setReactFlowInstance: (instance: ReactFlowInstance<any, any>) => void

  nodes: Nodes | []
  edges: Edges | []

  onNodeSelect: (node: Node) => void

  filterText: string

  // RF Events
  onNodesChange: (changes: NodeChange[]) => void
  onEdgesChange: (changes: EdgeChange[]) => void
  onConnect: OnConnect

  // Actions
  deleteNode: (nodeId: string) => void

  // Panels
  onDragOver: OnDragOver
  onDrop: OnDrop

  // Node-specific updaters
  sourceNode: source.Slice
  blendNode: blend.Slice
  colorMatrixNode: colorMatrix.Slice
  componentTransferNode: componentTransfer.Slice
  compositeNode: composite.Slice
  convolveMatrixNode: convolveMatrix.Slice
}

// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useStore = create<State>()(
  immer((set, get) => ({
    rfInstance: null,

    setReactFlowInstance: (instance: ReactFlowInstance) =>
      set((state: State) => {
        state.rfInstance = instance
      }),
      

    nodes: initialNodes,
    edges: initialEdges,

    // svg: render(initialNodes, initialEdges),

    onNodesChange: (changes: NodeChange[]) => {
      set((state: State) => {
        state.nodes = applyNodeChanges(changes, state.nodes)
      })
    },

    onEdgesChange: (changes: EdgeChange[]) => {
      set((state: State) => {
        state.edges = applyEdgeChanges(changes, state.edges)
      })
    },

    onConnect: (params: Connection) => {
      // console.log("onConnect: ", "fired")
      set((state: State) => {

        // check if the new connection is from a source node
        const sourceIdx = state.nodes.findIndex((node) => node.id === params.source)
        // if so, we need to update the edge data to include the source key
        if (state.nodes[sourceIdx].type === 'source') {
          params.data = {
            source: state.nodes[sourceIdx].data.source
          }
        }

        const newEdges = addEdge({ ...params, type: "custom" }, state.edges)
        state.edges = newEdges
      })
    },

    deleteNode: (nodeId: string) => {
      // console.log("deleteNode: ", "fired")
      set((state: State) => {
        state.nodes = state.nodes.filter((node) => node.id !== nodeId)
        state.edges = state.edges.filter(
          (edge) => edge.source !== nodeId && edge.target !== nodeId
        )
      })
    },

    onSelectionChange: ({ nodes, edges }: OnSelectionChangeParams) => {
      console.log("onSelectionChange: ", "fired", nodes, edges)
      set((state: State) => {
        if (nodes.length !== 0) {
          // console.log(nodes)
          state.filterText = nodes[0]?.data.filterText || "none"
        }
      })
    },
    
    // Panel slices
    ...createDragAndDropSlice(set, get),

    // Node-specific slices
    ...source.createSlice(set, get),
    ...blend.createSlice(set, get),
    ...colorMatrix.createSlice(set, get),
    ...componentTransfer.createSlice(set, get),
    ...composite.createSlice(set, get),
    ...convolveMatrix.createSlice(set, get),
  }))
)

export default useStore

export const defaultNodeData = {
  source: source.defaultData,
  blend: blend.defaultData,
  colorMatrix: colorMatrix.defaultData,
  componentTransfer: componentTransfer.defaultData,
  composite: composite.defaultData,
  convolveMatrix: convolveMatrix.defaultData,
}

export const nodeMetadata = [
  source.metadata,
  blend.metadata,
  colorMatrix.metadata,
  componentTransfer.metadata,
  composite.metadata,
  convolveMatrix.metadata,
]
