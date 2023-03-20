import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

import {
  Edge as RFEdge,
  EdgeChange,
  NodeChange,
  Connection,
  applyNodeChanges,
  applyEdgeChanges,
  ReactFlowInstance,
} from "reactflow"

import { initialNodes, initialEdges } from "./defaultStates/nodes"

import * as source from "./nodes/source"
import * as blend from "./nodes/blend"
import * as composite from "./nodes/composite"
import * as colorMatrix from "./nodes/colorMatrix"
import * as componentTransfer from "./nodes/componentTransfer"
import * as convolveMatrix from "./nodes/convolveMatrix"
import * as gaussianBlur from "./nodes/gaussianBlur"
import * as offset from "./nodes/offset"
import * as specularLighting from "./nodes/specularLighting"
import * as turbulence from "./nodes/turbulence"

import { uuid } from "../lib/uuid"
import {
  createDragAndDropSlice,
  OnDragOver,
  OnDrop,
} from "./panels/dragAndDrog"
import { parse } from "./parse/parse"

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

export type State = {
  rfInstance: ReactFlowInstance | null
  setReactFlowInstance: (instance: ReactFlowInstance<any, any>) => void

  nodes: Nodes | []
  edges: Edges | []

  setEdge: Function

  onNodeSelect: (node: Node) => void

  filterText: string

  // RF Events
  onNodesChange: Function
  onEdgesChange: Function
  onConnect: Function

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
  gaussianBlurNode: gaussianBlur.Slice
  offsetNode: offset.Slice
  specularLightingNode: specularLighting.Slice
  turbulenceNode: turbulence.Slice
}

// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useStore = create<any>()(
  immer((set) => ({
    rfInstance: null,

    setReactFlowInstance: (instance: ReactFlowInstance) =>
      set((state: State) => {
        state.rfInstance = instance
      }),

    nodes: initialNodes,
    edges: initialEdges,

    // Called on drag, select and remove - handler for adding interactivity for a controlled flow
    onNodesChange: (changes: NodeChange[]) => {
      set((state: State) => {
        state.nodes = applyNodeChanges(changes, state.nodes)
      })
    },

    // Called when user connects two nodes in a controlled flow
    onConnect: (params: Connection) => {
      const { source, target, sourceHandle, targetHandle } = params

      set((state: State) => {
        const edge = {
          ...params,
          id: uuid("edge"),
          type: "custom",
        }

        // when two nodes get connected, the target node's in1 or in2 property is set to the source node's id
        // get the source node
        const sourceNode = state.nodes.find(
          (node) => node.id === source
        ) as Node

        // get the index of the target node
        const index = state.nodes.findIndex((node) => node.id === target)

        // if the source node's type is `source`.
        if (sourceNode.type === "source") {
          // set the target node's in1 or in2 property to the source node's source property
          state.nodes[index].data[targetHandle] = sourceNode.data.source
        } else {
          // set the target node's in1 or in2 property to the source node's id
          state.nodes[index].data[targetHandle] = source
        }

        // add the edge to state
        state.edges.push(edge)
      })
    },

    // Called on select and remove - handler for adding interactivity for a controlled flow
    onEdgesChange: (changes: EdgeChange[]) => {
      set((state: State) => {
        // when a connection is deleted, the target node's in1 or in2 property is set to null
        changes
          .filter((change) => change.type === "remove")
          .forEach((removalChange) => {
            const edge = state.edges.find(
              (edge) => edge.id === removalChange.id
            ) as Edge

            // find all nodes with which this edge is connected as a target
            state.nodes
              .filter((node) => node.id === edge.target)
              .forEach((node) => {
                console.log(node)
                node.data[edge.targetHandle] = null
              })
          })

        state.edges = applyEdgeChanges(changes, state.edges)
      })
    },

    deleteNode: (nodeId: string) => {
      set((state: State) => {
        state.nodes = state.nodes.filter((node) => node.id !== nodeId)
        state.edges = state.edges.filter(
          (edge) => edge.source !== nodeId && edge.target !== nodeId
        )
      })
    },

    // onSelectionChange: ({ nodes, edges }: OnSelectionChangeParams) => {
    //   // console.log("onSelectionChange: ", "fired", nodes, edges)
    //   set((state: State) => {
    //     if (nodes.length !== 0) {
    //       // console.log(nodes)
    //       state.filterText = nodes[0]?.data.filterText || "none"
    //     }
    //   })
    // },

    parse: (filter: string) => {
      set((state: State) => {
        const { nodes, edges } = parse(filter)
        state.nodes = nodes
        state.edges = edges
      })
    },

    // Panel slices
    ...createDragAndDropSlice(set),

    // Node-specific slices
    ...source.createSlice(set),
    ...blend.createSlice(set),
    ...colorMatrix.createSlice(set),
    ...componentTransfer.createSlice(set),
    ...composite.createSlice(set),
    ...convolveMatrix.createSlice(set),
    ...gaussianBlur.createSlice(set),
    ...offset.createSlice(set),
    ...specularLighting.createSlice(set),
    ...turbulence.createSlice(set),
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
