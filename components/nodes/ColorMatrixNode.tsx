import React, { memo } from "react"
import useStore, { State } from "../../state/store"
import { Container } from "../nodeParts/Container"
import { MatrixInput } from "../nodeParts/MatrixInput"
import { Select, SelectItem, Separator } from "../nodeParts/Select"
import { NumberInput } from "../nodeParts/NumberInput"
import { definition, MatrixTypeEnum, NodeState } from "../../state/nodes/colorMatrix"


const selector = (state: State) => state.colorMatrix

type NodeProps = NodeState & {}

function ColorMatrixNode({ id, data, selected, dragging }: NodeProps) {
  const { 
    matrixValues,
    hueRotateValues,
    saturateValues,
    luminanceToAlphaValues,
    type 
  } = useStore(selector)

  console.log("ColorMatrixNode: ", data)

  return (
    <Container 
      id={id} 
      metadata={definition.meta} 
      dragging={dragging}
      selected={selected}>
        <Select
          name="Type"
          value={data.attributes.type.value}
          onValueChange={(val: string) => type.set(id, val as MatrixTypeEnum)}
        >
          <SelectItem value="unset">Unset</SelectItem>
          <SelectItem value="matrix">Matrix</SelectItem>
          <Separator />
          <SelectItem value="saturate">Saturate</SelectItem>
          <SelectItem value="hueRotate">Hue Rotate</SelectItem>
          <SelectItem value="luminanceToAlpha">Luminance to Alpha</SelectItem>
        </Select>

        {data.attributes.type.value === "unset" || data.attributes.type.value === "matrix" && (
            <MatrixInput
              hasValue={data.attributes.type.hasValue}
              hasError={data.attributes.type.hasError}
              label="Values"
              rows={4}
              cols={5}
              onValueChange={(value, i, j) =>
                matrixValues.set(id, value, i, j)
              }
              values={data.attributes.matrixValues.value as number[][]}
            />
        )}

        {data.attributes.type.value === "saturate" && (
            <NumberInput
              label="Values"
              value={data.attributes.saturateValues.value as number}
              onChange={(value:number) =>
                saturateValues.set(id, value)
              }
            />
        )}

        {data.attributes.type.value === "hueRotate" && (
            <NumberInput
              label="Values"
              value={data.attributes.hueRotateValues.value as number}
              onChange={(value:number) =>
                hueRotateValues.set(id, value)
              }
            />
        )}

        {data.attributes.type.value === "luminanceToAlpha" && (
            <NumberInput
              label="Values"
              value={data.attributes.luminanceToAlphaValues.value as number}
              onChange={(value:number) =>
                luminanceToAlphaValues.set(id, value)
              }
            />
        )}
    
    </Container>
  )
}

export default memo(ColorMatrixNode)
