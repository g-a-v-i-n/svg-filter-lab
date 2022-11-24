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
} from "./NodeParts";
import compositeModes from "../../lib/blendModes";
import useStore, { NamedKey, RFState } from "../../store/store";

const selector = (state: RFState) => state.compositeNode;

type CompositeNodeProps = {
  id: string;
  data: {
    operator: NamedKey;
    k1: number;
    k2: number;
    k3: number;
    k4: number;
  };
};

const compositeOperators = [
  { label: "Over", key: "over", category: "preset" },
  { label: "In", key: "in", category: "preset" },
  { label: "Out", key: "out", category: "preset" },
  { label: "Atop", key: "atop", category: "preset" },
  { label: "XOR", key: "xor", category: "preset" },
  { label: "Arithmetic", key: "arithmetic", category: "preset" },
  { label: "Lighter", key: "lighter", category: "preset" },
];

function CompositeNode({ id, data }: CompositeNodeProps) {
  const {
    updateOperator,
    updateK1,
    updateK2,
    updateK3,
    updateK4,
  } = useStore(selector);
  return (
    <NodeContainer className="w-[210px] min-h-[104px]">
      <NodeHeader icon="􀯮" title="Composite" />
      <NodeControlTray>
        <NodeSelect
          value={data.operator.label}
          label="Operator"
          onValueChange={(val: NamedKey) => updateOperator(id, val)}
        >
          {compositeOperators.map((operator) => (
            <SelectItem key={id + "-" + operator.key} value={operator}>
              {operator.label}
            </SelectItem>
          ))}
        </NodeSelect>

        {data.operator.key === "arithmetic" && (
          <>
            <NodeRule />
            <NodeNumberInput
              label="K1"
              value={data.k1}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateK1(id, e.target.value)
              }
            />
            <NodeRule />
            <NodeNumberInput
              label="K2"
              value={data.k2}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateK2(id, e.target.value)
              }
            />
            <NodeRule />
            <NodeNumberInput
              label="K3"
              value={data.k3}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateK3(id, e.target.value)
              }
            />
            <NodeRule />
            <NodeNumberInput
              label="K4"
              value={data.k4}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateK4(id, e.target.value)
              }
            />
          </>
        )}
      </NodeControlTray>

      <PreviewFooter />

      <HandlePositioner left>
        <StyledHandle
          type="target"
          id="in1"
          title="In 1"
          position={Position.Left}
        />
        <StyledHandle
          type="target"
          id="in2"
          title="In 2"
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

export default memo(CompositeNode);
