import React, { memo } from "react";
import { Position } from "reactflow";
import useStore, { State } from "../../state/store";
import { Container } from "../nodeParts/Container";
import { ControlGroup } from "../nodeParts/ControlGroup";
import { Footer } from "../nodeParts/Footer";
import { Handle } from "../nodeParts/Handle";
import { HandlePositioner } from "../nodeParts/HandlePositioner";
import { Header } from "../nodeParts/Header";
import { Select, SelectItem, Separator } from "../nodeParts/Select";
import { NodeState, metadata } from "../../state/nodes/blend";

const selector = (state: State) => state.blendNode;

type NodeProps = NodeState & {};

function BlendNode(props: NodeProps) {
  const { id, data } = props;
  const { updateMode } = useStore(selector);

  return (
    <Container className="w-[210px] h-[104px]">
      <Header
        icon={metadata.icon}
        title={metadata.title}
        mdn={metadata.mdn}
        id={id}
      />
      <ControlGroup>
        <Select
          name="Mode"
          value={data.mode}
          onValueChange={(val: string) => updateMode(id, val)}
          className="rounded-lg"
        >
          <SelectItem value="normal">Normal</SelectItem>
          <Separator />
          <SelectItem value="darken">Darken</SelectItem>
          <SelectItem value="multiply">Multiply</SelectItem>
          <SelectItem value="color-burn">Color Burn</SelectItem>
          <Separator />
          <SelectItem value="lighten">Lighten</SelectItem>
          <SelectItem value="screen">Screen</SelectItem>
          <SelectItem value="color-dodge">Color Dodge</SelectItem>

          <Separator />

          <SelectItem value="overlay">Overlay</SelectItem>
          <SelectItem value="soft-light">Soft Light</SelectItem>
          <SelectItem value="hard-light">Hard Light</SelectItem>

          <Separator />
          <SelectItem value="difference">Difference</SelectItem>
          <SelectItem value="exclusion">Exclusion</SelectItem>

          <Separator />
          <SelectItem value="hue">Hue</SelectItem>
          <SelectItem value="saturation">Saturation</SelectItem>
          <SelectItem value="color">Color</SelectItem>
          <SelectItem value="luminosity">Luminosity</SelectItem>
        </Select>
      </ControlGroup>

      <Footer />

      <HandlePositioner left>
        <Handle type="target" id="in1" title="In 1" position={Position.Left} />
        <Handle type="target" id="in2" title="In 2" position={Position.Left} />
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

export default memo(BlendNode);
