import React, { memo } from "react"
import { Position } from "reactflow"
import useStore, { State } from "../../state/store"
import { Container } from "../nodeParts/Container"
import { ControlGroup } from "../nodeParts/ControlGroup"
import { Footer } from "../nodeParts/Footer"
import { Handle } from "../nodeParts/Handle"
import { HandlePositioner } from "../nodeParts/HandlePositioner"
import { Header } from "../nodeParts/Header"
import { Select, SelectItem, Separator } from "../nodeParts/Select"
import { NodeState, metadata } from "../../state/nodes/source"

const selector = (state: State) => state.sourceNode

type NodeProps = NodeState & {}

function SourceNode({ id, data, selected }: NodeProps) {
  const { source } = useStore(selector)

  return (
    <Container id={id} className="w-[250px] h-[104px]" selected={selected}>
      <Header metadata={metadata} id={id} />
      <ControlGroup>
        <Select
          name="Source"
          value={data.source}
          onValueChange={(val: string) => source.set(id, val)}
          className="rounded-lg"
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
      </ControlGroup>

      <Footer />

      <HandlePositioner right>
        <Handle
          selected={selected}
          type="source"
          id="result"
          title="Result"
          position={Position.Right}
        />
      </HandlePositioner>
    </Container>
  )
}

export default memo(SourceNode)
