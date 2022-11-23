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
  NodeTextArea,
  NodeMatrixInput,
} from "./NodeParts";
import blendModes from "../../lib/blendModes";
import useStore, { NodeData, RFState } from "../../store/store";

const selector = (state: RFState) => state.colorMatrixNode;
// const valueSelector = (state: RFState) => state.colorMatrixNode.updateValue;

const feColorMatrixTypes = [
  { label: "Matrix", value: "matrix" },
  { label: "Saturate", value: "saturate" },
  { label: "Hue Rotate", value: "hueRotate" },
  { label: "Luminance to Alpha", value: "luminanceToAlpha" },
];

export type ColorMatrixValues = number[][];

function BlendNode({ id, data }) {
  const { updateValues, updateType } = useStore(selector);

  console.log(useStore(selector));
  // const updateColorMatrixNodeValue = useStore(valueSelector);

  return (
    <NodeContainer className="w-[250px]">
      <NodeHeader title="Color Matrix" />
      <NodeControlTray>
        <NodeSelect
          value={data.type.label}
          label="Type"
          onValueChange={(val) => {
            updateType(id, val);
          }}
        >
          {feColorMatrixTypes.map((type) => (
            <SelectItem value={type}>{type.label}</SelectItem>
          ))}
        </NodeSelect>
        <NodeRule />
        <NodeMatrixInput
          disabled={data.type.value !== "matrix"}
          label="Values"
          rows={4}
          cols={5}
          onChange={(value: number, i, j) => {
            const newValues = data.values.map((row: number[]) => [...row]);
            newValues[i][j] = value;
            updateValues(id, newValues);
          }}
          values={data.values}
        />
      </NodeControlTray>

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

export default memo(BlendNode);
