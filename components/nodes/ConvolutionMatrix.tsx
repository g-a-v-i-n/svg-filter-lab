import React, { memo } from "react";
import { Position } from "reactflow";
import useStore, { State } from "../../stores/store";
import { Container } from "../nodeParts/Container";
import { ControlGroup } from "../nodeParts/ControlGroup";
import { Footer } from "../nodeParts/Footer";
import { Handle } from "../nodeParts/Handle";
import { HandlePositioner } from "../nodeParts/HandlePositioner";
import { Header } from "../nodeParts/Header";
import { MatrixInput } from "../nodeParts/MatrixInput";
import { ConvolutionMatrixNodeState } from "../../stores/convolutionMatrixNode";

const selector = (state: State) => state.convolutionMatrixNode;

type ConvolutionMatrixProps = ConvolutionMatrixNodeState & {}

const mdn =
  "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feConvolutionMatrix";

function ConvolutionMatrixNode({ id, data, selected }: ConvolutionMatrixProps) {
  const { updateKernelMatrix } = useStore(selector);
  const { deleteNode } = useStore((state) => state);

  return (
    <Container className="w-[250px] min-h-[104px]" selected={selected}>
      <Header icon="􀦸" title="Convolution Matrix" mdn={mdn} deleteNode={() => deleteNode(id)}/>
      <ControlGroup>
        <MatrixInput
          rows={3}
          cols={3}
          label="Kernel Matrix"
          values={data.kernelMatrix}
          onChange={(value: number, i, j) => {
            const newValues = data.kernelMatrix.map((row: number[]) => [
              ...row,
            ]);
            newValues[i][j] = value;
            updateKernelMatrix(id, newValues);
          }}
        />
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

export default memo(ConvolutionMatrixNode);
