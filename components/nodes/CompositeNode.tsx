import React, { memo } from "react"
import clsx from "clsx"
import useStore, { State } from "../../state/store"
import { Container } from "../nodeParts/Container"
import { NumberInput } from "../nodeParts/NumberInput"
import { Select, SelectItem } from "../nodeParts/Select"
import { NodeState, metadata } from "../../state/nodes/composite"

const selector = (state: State) => state.compositeNode

type NodeProps = NodeState & {}

function CompositeNode({ id, data, selected }: NodeProps) {
  const { operator, k1, k2, k3, k4 } = useStore(selector)

  return (
    <Container id={id} metadata={metadata} selected={selected} className="w-[210px]">
        <Select
          name="Operator"
          value={data.operator}
          onValueChange={(val: string) => operator.set(id, val)}
        >
          <SelectItem value="unset">Unset</SelectItem>
          <SelectItem value="over">Over</SelectItem>
          <SelectItem value="in">In</SelectItem>
          <SelectItem value="out">Out</SelectItem>
          <SelectItem value="atop">Atop</SelectItem>
          <SelectItem value="xor">Xor</SelectItem>
          <SelectItem value="arithmetic">Arithmetic</SelectItem>
          <SelectItem value="lighter">Lighter</SelectItem>
        </Select>

        {data.operator === "arithmetic" && (
          <>
            <NumberInput
              label="K1"
              value={data.k1}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                k1.set(id, e.target.value)
              }
            />
            <NumberInput
              label="K2"
              value={data.k2}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                k2.set(id, e.target.value)
              }
            />
            <NumberInput
              label="K3"
              value={data.k3}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                k3.set(id, e.target.value)
              }
            />
            <NumberInput
              label="K4"
              value={data.k4}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                k4.set(id, e.target.value)
              }
            />
          </>
        )}
    </Container>
  )
}

export default memo(CompositeNode)
