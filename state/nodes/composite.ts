import { Node } from "reactflow"
import { setNodeProp } from "../../lib/setNodeProp"
import { addProperty } from "../../lib/addProperty"

export const metadata = {
    type: "composite",
    title: "Composite",
    tagName: "feComposite",
    icon: "􀯮",
    mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feComposite",
}

export type NodeData = {
    in: string | null
    in2: string | null
    result: string | null
    operator: string
    k1: number
    k2: number
    k3: number
    k4: number
}

export type NodeState = Node<NodeData> & { selected:boolean }

export type Slice = {
    updateOperator: (nodeId: string, type: string) => void
    updateK1: (nodeId: string, newK1: number) => void
    updateK2: (nodeId: string, newK2: number) => void
    updateK3: (nodeId: string, newK3: number) => void
    updateK4: (nodeId: string, newK4: number) => void
}

export const createSlice = (set) => ({
    compositeNode: {
        updateOperator: (nodeId: string, newOperator: string) =>
            setNodeProp(set, nodeId, "operator", newOperator),
        updateK1: (nodeId: string, newK1: number) =>
            setNodeProp(set, nodeId, "k1", newK1),
        updateK2: (nodeId: string, newK2: number) =>
            setNodeProp(set, nodeId, "k2", newK2),
        updateK3: (nodeId: string, newK3: number) =>
            setNodeProp(set, nodeId, "k3", newK3),
        updateK4: (nodeId: string, newK4: number) =>
            setNodeProp(set, nodeId, "k4", newK4),
    },
})

export const defaultData: NodeData = {
    in: null,
    in2: null,
    result: null,
    operator: "over",
    k1: 0,
    k2: 0,
    k3: 0,
    k4: 0,
}

export function exporter({ data }: NodeState) {
    const filterStr = `
    <feComposite
      ${addProperty("in", data.in)}
      ${addProperty("in2", data.in2)}
      ${addProperty("operator", data.operator)}
      ${addProperty("k1", data.k1)}
      ${addProperty("k2", data.k2)}
      ${addProperty("k3", data.k3)}
      ${addProperty("k4", data.k4)}
      ${addProperty("result", data.result)}/>
  `

    return ""
}
