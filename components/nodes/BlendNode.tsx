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
import blendModes from "../../lib/blendModes";
import useStore, { NamedKey, RFState } from "../../store/store";

const selector = (state: RFState) => state.blendNode.updateMode;

type BlendNodeProps = {
  id: string;
  data: {
    mode: NamedKey;
  };
};

function BlendNode({ id, data }: BlendNodeProps) {
  const updateBlendNode = useStore(selector);
  return (
    <NodeContainer className="w-[210px] h-[104px]">
      <NodeHeader icon="􀟗" title="Blend" />
      <NodeControlTray>
        <NodeSelect
          value={data.mode.label}
          label="Mode"
          onValueChange={(val: NamedKey) => updateBlendNode(id, val)}
        >
          {blendModes.map((mode) => (
            <SelectItem key={id + "-" + mode.key} value={mode}>
              {mode.label}
            </SelectItem>
          ))}
        </NodeSelect>
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

export default memo(BlendNode);
