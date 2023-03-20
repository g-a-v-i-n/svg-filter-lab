import React, { memo } from "react"
import { Position } from "reactflow"
import useStore, { State } from "../../state/store"
import { Container } from "../nodeParts/Container"
import { ControlGroup } from "../nodeParts/ControlGroup"
import { Footer } from "../nodeParts/Footer"
import { Handle } from "../nodeParts/Handle"
import { Header } from "../nodeParts/Header"
import { Select, SelectItem, Separator } from "../nodeParts/Select"
import { NodeState, metadata } from "../../state/nodes/source"

const selector = (state: State) => state.sourceNode

type NodeProps = NodeState & {}

function SourceNode({ id, data, selected }: NodeProps) {
  const { source } = useStore(selector)

  return (
    <Container id={id} metadata={metadata} selected={selected} className="w-[210px]">

        <Select
          name="Source"
          value={data.source}
          onValueChange={(val: string) => source.set(id, val)}
        >
          <SelectItem value="SourceGraphic">Source Graphic</SelectItem>
          <SelectItem value="SourceAlpha">Source Alpha</SelectItem>
          <Separator />
          <SelectItem value="BackgroundImage">Background Image</SelectItem>
          <SelectItem value="BackgroundAlpha">Background Alpha</SelectItem>
          <Separator />
          <SelectItem value="FillPaint">Fill Paint</SelectItem>
          <SelectItem value="StrokePaint">Stroke Paint</SelectItem>
        </Select>
    </Container>
  )
}

export default memo(SourceNode)
