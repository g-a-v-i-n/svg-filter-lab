import { Node } from "reactflow"
import { setNodeProp } from "../../lib/setNodeProp"

export const metadata = {
  type: "componentTransfer",
  title: "Component Transfer",
  tagName: "feComponentTransfer",
  icon: "􀊝",
  mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feComponentTransfer",
}

export type Channel = {
  isOn: boolean
  type: string
  amplitude: number
  exponent: number
  offset: number
  slope: number
  intercept: number
  tableValues: number[]
  discreteTableValues: number[]
}

export type ChannelLabel = "red" | "green" | "blue" | "alpha"

export type NodeData = {
  red: Channel
  green: Channel
  blue: Channel
  alpha: Channel
}

export type NodeState = Node<NodeData> & { selected: boolean }

export type Slice = {
  updateComponentTransfer: (id: string, type: string) => void
}

export const createSlice = (set) => ({
  componentTransferNode: {
    ...createChannelSlice(set, "red"),
    ...createChannelSlice(set, "green"),
    ...createChannelSlice(set, "blue"),
    ...createChannelSlice(set, "alpha"),
  },
})

export const createChannelSlice = (set, channel: string) => ({
  [channel]: {
    updateIsOn: (id: string, newVal: Boolean) => {
      setNodeProp(set, id, "isOn", newVal)
    },
    updateType: (id: string, newVal: string) => {
      setNodeProp(set, id, "type", newVal)
    },
    updateTableValues: (id: string, newVal: number[]) => {
      setNodeProp(set, id, "tableValues", newVal)
    },
    updateDiscreteTableValues: (id: string, newVal: number[]) => {
      setNodeProp(set, id, "tableValues", newVal)
    },
    updateSlope: (id: string, newVal: number) => {
      setNodeProp(set, id, "slope", newVal)
    },
    updateIntercept: (id: string, newVal: number) => {
      setNodeProp(set, id, "intercept", newVal)
    },
    updateAmplitude: (id: string, newVal: number) => {
      setNodeProp(set, id, "amplitude", newVal)
    },
    updateExponent: (id: string, newVal: number) => {
      setNodeProp(set, id, "exponent", newVal)
    },
    updateOffset: (id: string, newVal: number) => {
      setNodeProp(set, id, "offset", newVal)
    },
  },
})

export const defaultChannel = {
  isOn: true,
  type: "identity",
  amplitude: 1,
  exponent: 1,
  offset: 0,
  slope: 1,
  intercept: 0,
  tableValues: [0],
  discreteTableValues: [0],
}

export const defaultData: NodeData = {
  red: { ...defaultChannel },
  green: { ...defaultChannel },
  blue: { ...defaultChannel },
  alpha: { ...defaultChannel },
}
