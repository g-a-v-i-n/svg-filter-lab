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
import useStore, { NamedKey, NodeData, RFState } from "../../store/store";

const selector = (state: RFState) => state.colorMatrixNode;

const feColorMatrixTypes = [
  { label: "Matrix", key: "matrix", category: "custom" },
  { label: "Saturate", key: "saturate", category: "preset" },
  { label: "Hue Rotate", key: "hueRotate", category: "preset" },
  { label: "Luminance to Alpha", key: "luminanceToAlpha", category: "preset" },
];

export type ColorMatrixValues = number[][];

export type ColorMatrixNodeProps = {
  id: string;
  data: {
    type: NamedKey;
    values: ColorMatrixValues;
  };
};

function ColorMatrixNode({ id, data }: ColorMatrixNodeProps) {
  const { updateValues, updateType } = useStore(selector);
  return (
    <NodeContainer className="w-[270px]">
      <NodeHeader icon="􀮟" title="Color Matrix" />
      <NodeControlTray>
        <NodeSelect
          value={data.type.label}
          label="Type"
          onValueChange={(val) => updateType(id, val)}
        >
          {feColorMatrixTypes.map((type) => (
            <SelectItem key={id + "-" + type.key} value={type}>
              {type.label}
            </SelectItem>
          ))}
        </NodeSelect>
        <NodeRule />
        <NodeMatrixInput
          disabled={data.type.key !== "matrix"}
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

export default memo(ColorMatrixNode);
