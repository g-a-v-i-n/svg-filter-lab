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
import { NumberInput } from "../nodeParts/NumberInput"
import { Select, SelectItem, Separator } from "../nodeParts/Select"
import { Switch } from "../nodeParts/Switch"
import { SwitchRow } from "../nodeParts/SwitchRow"
import { TextInput } from "../nodeParts/TextInput"
import { NodeState, metadata, ChannelSlice, Channel } from "../../state/nodes/componentTransfer"
import clsx from "clsx"

const selector = (state: State) => state.componentTransferNode

type NodeProps = NodeState & {}

function ComponentTransferNode({ id, data, selected }: NodeProps) {
  const { red, green, blue, alpha } = useStore(selector)

  return (
    <Container id={id} className="w-[270px]" selected={selected}>
      <Header metadata={metadata} id={id} />
      <SwitchRow label="Red">
        <Switch
          className={`${
            data.red.isOn ? "bg-red flex-row-reverse" : "bg-tertiary flex-row"
          } `}
          checked={data.red.isOn}
          onCheckedChange={() => red.isOn.set(id, !data.red.isOn)}
        />
      </SwitchRow>

      {data.red.isOn && (
        <ChannelGroup id={id} data={data.red} slice={red} />
      )}

      <SwitchRow label="Green">
        <Switch
          className={`${
            data.green.isOn
              ? "bg-green flex-row-reverse"
              : "bg-tertiary flex-row"
          } `}
          checked={data.green.isOn}
          onCheckedChange={() => green.isOn.set(id, !data.green.isOn)}
        />
      </SwitchRow>

      {data.green.isOn && (
        <ChannelGroup id={id} data={data.green} slice={green} />
      )}

      <SwitchRow label="Blue">
        <Switch
          className={`${
            data.blue.isOn ? "bg-blue flex-row-reverse" : "bg-tertiary flex-row"
          } `}
          checked={data.blue.isOn}
          onCheckedChange={() => blue.isOn.set(id, !data.blue.isOn)}
        />
      </SwitchRow>

      {data.blue.isOn && (
        <ChannelGroup id={id} data={data.blue} slice={blue} />
      )}

      <SwitchRow label="Alpha">
        <Switch
          className={`${
            data.alpha.isOn
              ? "bg-primary flex-row-reverse"
              : "bg-tertiary flex-row"
          } `}
          checked={data.alpha.isOn}
          onCheckedChange={() => alpha.isOn.set(id, !data.alpha.isOn)}
        />
      </SwitchRow>

      {data.alpha.isOn && (
        <ChannelGroup id={id} data={data.alpha} slice={alpha} />
      )}

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

export type ChannelGroupProps = {
  id: string
  data: Channel
  slice: ChannelSlice
}

function ChannelGroup({ id, data, slice }:ChannelGroupProps) {
  return (
    <ControlGroup>
      <Select
        name="Type"
        value={data.type}
        onValueChange={(val: string) => slice.type.set(id, val)}
        className={clsx({
          "rounded-b-xl": data.type === "identity",
        })}
      >
        <SelectItem value="unset">Unset</SelectItem>
        <SelectItem value="identity">Identity</SelectItem>
        <Separator />
        <SelectItem value="table">Table</SelectItem>
        <SelectItem value="linear">Linear</SelectItem>
        <SelectItem value="discrete">Discrete</SelectItem>
        <SelectItem value="gamma">Gamma</SelectItem>
      </Select>

      {data.type === "linear" && (
        <>
          <Divider />
          <NumberInput
            label="Slope"
            value={data.slope}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              slice.slope.set(id, e.target.value)
            }
          />
          <Divider />
          <NumberInput
            className="rounded-b-lg"
            label="Intercept"
            value={data.intercept}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              slice.intercept.set(id, e.target.value)
            }
          />
        </>
      )}

      {data.type === "gamma" && (
        <>
          <Divider />
          <NumberInput
            label="Amplitude"
            value={data.amplitude}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              slice.amplitude.set(id, e.target.value)
            }
          />
          <Divider />
          <NumberInput
            label="Exponent"
            value={data.exponent}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              slice.exponent.set(id, e.target.value)
            }
          />
          <Divider />
          <NumberInput
            className="rounded-b-lg"
            label="Offset"
            value={data.offset}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              slice.offset.set(id, e.target.value)
            }
          />
        </>
      )}

      {(data.type === "table" &&
        <>
          <Divider />
          <TextInput
            className="rounded-b-lg"
            label="Table Values"
            value={data.values.table}
            onChange={slice.values.table.set}
          />
        </>
      )}

      {(data.type === "discrete" &&
        <>
          <Divider />
          <TextInput
            className="rounded-b-lg"
            label="Table Values"
            value={data.values.discrete}
            onChange={slice.values.table.set}
          />
        </>
      )}
    </ControlGroup>
  )
}

export default memo(ComponentTransferNode)
