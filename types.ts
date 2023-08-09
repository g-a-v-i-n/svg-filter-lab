export type Attribute<Type> = {
  // This is the current value of the property as seen and edited via the UI.
  // It is usually a specific parsed value, but it falls back to string in the
  // case it cannot be parsed
  value: string | Type
  // This enum is set during parsing or on coercion of `current`. It's purpose
  // is to inform the UI of which input to use to display + edit the value.
  input: string
  // if parsing fails, we need a flag for the UI.
  hasError?: boolean
  // if the value is unset, we need a flag for the UI.
  hasValue?: boolean
}

export type AttributeDefinition = {
  key: string,
  name: string,
  title: string,
  input: EnumInput | NumberInput | MatrixInput | StringInput
  default: any,
  serializer: Function,
}

export type EnumInput = {
  type: 'enum'
  options: { key: string, title: string, cat: string }[]
}

export type NumberInput = {
  type: 'number'
  min: number
  max: number
  step: number
  precision: number
}

export type MatrixInput = {
  type: 'matrix'
  rows: number
  cols: number
}

export type StringInput = {
  type: 'string'
}

export type NodeMetadata = {
  nodeType: string
  title: string
  tagName: string
  icon: string
  mdn: string
  inputs: string[] | []
  outputs: string[] | []
  width: number
  // attributeOrder: string[]
}

export type NodeDefinition = {
  meta: NodeMetadata
  attributes: {
    [key: string]: AttributeDefinition
  }
}

// export type NodeData<> {}

export type InputEnum = 'string' | 'number' | 'boolean' | 'matrix' | 'array' | 'enum'

export type Tag = {
  // The name of the tag as it appears in the spec
  tagName: string
  // The order in which the attributes appear in the tag
  attrOrder: string[]
  // The attributes of the tag
  attr: { [key: string]: Attribute }
}

export type ZustandSet = (nextStateOrUpdater: any, shouldReplace?: boolean | undefined) => void

export type Matrix = number[][]