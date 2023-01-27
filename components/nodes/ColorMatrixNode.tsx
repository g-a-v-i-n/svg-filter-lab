import React, { memo } from "react";
import { Position } from "reactflow";
import useStore, { State } from "../../state/store";
import { Container } from "../nodeParts/Container";
import { ControlGroup } from "../nodeParts/ControlGroup";
import { Divider } from "../nodeParts/Divider";
import { Footer } from "../nodeParts/Footer";
import { Handle } from "../nodeParts/Handle";
import { HandlePositioner } from "../nodeParts/HandlePositioner";
import { Header } from "../nodeParts/Header";
import { MatrixInput } from "../nodeParts/MatrixInput";
import { Select, SelectItem, Separator } from "../nodeParts/Select";
import { NodeState, metadata } from "../../state/nodes/colorMatrix";

const selector = (state: State) => state.colorMatrixNode;

type NodeProps = NodeState & {};

function ColorMatrixNode({ id, data, selected }: NodeProps) {
  const { updateValues, updateType } = useStore(selector);

  return (
    <Container className="w-[270px]">
      <Header
        icon={metadata.icon}
        title={metadata.title}
        mdn={metadata.mdn}
        id={id}
      />
      <ControlGroup>
        <Select
          name="Type"
          value={data.type}
          onValueChange={(val: string) => updateType(id, val)}
          className="rounded-t-lg"
        >
          <SelectItem value="matrix">Matrix</SelectItem>
          <Separator />
          <SelectItem value="saturate">Saturate</SelectItem>
          <SelectItem value="hueRotate">Hue Rotate</SelectItem>
          <SelectItem value="luminanceToAlpha">Luminance to Alpha</SelectItem>
        </Select>
        <Divider />
        <MatrixInput
          last
          disabled={data.type !== "matrix"}
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
        <Handle
          type="source"
          id="result"
          title="Result"
          position={Position.Right}
        />
      </HandlePositioner>
    </Container>
  );
}

export default memo(ColorMatrixNode);
