import React, { memo } from "react"
import { Position } from "reactflow"
import useStore, { State } from "../../state/store"
import { Container } from "../nodeParts/Container"
import { ControlGroup } from "../nodeParts/ControlGroup"
import { Footer } from "../nodeParts/Footer"
import { Handle } from "../nodeParts/Handle"
import { HandlePositioner } from "../nodeParts/HandleSection"
import { Header } from "../nodeParts/Header"
import { MatrixInput } from "../nodeParts/MatrixInput"
import { NodeState, metadata } from "../../state/nodes/turbulence"

const selector = (state: State) => state.turbulence

type NodeProps = NodeState & {}

function TurbulenceNode({ id, data, selected }: NodeProps) {
  // const {  } = useStore(selector)

  return (
    <Container id={id} metadata={metadata} selected={selected} className="w-[210px]">
      not implemented
    </Container>
  )
}

export default memo(TurbulenceNode)
