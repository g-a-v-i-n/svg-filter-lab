import React, { memo } from "react";
import { Position } from "reactflow";
import useStore, { NamedKey, NodeData, State } from "../../stores/store";
import { Container } from "../nodeParts/Container";
import { ControlGroup } from "../nodeParts/ControlGroup";
import { Divider } from "../nodeParts/Divider";
import { Footer } from "../nodeParts/Footer";
import { Handle } from "../nodeParts/Handle";
import { HandlePositioner } from "../nodeParts/HandlePositioner";
import { Header } from "../nodeParts/Header";
import { MatrixInput } from "../nodeParts/MatrixInput";
import { Select, SelectItem } from "../nodeParts/Select";
import { colorMatrixTypes, BlendNodeState } from "../../stores/colorMatrixNode";

const selector = (state: State) => state.colorMatrixNode;

type ColorMatrixNodeProps = BlendNodeState & {}

const mdn =
  "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix";

function ColorMatrixNode({ id, data, selected }: ColorMatrixNodeProps) {
  const { updateValues, updateType } = useStore(selector);
  return (
    <Container className="w-[270px]" selected={selected}>
      <Header icon="􀮟" title="Color Matrix" mdn={mdn} />
      <ControlGroup>
        <Select
          first
          value={data.type.label}
          label="Type"
          onValueChange={(val) => updateType(id, val)}
        >
          {colorMatrixTypes.map((type, i) => (
            <>
              <SelectItem key={id + "-" + type.key} value={type}>
                {type.label}
              </SelectItem>
            </>
          ))}
        </Select>
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
