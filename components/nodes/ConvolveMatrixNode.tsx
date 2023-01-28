import React, { memo } from "react"
import { Position } from "reactflow"
import useStore, { State } from "../../state/store"
import { Container } from "../nodeParts/Container"
import { ControlGroup } from "../nodeParts/ControlGroup"
import { Footer } from "../nodeParts/Footer"
import { Handle } from "../nodeParts/Handle"
import { HandlePositioner } from "../nodeParts/HandlePositioner"
import { Header } from "../nodeParts/Header"
import { MatrixInput } from "../nodeParts/MatrixInput"
import { NodeState, metadata } from "../../state/nodes/convolveMatrix"

const selector = (state: State) => state.convolveMatrixNode

type NodeProps = NodeState & {}

function ConvolveMatrixNode({ id, data, selected }: NodeProps) {
  const { updateKernelMatrix } = useStore(selector)

  return (
    <Container selected={selected} className="w-[250px] min-h-[104px]">
      <Header metadata={metadata} id={id} />
      <ControlGroup>
        <MatrixInput
          rows={3}
          cols={3}
          label="Kernel Matrix"
          values={data.kernelMatrix}
          onChange={(value: number, i, j) => {
            const newValues = data.kernelMatrix.map((row: number[]) => [...row])
            newValues[i][j] = value
            updateKernelMatrix(id, newValues)
          }}
        />
      </ControlGroup>

      <Footer />

      <HandlePositioner left>
        <Handle
          selected={selected}
          type="target"
          id="in1"
          title="In"
          position={Position.Left}
        />
      </HandlePositioner>

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

export default memo(ConvolveMatrixNode)
