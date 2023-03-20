import React, { memo } from "react"
import useStore, { State } from "../../state/store"
import { Container } from "../nodeParts/Container"
import { Select, SelectItem, Separator } from "../nodeParts/Select"
import { NodeState, metadata, BlendModeKey } from "../../state/nodes/blend"

const selector = (state: State) => state.blendNode

type NodeProps = NodeState & {}

function BlendNode(props: NodeProps) {
  const { id, data, selected } = props
  const { mode } = useStore(selector)

  return (
    <Container id={id} metadata={metadata} selected={selected} className="w-[210px]">
        <Select
          name="Mode"
          value={data.mode}
          onValueChange={(val: string) => mode.set(id, val as BlendModeKey)}
        >
          <SelectItem value="unset">Unset</SelectItem>
          <SelectItem value="normal">Normal</SelectItem>
          <Separator />
          <SelectItem value="darken">Darken</SelectItem>
          <SelectItem value="multiply">Multiply</SelectItem>
          <SelectItem value="color-burn">Color Burn</SelectItem>
          <Separator />
          <SelectItem value="lighten">Lighten</SelectItem>
          <SelectItem value="screen">Screen</SelectItem>
          <SelectItem value="color-dodge">Color Dodge</SelectItem>
          <Separator />
          <SelectItem value="overlay">Overlay</SelectItem>
          <SelectItem value="soft-light">Soft Light</SelectItem>
          <SelectItem value="hard-light">Hard Light</SelectItem>
          <Separator />
          <SelectItem value="difference">Difference</SelectItem>
          <SelectItem value="exclusion">Exclusion</SelectItem>
          <Separator />
          <SelectItem value="hue">Hue</SelectItem>
          <SelectItem value="saturation">Saturation</SelectItem>
          <SelectItem value="color">Color</SelectItem>
          <SelectItem value="luminosity">Luminosity</SelectItem>
        </Select>
    </Container>
  )
}

export default memo(BlendNode)
