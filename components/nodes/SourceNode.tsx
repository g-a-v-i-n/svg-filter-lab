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
import { NodeState, metadata } from "../../state/nodes/source";

const selector = (state: State) => state.sourceNode;

type NodeProps = NodeState & {};

function SourceNode({ id, data }: NodeProps) {
  const { updateSource } = useStore(selector);

  console.log(data);

  return (
    <Container className="w-[250px] h-[104px]">
      <Header
        icon={metadata.icon}
        title={metadata.title}
        mdn={metadata.mdn}
        id={id}
      />
      <ControlGroup>
        <Select
          name="Source"
          value={data.source}
          onValueChange={(val: string) => updateSource(id, val)}
          className="rounded-t-lg"
        >
          <SelectItem value="SourceGraphic">Source Graphic</SelectItem>
          <SelectItem value="SourceAlpha">Source Alpha</SelectItem>
          <Separator />
          <SelectItem value="BackgroundImage">Background Image</SelectItem>
          <SelectItem value="BackgroundAlpha">Background Alpha</SelectItem>
          <Separator />
          <SelectItem value="FillPaint">Fill Paint</SelectItem>
          <SelectItem value="StrokePaint">Stroke Paint</SelectItem>
        </Select>
      </ControlGroup>

      <Footer />

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

export default memo(SourceNode);
