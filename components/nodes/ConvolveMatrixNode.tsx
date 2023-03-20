import React, { memo } from "react"
import useStore, { State } from "../../state/store"
import { Container } from "../nodeParts/Container"
import { MatrixInput } from "../nodeParts/MatrixInput"
import { NodeState, metadata } from "../../state/nodes/convolveMatrix"

const selector = (state: State) => state.convolveMatrixNode

type NodeProps = NodeState & {}

function ConvolveMatrixNode({ id, data, selected }: NodeProps) {
  const { kernalMatrix } = useStore(selector)

  return (
    <Container id={id} metadata={metadata} selected={selected} className="w-[210px]">
        <MatrixInput
          rows={3}
          cols={3}
          label="Kernel Matrix"
          values={data.kernelMatrix}
          onChange={(value: number, i, j) => {
            const newValues = data.kernelMatrix.map((row: number[]) => [...row])
            newValues[i][j] = value
            kernalMatrix.set(id, newValues)
          }}
        />
    </Container>
  )
}

export default memo(ConvolveMatrixNode)
