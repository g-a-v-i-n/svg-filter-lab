import React, { memo } from "react";
import { Position } from "reactflow";
import useStore, { NamedKey, State } from "../../stores/store";
import { Container } from "../nodeParts/Container";
import { ControlGroup } from "../nodeParts/ControlGroup";
import { Divider } from "../nodeParts/Divider";
import { Footer } from "../nodeParts/Footer";
import { Handle } from "../nodeParts/Handle";
import { HandlePositioner } from "../nodeParts/HandlePositioner";
import { Header } from "../nodeParts/Header";
import { NumberInput } from "../nodeParts/NumberInput";

const selector = (state: State) => state.gaussianBlurNode;

type ConvolutionMatrixProps = {
  id: string;
  data: {
    kernelMatrix: number[][];
  };
};

function GaussianBlurNode({ id, data, selected }: ConvolutionMatrixProps) {
  const {} = useStore(selector);
  const { deleteNode } = useStore((state) => state);

  return (
    <Container className="w-[230px] min-h-[104px]" selected={selected}>
      <Header icon="􀦸" title="Convolution Matrix" deleteNode={() => deleteNode(id)}/>
      <ControlGroup>
        <NumberInput label="Std Deviation" />
        <Divider />
        <NumberInput label="Std Deviation" />
      </ControlGroup>

      <Footer />

      <HandlePositioner left>
        <Handle type="target" id="in1" title="In" position={Position.Left} />
      </HandlePositioner>

      <HandlePositioner right>
        <Handle type="source" id="result" title="Result" position={Position.Right} />
      </HandlePositioner>
    </Container>
  );
}

export default memo(GaussianBlurNode);
