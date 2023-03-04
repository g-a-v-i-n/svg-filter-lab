import { Node } from "reactflow"
import { State } from "../store"


export const metadata = {
  type: "source",
  title: "Source",
  tagName: "",
  icon: "􀏅",
  mdn: "",
}

export type NodeData = {
  source: string
}

export type NodeState = Node<NodeData> & { selected: boolean } 

export type Slice = {
  updateSource: (nodeId: string, source: string) => void
  updateSVG: (nodeId: string, svg: string) => void
}

export const createSlice = (set:Function) => ({
  sourceNode: {
    source: {
      set: (nodeId: string, newSource: string) => {
        set((state: State) => {

        // get downstream nodes connected to this node and update their input properties
        state.edges
          .filter((edge) => edge.source === nodeId)
          .forEach((edge) => {
            const index = state.nodes.findIndex((node) => node.id === edge.target)
            state.nodes[index].data[edge.targetHandle] = newSource
          })
        
        // update the source node's UI itself
        const index = state.nodes.findIndex((node) => node.id === nodeId)
        state.nodes[index].data.source = newSource
      })
    }
  }
},
})

export const defaultData: NodeData = {
  source: "SourceGraphic",
}

export function stringify(node) {
  return ''
}