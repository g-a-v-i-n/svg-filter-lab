import React, { memo } from "react";
import { Position } from "reactflow";

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
} from "./NodeParts";

function CustomNode({ data }) {
  return (
    <NodeContainer>
      <NodeHeader title="Custom" />
      <NodeControlTray>
        <NodeTextInput label="Text" placeholder="placeholder" />
        <NodeRule />
        <NodeNumberInput label="Number" placeholder="1" />
        <NodeRule />
        <NodeSelect label="Fruit">
          <SelectItem value="Option 1">Option 1</SelectItem>
          <SelectItem value="Option 2">Option 2</SelectItem>
          <SelectItem value="Option 3">Option 3</SelectItem>
        </NodeSelect>
      </NodeControlTray>
      <PreviewFooter />
      <StyledHandle type="target" position={Position.Left} />
      <StyledHandle type="source" position={Position.Right} />
    </NodeContainer>
  );
}

export default memo(CustomNode);
