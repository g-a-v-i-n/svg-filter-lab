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
import { NodeState, metadata } from "../../state/nodes/colorMatrix"
import { NumberInput } from "../nodeParts/NumberInput"
import clsx from "clsx"

const selector = (state: State) => state.colorMatrixNode

type NodeProps = NodeState & {}

function ColorMatrixNode({ id, data, selected }: NodeProps) {
  const {
    updateMatrixValues,
    updateSaturateValues,
    updateHueRotateValues,
    updateType,
  } = useStore(selector)

  return (
    <Container selected={selected} className="w-[270px]">
      <Header metadata={metadata} id={id} />
      <ControlGroup>
        <Select
          name="Type"
          value={data.type}
          onValueChange={(val: string) => updateType(id, val)}
          className={clsx({
            "rounded-t-lg": data.type !== "luminanceToAlpha",
            "rounded-lg": data.type === "luminanceToAlpha",
          })}
        >
          <SelectItem value="matrix">Matrix</SelectItem>
          <Separator />
          <SelectItem value="saturate">Saturate</SelectItem>
          <SelectItem value="hueRotate">Hue Rotate</SelectItem>
          <SelectItem value="luminanceToAlpha">Luminance to Alpha</SelectItem>
        </Select>

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
                updateMatrixValues(id, i, j, value)
              }
              values={data.matrixValues}
            />
          </>
        )}

        {data.type === "saturate" && (
          <>
            <Divider />
            <NumberInput
              label="Values"
              className="rounded-b-lg"
              value={data.saturateValues}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateSaturateValues(id, e.target.value)
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
              value={data.hueRotateValues}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateHueRotateValues(id, e.target.value)
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
          id="in"
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
