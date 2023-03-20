import React, { memo } from "react"
import useStore, { State } from "../../state/store"
import { Container } from "../nodeParts/Container"
import { NodeState, metadata } from "../../state/nodes/gaussianBlur"

const selector = (state: State) => state.gaussianBlur

type NodeProps = NodeState & {}

function GaussianBlurNode({ id, data, selected }: NodeProps) {
  // const {  } = useStore(selector)

  return (
    <Container id={id} metadata={metadata} selected={selected} className="w-[210px]">
      not implemented
    </Container>
  )
}

export default memo(GaussianBlurNode)
