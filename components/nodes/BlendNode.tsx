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
import useStore, { NodeData, RFState } from "../../store/store";

const selector = (state: RFState) => state.blendNode.updateMode;

function BlendNode({ id, data }) {
  const updateBlendNode = useStore(selector);
  // console.log('blendNode/data:', data.mode.label)
  return (
    <NodeContainer className="w-[210px]">
      <NodeHeader title="Blend" />
      <NodeControlTray>
        <NodeSelect
          value={data.mode.label}
          label="Mode"
          onValueChange={(val) => {
            // console.log(id, val)
            updateBlendNode(id, val);
          }}
        >
          {blendModes.map((mode) => (
            <SelectItem value={mode}>{mode.label}</SelectItem>
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
