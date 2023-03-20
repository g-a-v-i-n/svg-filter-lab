import React, { memo } from "react"
import useStore, { State } from "../../state/store"
import { Container } from "../nodeParts/Container"
import { ControlGroup } from "../nodeParts/ControlGroup"
import { NodeState, metadata } from "../../state/nodes/specularLighting"

const selector = (state: State) => state.specularLighting

type NodeProps = NodeState & {}

function SpecularLightingNode({ id, data, selected }: NodeProps) {
  // const {  } = useStore(selector)

  return (
    <Container id={id} metadata={metadata} selected={selected} className="w-[210px]">
      <ControlGroup>not implemented</ControlGroup>
    </Container>
  )
}

export default memo(SpecularLightingNode)
