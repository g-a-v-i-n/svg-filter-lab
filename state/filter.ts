import { Node } from "reactflow"
import { State } from "./store"

export type BlendModes = typeof blendModes

export type BlendMode = BlendModes[number]

export type BlendNodeData = {
  mode: BlendMode
}

export type BlendNodeState = Node<BlendNodeData>

export type BlendNodeSlice = {
  updateX: (nodeId: string, x: string) => void
  updateY: (nodeId: string, y: string) => void
  updateWidth: (nodeId: string, width: string) => void
  updateHeight: (nodeId: string, height: string) => void
  updateFilterUnits: (nodeId: string, filterUnits: string) => void
  updatePrimitiveUnits: (nodeId: string, primitiveUnits: string) => void
}

export const createBlendNodeSlice = (set) => ({
  filterTag: {
    updateX: (nodeId: string, x: string) => {
      set((state: State) => {
        const index = state.nodes.findIndex((node) => node.id === nodeId)
        state.nodes[index].data.x = x
      })
    },
    updateY: (nodeId: string, y: string) => {
      set((state: State) => {
        const index = state.nodes.findIndex((node) => node.id === nodeId)
        state.nodes[index].data.y = y
      })
    },
    updateWidth: (nodeId: string, width: string) => {
      set((state: State) => {
        const index = state.nodes.findIndex((node) => node.id === nodeId)
        state.nodes[index].data.width = width
      })
    },
    updateHeight: (nodeId: string, height: string) => {
      set((state: State) => {
        const index = state.nodes.findIndex((node) => node.id === nodeId)
        state.nodes[index].data.height = height
      })
    },
    updateFilterUnits: (nodeId: string, filterUnits: string) => {
      set((state: State) => {
        const index = state.nodes.findIndex((node) => node.id === nodeId)
        state.nodes[index].data.filterUnits = filterUnits
      })
    },
    updatePrimitiveUnits: (nodeId: string, primitiveUnits: string) => {
      set((state: State) => {
        const index = state.nodes.findIndex((node) => node.id === nodeId)
        state.nodes[index].data.primitiveUnits = primitiveUnits
      })
    },
  },
})
