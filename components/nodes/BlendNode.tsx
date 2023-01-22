import React, { memo } from "react";
import { Position } from "reactflow";
import useStore, { NamedKey, State } from "../../stores/store";
import { Container } from "../nodeParts/Container";
import { ControlGroup } from "../nodeParts/ControlGroup";
import { Footer } from "../nodeParts/Footer";
import { Handle } from "../nodeParts/Handle";
import { HandlePositioner } from "../nodeParts/HandlePositioner";
import { Header } from "../nodeParts/Header";
import { Select, SelectItem, Separator } from "../nodeParts/Select";
import { blendModes, BlendNodeState, BlendMode } from "../../stores/blendNode";

const selector = (state: State) => state.blendNode;

type BlendNodeProps = BlendNodeState & {};

const mdn = "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feBlend";

function BlendNode({ id, data, selected }: BlendNodeProps) {
  const { updateMode } = useStore(selector);
  return (
    <Container className="w-[210px] h-[104px]" selected={selected}>
      <Header icon="􀟗" title="Blend" mdn={mdn} />
      <ControlGroup>
        <Select
          first
          last
          value={data.mode.label}
          label="Mode"
          className="rounded-lg"
          onValueChange={(val: BlendMode) => updateMode(id, val)}
        >
          {blendModes.map((mode, i) => (
            <>
              {mode.category !== blendModes[i - 1]?.category && i !== 0 && (
                <Separator />
              )}

              <SelectItem key={id + "-" + mode.key} value={mode}>
                {mode.label}
              </SelectItem>
            </>
          ))}
        </Select>
      </ControlGroup>

      <Footer />

      <HandlePositioner left>
        <Handle type="target" id="in1" title="In 1" position={Position.Left} />
        <Handle type="target" id="in2" title="In 2" position={Position.Left} />
      </HandlePositioner>

      <HandlePositioner right>
        <Handle type="source" id="out" title="Out" position={Position.Right} />
      </HandlePositioner>
    </Container>
  );
}

export default memo(BlendNode);
