import { Node } from "reactflow"
import { updateNodeProp } from "../lib/setNodeProp"

export type SourceNodeData = {}

export type SourceNodeState = Node<SourceNodeData>

export type SourceNodeSlice = {}

export const createOutputNodeSlice = (set) => ({
    outputNode: {},
})

export const defaultSourceNodeData: SourceNodeData = {}
