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
  NodeMatrixInput,
} from "./NodeParts";
import compositeModes from "../../lib/blendModes";
import useStore, { NamedKey, RFState } from "../../store/store";

const selector = (state: RFState) => state.convolutionMatrixNode;

type ConvolutionMatrixProps = {
  id: string;
  data: {
    kernelMatrix: number[][]
  };
};

function ConvolutionMatrixNode({ id, data }: ConvolutionMatrixProps) {
  const {
    updateKernelMatrix
  } = useStore(selector);
  return (
    <NodeContainer className="w-[230px] min-h-[104px]">
      <NodeHeader icon="􀦸" title="Convolution Matrix" />
      <NodeControlTray>
      <NodeMatrixInput
            rows={3}
            cols={3}
            label="Kernel Matrix"
            values={data.kernelMatrix}
            onChange={(value: number, i, j) => {
              const newValues = data.kernelMatrix.map((row: number[]) => [...row]);
              newValues[i][j] = value;
              updateKernelMatrix(id, newValues);
            }}
          />
      </NodeControlTray>

      <PreviewFooter />

      <HandlePositioner left>
        <StyledHandle
          type="target"
          id="in1"
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

export default memo(ConvolutionMatrixNode);
