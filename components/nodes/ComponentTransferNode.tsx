import React, { memo } from "react";
import { Position, useUpdateNodeInternals } from "reactflow";
import {
  StyledHandle,
  NodeContainer,
  NodeControlTray,
  NodeHeader,
  NodeTextInput,
  PreviewFooter,
  NodeRule,
  NodeNumberInput,
  NodeSelect,
  SelectItem,
  HandlePositioner,
  NodeSwitchRow,
  NodeSwitch,
  NodeMatrixInput,
} from "./NodeParts";
import blendModes from "../../lib/blendModes";
import useStore, { NamedKey, RFState } from "../../store/store";

const feComponentTransferTypes = [
  { label: "Identity", key: "identity", category: "preset" },
  { label: "Table", key: "table", category: "custom" },
  { label: "Discrete", key: "discrete", category: "custom" },
  { label: "Linear", key: "linear", category: "custom" },
  { label: "Gamma", key: "gamma", category: "custom" },
];

const selector = (state: RFState) => state.componentTransferNode;

function ComponentTransferNode({ id, data }) {
  const { red, green, blue, alpha } = useStore(selector);
  return (
    <NodeContainer className="w-[240px]">
      <NodeHeader icon="􀊝" title="Component Transfer" />
      <NodeSwitchRow label="Red">
        <NodeSwitch
          label="red-channel"
          className={`${
            data.red.isOn ? "bg-red flex-row-reverse" : "bg-tertiary flex-row"
          } `}
          isChecked={data.red.isOn}
          onCheckedChange={() => red.updateIsOn(id, !data.red.isOn)}
        />
      </NodeSwitchRow>

      {data.red.isOn && (
        <ChannelGroup id={id} channel="red" data={data} store={red} />
      )}

      <NodeSwitchRow label="Green">
        <NodeSwitch
          label="green-channel"
          className={`${
            data.green.isOn
              ? "bg-green flex-row-reverse"
              : "bg-tertiary flex-row"
          } `}
          isChecked={data.green.isOn}
          onCheckedChange={() => green.updateIsOn(id, !data.green.isOn)}
        />
      </NodeSwitchRow>

      {data.green.isOn && (
        <ChannelGroup id={id} channel="green" data={data} store={green} />
      )}

      <NodeSwitchRow label="Blue">
        <NodeSwitch
          label="blue-channel"
          className={`${
            data.blue.isOn ? "bg-blue flex-row-reverse" : "bg-tertiary flex-row"
          } `}
          isChecked={data.blue.isOn}
          onCheckedChange={() => blue.updateIsOn(id, !data.blue.isOn)}
        />
      </NodeSwitchRow>

      {data.blue.isOn && (
        <ChannelGroup id={id} channel="blue" data={data} store={blue} />
      )}

      <NodeSwitchRow label="Alpha">
        <NodeSwitch
          label="alpha-channel"
          className={`${
            data.alpha.isOn
              ? "bg-primary flex-row-reverse"
              : "bg-tertiary flex-row"
          } `}
          isChecked={data.alpha.isOn}
          onCheckedChange={() => alpha.updateIsOn(id, !data.alpha.isOn)}
        />
      </NodeSwitchRow>

      {data.alpha.isOn && (
        <ChannelGroup id={id} channel="alpha" data={data} store={alpha} />
      )}

      <PreviewFooter />

      <HandlePositioner left>
        <StyledHandle
          type="target"
          id="in"
          title="In"
          position={Position.Left}
        />
      </HandlePositioner>

      <HandlePositioner right>
        <StyledHandle
          type="source"
          id="out"
          title="Out"
          position={Position.Right}
        />
      </HandlePositioner>
    </NodeContainer>
  );
}

function ChannelGroup({ id, channel, label, data, store }) {
  return (
    <NodeControlTray>
      <NodeSelect
        value={data[channel].type.label}
        label="Type"
        onValueChange={(val) => store.updateType(id, val)}
      >
        {feComponentTransferTypes.map((type) => (
          <SelectItem key={id + "-" + channel + "-" + type.key} value={type}>
            {type.label}
          </SelectItem>
        ))}
      </NodeSelect>

      {data[channel].type.key === "linear" && (
        <>
          <NodeRule />
          <NodeNumberInput
            label="Slope"
            value={data[channel].slope}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              store.updateSlope(id, e.target.value)
            }
          />
          <NodeRule />
          <NodeNumberInput
            label="Intercept"
            value={data[channel].intercept}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              store.updateIntercept(id, e.target.value)
            }
          />
        </>
      )}

      {data[channel].type.key === "gamma" && (
        <>
          <NodeRule />
          <NodeNumberInput
            label="Amplitude"
            value={data[channel].amplitude}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              store.updateAmplitude(id, e.target.value)
            }
          />
          <NodeRule />
          <NodeNumberInput
            label="Exponent"
            value={data[channel].exponent}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              store.updateExponent(id, e.target.value)
            }
          />
          <NodeRule />
          <NodeNumberInput
            label="Offset"
            value={data[channel].offset}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              store.updateOffset(id, e.target.value)
            }
          />
        </>
      )}

      {(data[channel].type.key === "table" ||
        data[channel].type.key === "discrete") && (
        <>
          <NodeRule />
          <NodeMatrixInput
            rows={4}
            cols={4}
            label="Table Values"
            values={data[channel].tableValues}
            onChange={(value: number, i, j) => {
              const newValues = data.values.map((row: number[]) => [...row]);
              newValues[i][j] = value;
              store.updateTableValues(id, newValues);
            }}
          />
        </>
      )}
    </NodeControlTray>
  );
}

export default memo(ComponentTransferNode);
