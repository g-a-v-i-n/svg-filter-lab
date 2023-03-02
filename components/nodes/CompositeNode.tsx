import React, { memo } from "react"
import { Position } from "reactflow"
import clsx from "clsx"
import useStore, { State } from "../../state/store"
import { Container } from "../nodeParts/Container"
import { ControlGroup } from "../nodeParts/ControlGroup"
import { Divider } from "../nodeParts/Divider"
import { Footer } from "../nodeParts/Footer"
import { Handle } from "../nodeParts/Handle"
import { HandlePositioner } from "../nodeParts/HandlePositioner"
import { Header } from "../nodeParts/Header"
import { NumberInput } from "../nodeParts/NumberInput"
import { Select, SelectItem } from "../nodeParts/Select"
import { NodeState, metadata } from "../../state/nodes/composite"

const selector = (state: State) => state.compositeNode

type NodeProps = NodeState & {}

function CompositeNode({ id, data, selected }: NodeProps) {
  const { operator, k1, k2, k3, k4 } =
    useStore(selector)

  return (
    <Container id={id} className="w-[210px] min-h-[104px]" selected={selected}>
      <Header metadata={metadata} id={id} />
      <ControlGroup>
        <Select
          name="Operator"
          value={data.operator}
          onValueChange={(val: string) => operator.set(id, val)}
          className={
            clsx({
              "rounded-t-lg": data.operator === "arithmetic",
              "rounded-lg": data.operator !== "arithmetic",
            })
          }
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
            <Divider />
            <NumberInput
              label="K1"
              value={data.k1}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                k1.set(id, e.target.value)
              }
            />
            <Divider />
            <NumberInput
              label="K2"
              value={data.k2}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                k2.set(id, e.target.value)
              }
            />
            <Divider />
            <NumberInput
              label="K3"
              value={data.k3}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                k3.set(id, e.target.value)
              }
            />
            <Divider />
            <NumberInput
              className="rounded-b-lg"
              label="K4"
              value={data.k4}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                k4.set(id, e.target.value)
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
        <Handle
          selected={selected}
          type="target"
          id="in2"
          title="In 2"
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

export default memo(CompositeNode)
