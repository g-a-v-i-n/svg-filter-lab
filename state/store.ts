import create from "zustand"
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
} from "reactflow"

import { initialNodes, initialEdges } from "./defaultState"

import * as source from "./nodes/source"
import * as blend from "./nodes/blend"
import * as composite from "./nodes/composite"
import * as colorMatrix from "./nodes/colorMatrix"
import * as componentTransfer from "./nodes/componentTransfer"
import * as convolveMatrix from "./nodes/convolveMatrix"

import { render } from "../lib/render"
import { uuid } from "../lib/uuid"

export type Nodes = (
  | source.NodeState
  | blend.NodeState
  | colorMatrix.NodeState
  | componentTransfer.NodeState
  | composite.NodeState
  | convolveMatrix.NodeState
)[]

export type State = {
  rfInstance: ReactFlowInstance | null
  setReactFlowInstance: (instance: ReactFlowInstance) => null

  nodes: Nodes | []
  edges: Edge[] | []

  svg: string

  onNodesChange: () => null
  deleteNode: (nodeId: string) => null
  onEdgesChange: () => null
  onConnect: OnConnect

  // Node-specific updaters
  sourceNode: source.Slice
  blendNode: blendNode.Slice
  colorMatrixNode: colorMatrix.Slice
  componentTransferNode: componentTransfer.Slice
  compositeNode: composite.Slice
  convolutionMatrixNode: convolveMatrix.Slice
}

// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useStore = create<State>()(
  immer((set) => ({
    rfInstance: null,

    setReactFlowInstance: (instance: ReactFlowInstance) =>
      set((state: State) => {
        state.rfInstance = instance
      }),

    nodes: initialNodes,
    edges: initialEdges,

    svg: render(initialNodes, initialEdges),

    onNodesChange: (changes: NodeChange[]) => {
      // console.log('onNodesChange: ', 'fired')
      set((state: State) => {
        state.nodes = applyNodeChanges(changes, state.nodes)
      })
    },

    deleteNode: (nodeId: string) => {
      console.log("deleteNode: ", "fired")
      set((state: State) => {
        state.nodes = state.nodes.filter((node) => node.id !== nodeId)
      })
    },

    onEdgesChange: (changes: EdgeChange[]) => {
      console.log("onEdgesChange: ", "fired")
      set((state: State) => {
        state.edges = applyEdgeChanges(changes, state.edges)
      })
    },

    onConnect: (params: Connection) => {
      console.log("onConnect: ", "fired")
      set((state: State) => {
        const newEdges = addEdge({ ...params, type: "custom" }, state.edges)
        state.svg = render(state.nodes, newEdges)
        console.log(state.svg)
        state.edges = newEdges
      })
    },

    onDragOver: (event) => {
      event.preventDefault()
      event.dataTransfer.dropEffect = "move"
    },

    onDrop: (event, RFWrapper) => {
      event.preventDefault()

      const reactFlowBounds = RFWrapper.current.getBoundingClientRect()
      const type = event.dataTransfer.getData("application/reactflow")

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return
      }

      set((state: State) => {
        const position = state.rfInstance.project({
          x: event.clientX - reactFlowBounds.left,
          y: event.clientY - reactFlowBounds.top,
        })

        const newNode = {
          id: uuid(type),
          type,
          position,
          data: structuredClone(defaultNodeData[type]),
        }

        state.nodes.push(newNode)
      })
    },

    // Node-specific slices
    ...source.createSlice(set),
    ...blend.createSlice(set),
    ...colorMatrix.createSlice(set),
    ...componentTransfer.createSlice(set),
    ...composite.createSlice(set),
    ...convolveMatrix.createSlice(set),
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
