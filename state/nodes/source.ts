import { Node } from "reactflow"
import { setNodeProp } from "../../lib/setNodeProp"
import { createNodePropSetter } from "../setters"

export const metadata = {
  type: "source",
  title: "Source",
  tagName: "",
  icon: "􀮟",
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

function applyImageSourceToEdgeData(edges: Edges[], nodeId: string, newSource: string) {
  return edges.map((edge) => {
    if (edge.source === nodeId) {
      return {
        ...edge,
        data: {
          source: newSource, // the key for the image source
        }
      }
     } else  {
      return edge
     }
  })
}

export const createSlice = (set) => ({
  sourceNode: {
    updateSource: (nodeId: string, newSource: string) => {
      set((state: State) => {

        state.edges = applyImageSourceToEdgeData(state.edges, nodeId, newSource)

        const index = state.nodes.findIndex((node) => node.id === nodeId)
        state.nodes[index].data.source = newSource
      })
      
      // here we should update the metadata of the edge
    },
    updateSVG: (nodeId: string, newSVG: string) =>
      setNodeProp(set, nodeId, "svg", newSVG),
  },
})

export const defaultData: NodeData = {
  source: "SourceGraphic",
}

export function render(node) {
  return ''
}