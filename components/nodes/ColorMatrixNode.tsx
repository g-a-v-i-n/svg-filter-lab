import React, { memo } from "react"
import useStore, { State } from "../../state/store"
import { Container } from "../nodeParts/Container"
import { MatrixInput } from "../nodeParts/MatrixInput"
import { Select, SelectItem, Separator } from "../nodeParts/Select"
import {
  NodeState,
  metadata,
  MatrixTypeKey,
} from "../../state/nodes/colorMatrix"
import { NumberInput } from "../nodeParts/NumberInput"
import clsx from "clsx"

const selector = (state: State) => state.colorMatrixNode

type NodeProps = NodeState & {}

function ColorMatrixNode({ id, data, selected }: NodeProps) {
  const { values, type } = useStore(selector)

  return (
    <Container id={id} metadata={metadata} selected={selected} className="w-[210px]">
        <Select
          name="Type"
          value={data.type}
          onValueChange={(val: string) => type.set(id, val as MatrixTypeKey)}
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
            <MatrixInput
              disabled
              label="Values"
              rows={4}
              cols={5}
              onValueChange={(value, i, j) =>
                values.matrix.set(id, value, i, j)
              }
              values={data.values.matrix}
            />
          </>
        )}

        {data.type === "matrix" && (
          <>
            <MatrixInput
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
            <NumberInput
              label="Values"
              value={data.values.saturate as number}
              onChange={(value:number) =>
                values.saturate.set(id, value)
              }
            />
          </>
        )}
        {data.type === "hueRotate" && (
          <>
            <NumberInput
              label="Values"
              value={data.values.hueRotate as number}
              onChange={(value:number) =>
                values.hueRotate.set(id, value)
              }
            />
          </>
        )}
    
    </Container>
  )
}

export default memo(ColorMatrixNode)
