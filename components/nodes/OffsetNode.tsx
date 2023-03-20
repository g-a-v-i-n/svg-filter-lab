import React, { memo } from "react"
import useStore, { State } from "../../state/store"
import { Container } from "../nodeParts/Container"
import { NodeState, metadata } from "../../state/nodes/offset"

const selector = (state: State) => state.offset

type NodeProps = NodeState & {}

function OffsetNode({ id, data, selected }: NodeProps) {
  // const {  } = useStore(selector)

  return (
    <Container id={id} metadata={metadata} selected={selected} className="w-[210px]">
      not implemented
    </Container>
  )
}

export default memo(OffsetNode)
