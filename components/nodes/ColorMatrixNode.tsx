import React, { memo } from "react";
import { Position } from "reactflow";
import useStore, { NodeData, State } from "../../stores/store";
import { Container } from "../nodeParts/Container";
import { ControlGroup } from "../nodeParts/ControlGroup";
import { Divider } from "../nodeParts/Divider";
import { Footer } from "../nodeParts/Footer";
import { Handle } from "../nodeParts/Handle";
import { HandlePositioner } from "../nodeParts/HandlePositioner";
import { Header } from "../nodeParts/Header";
import { MatrixInput } from "../nodeParts/MatrixInput";
import { Select, SelectItem, SelectWithCategories } from "../nodeParts/Select";
import { colorMatrixTypes, ColorMatrixType, BlendNodeState, colorMatrixTypesByCategory } from "../../stores/colorMatrixNode";

const selector = (state: State) => state.colorMatrixNode;

type ColorMatrixNodeProps = BlendNodeState & {}

const mdn =
  "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix";

function ColorMatrixNode({ id, data, selected }: ColorMatrixNodeProps) {
  const { updateValues, updateType } = useStore(selector);
  const { deleteNode } = useStore((state) => state);

  return (
    <Container className="w-[270px]" selected={selected}>
      <Header icon="􀮟" title="Color Matrix" mdn={mdn} deleteNode={() => deleteNode(id)} />
      <ControlGroup>
      <SelectWithCategories
          categories={colorMatrixTypesByCategory}
          first
          value={data.type.label}
          label="Type"
          className="rounded-lg"
          onChange={(val: ColorMatrixType) => updateType(id, val)}
        />
        <Divider />
        <MatrixInput
          last
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
      </ControlGroup>

      <Footer />

      <HandlePositioner left>
        <Handle type="target" id="in" title="In" position={Position.Left} />
      </HandlePositioner>

      <HandlePositioner right>
        <Handle type="source" id="result" title="Result" position={Position.Right} />
      </HandlePositioner>
    </Container>
  );
}

export default memo(ColorMatrixNode);
