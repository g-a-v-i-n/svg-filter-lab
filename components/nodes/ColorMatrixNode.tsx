import React, { memo } from "react"
import { Position } from "reactflow"
import useStore, { State } from "../../state/store"
import { Container } from "../nodeParts/Container"
import { ControlGroup } from "../nodeParts/ControlGroup"
import { Divider } from "../nodeParts/Divider"
import { Footer } from "../nodeParts/Footer"
import { Handle } from "../nodeParts/Handle"
import { HandlePositioner } from "../nodeParts/HandlePositioner"
import { Header } from "../nodeParts/Header"
import { MatrixInput } from "../nodeParts/MatrixInput"
import { Select, SelectItem, Separator } from "../nodeParts/Select"
import { NodeState, metadata, MatrixTypeKey } from "../../state/nodes/colorMatrix"
import { NumberInput } from "../nodeParts/NumberInput"
import clsx from "clsx"

const selector = (state: State) => state.colorMatrixNode

type NodeProps = NodeState & {}

function ColorMatrixNode({ id, data, selected }: NodeProps) {
  const {
    values,
    type,
  } = useStore(selector)

  return (
    <Container id={id} selected={selected} className="w-[270px]">
      <Header metadata={metadata} id={id} />
      <ControlGroup>
        <Select
          name="Type"
          value={data.type}
          onValueChange={(val: string) => type.set(id, val as MatrixTypeKey)}
          className={clsx({
            "rounded-t-lg": data.type !== "luminanceToAlpha",
            "rounded-lg": data.type === "luminanceToAlpha",
          })}
        >
          <SelectItem value="unset">Unset</SelectItem>
          <SelectItem value="matrix">Matrix</SelectItem>
          <Separator />
          <SelectItem value="saturate">Saturate</SelectItem>
          <SelectItem value="hueRotate">Hue Rotate</SelectItem>
          <SelectItem value="luminanceToAlpha">Luminance to Alpha</SelectItem>
        </Select>

        {data.type === "unset" && (
          <>
            <Divider />
            <MatrixInput
              className="rounded-b-lg"
              disabled
              label="Values"
              rows={4}
              cols={5}
              onValueChange={(value, i, j) =>
                values.matrix.set(id, value, i, j)
              }
              values={data.values.matrix as number[][]}
            />
          </>
        )}

        {data.type === "matrix" && (
          <>
            <Divider />
            <MatrixInput
              className="rounded-b-lg"
              disabled={data.type !== "matrix"}
              label="Values"
              rows={4}
              cols={5}
              onValueChange={(value, i, j) =>
                values.matrix.set(id, value, i, j)
              }
              values={data.values.matrix as number[][]}
            />
          </>
        )}

        {data.type === "saturate" && (
          <>
            <Divider />
            <NumberInput
              label="Values"
              className="rounded-b-lg"
              value={data.values.saturate as number}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                values.saturate.set(id, e.target.value)
              }
            />
          </>
        )}
        {data.type === "hueRotate" && (
          <>
            <Divider />
            <NumberInput
              label="Values"
              className="rounded-b-lg"
              value={data.values.hueRotate as number}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                values.hueRotate.set(id, e.target.value)
              }
            />
          </>
        )}
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

export default memo(ColorMatrixNode)
