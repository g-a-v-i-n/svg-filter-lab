import { Node } from "reactflow"
import { createNodePropSetter } from "../setters"
import { UnsetValue } from "../../lib/unset"

export const metadata = {
  type: "componentTransfer",
  title: "Component Transfer",
  tagName: "feComponentTransfer",
  icon: "􀊝",
  mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feComponentTransfer",
}

export type Channel = {
  isOn: boolean
  type: ChannelType
  amplitude: number | UnsetValue
  exponent: number | UnsetValue
  offset: number | UnsetValue
  slope: number | UnsetValue
  intercept: number | UnsetValue
  values: {
    table: number[] | UnsetValue
    discrete: number[] | UnsetValue
  }
}

export type ChannelType = UnsetValue | "identity" | "table" | "discrete" | "linear" | "gamma"

export type ChannelLabel = "red" | "green" | "blue" | "alpha"

export type NodeData = {
  in1: string | null,
  result: string | null,
  red: Channel
  green: Channel
  blue: Channel
  alpha: Channel
}

export type NodeState = Node<NodeData> & { selected: boolean }

export type ChannelSlice = {
  isOn: {
    set: Function
  }
  type: {
    set: Function
  }
  values: {
    table: {
      set: Function
    }
    discrete: {
      set: Function
    }
  }
  slope: {
    set: Function
  }
  intercept: {
    set: Function
  }
  amplitude: {
    set: Function
  }
  exponent: {
    set: Function
  }
  offset: {
    set: Function
  }
}

export type Slice = {
  red: ChannelSlice
  green: ChannelSlice
  blue: ChannelSlice
  alpha: ChannelSlice
}

export const createSlice = (set:Function) => ({
  componentTransferNode: {
    ...createChannelSlice(set, "red"),
    ...createChannelSlice(set, "green"),
    ...createChannelSlice(set, "blue"),
    ...createChannelSlice(set, "alpha"),
  },
});

export const createChannelSlice = (set:Function, channel: ChannelLabel) => ({
  [channel]: {
    isOn: {
      set: createNodePropSetter(set, channel + ".isOn"),
    },
    type: {
      set: createNodePropSetter(set, channel + ".type"),
    },
    values: {
      table: {
        set: createNodePropSetter(set, channel + ".values.table"),
      },
      discrete: {
        set: createNodePropSetter(set, channel + ".values.discrete"),
      },
    },
    slope: {
      set: createNodePropSetter(set, channel + ".slope"),
    },
    intercept: {
      set: createNodePropSetter(set, channel + ".intercept"),
    },
    amplitude: {
      set: createNodePropSetter(set, channel + ".amplitude"),
    },
    exponent: {
      set: createNodePropSetter(set, channel + ".exponent"),
    },
    offset: {
      set: createNodePropSetter(set, channel + ".offset"),
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
  values:{
    table: [0, 1],
    discrete: [0, 1],
  }
};

export const defaultData = {
  red: { ...defaultChannel },
  green: { ...defaultChannel },
  blue: { ...defaultChannel },
  alpha: { ...defaultChannel },
};

export function render(node:NodeState) {
  const { id, data } = node
  const { red, green, blue, alpha, in1, result } = data

  const str = `
  <feComponentTransfer id="${id}" in="${in1}" result="${result}">
    ${renderChannel(id, "R", red)}
    ${renderChannel(id, "G", green)}
    ${renderChannel(id, "B", blue)}
    ${renderChannel(id, "A", alpha)}
  </feComponentTransfer>`
  return str
}


// For identity:

// C' = C
// For table, the function is defined by linear interpolation between values given in the attribute tableValues. The table has n+1 values (i.e., v0 to vn) specifying the start and end values for n evenly sized interpolation regions. Interpolations use the following formula:
// For discrete, the function is defined by the step function given in the attribute tableValues, which provides a list of n values (i.e., v0 to vn-1) in order to identify a step function consisting of n steps. The step function is defined by the following formula:
// For linear, the function is defined by the following linear equation:
// For gamma, the function is defined by the following exponential function:
// The initial value for type is identity.

function renderChannel(id, channel, data) {
  const { isOn, type, amplitude, exponent, offset, slope, intercept, tableValues, discreteTableValues } = data

  if (!isOn) return ""

  let properties = ""
  if (type === "table") {
    properties = `tableValues="${tableValues.join(' ')}"`
  } 

  if (type === "discrete") {
    properties = `tableValues="${discreteTableValues.join(' ')}"`
  }

  if (type === "linear") {
    properties = `slope="${slope}" intercept="${intercept}"`
  }

  if (type === "gamma") {
    properties = `amplitude="${amplitude}" exponent="${exponent}" offset="${offset}"`
  }

  const str = `<feFunc${channel} type="${type}" ${properties} />`

  return str
}