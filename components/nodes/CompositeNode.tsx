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
import { Select, SelectItem } from "../nodeParts/Select";
import { compositeOperators, CompositeNodeState } from "../../stores/compositeNode";

const selector = (state: State) => state.compositeNode;

type CompositeNodeProps = CompositeNodeState & {};

const mdn =
  "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feComposite";

function CompositeNode({ id, data, selected }: CompositeNodeProps) {
  const { updateOperator, updateK1, updateK2, updateK3, updateK4 } =
    useStore(selector);
    const { deleteNode } = useStore((state) => state);

  return (
    <Container className="w-[210px] min-h-[104px]" selected={selected}>
      <Header icon="􀯮" title="Composite" mdn={mdn} deleteNode={() => deleteNode(id)}/>
      <ControlGroup>
        <Select
          first
          last={data.operator.key !== "arithmetic"}
          value={data.operator.label}
          label="Operator"
          onValueChange={(val: NamedKey) => updateOperator(id, val)}
        >
          {compositeOperators.map((operator) => (
            <SelectItem key={id + "-" + operator.key} value={operator}>
              {operator.label}
            </SelectItem>
          ))}
        </Select>

        {data.operator.key === "arithmetic" && (
          <>
            <Divider />
            <NumberInput
              label="K1"
              value={data.k1}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateK1(id, e.target.value)
              }
            />
            <Divider />
            <NumberInput
              label="K2"
              value={data.k2}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateK2(id, e.target.value)
              }
            />
            <Divider />
            <NumberInput
              label="K3"
              value={data.k3}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateK3(id, e.target.value)
              }
            />
            <Divider />
            <NumberInput
              last
              label="K4"
              value={data.k4}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateK4(id, e.target.value)
              }
            />
          </>
        )}
      </ControlGroup>

      <Footer />

      <HandlePositioner left>
        <Handle type="target" id="in1" title="In 1" position={Position.Left} />
        <Handle type="target" id="in2" title="In 2" position={Position.Left} />
      </HandlePositioner>

      <HandlePositioner right>
        <Handle type="source" id="result" title="Result" position={Position.Right} />
      </HandlePositioner>
    </Container>
  );
}

export default memo(CompositeNode);
