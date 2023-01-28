import { Node } from "reactflow"
import { setNodeProp } from "../../lib/setNodeProp"

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

export const createSlice = (set) => ({
  sourceNode: {
    updateSource: (nodeId: string, newSource: string) =>
      setNodeProp(set, nodeId, "source", newSource),
    updateSVG: (nodeId: string, newSVG: string) =>
      setNodeProp(set, nodeId, "svg", newSVG),
  },
})

export const defaultData: NodeData = {
  source: "SourceGraphic",
}
