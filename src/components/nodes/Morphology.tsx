import { memo } from "react";
import { Container } from "../nodeParts/Container";
import useStore from "@state/store";
import { State, NodeMetadata, NodeState, XastElement } from "@/types";
import string from "@lib/string";
import { NUMBER, STRING } from "@lib/attrTypes";

import { NodeProps } from "reactflow";
import { NumberInput } from "../nodeParts/NumberInput";
import { cloneDeep } from "lodash";
import { parseTarget } from "@/src/lib/parseTarget";
import { Select, SelectItem } from "../nodeParts/Select";

export const meta = {
	title: "Morphology",
	tagName: "feMorphology",
	nodeType: "morphology",
	icon: "􀟇",
	width: 220,
	mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feMorphology",
	cat: "",
	targets: ["in1"],
	sources: ["result"],
} as NodeMetadata;

function Flood(props: NodeProps) {
	const { id, selected, dragging } = props;
	const { data, setAttr } = useStore((state: State) => ({
		data: state.data[id],
		setAttr: state.setAttr(id),
	}));

	const containerProps = {
		id,
		selected,
		dragging,
		data,
		...meta,
	};

	const attributes = data.ast.attributes;

	return (
		<Container {...containerProps}>
			<Select
				title="Operator"
				value={attributes.operator.value}
				onValueChange={(v: string) =>
					setAttr("attributes.operator.value", v as "erode" | "dilate")
				}
			>
				<SelectItem value="erode">Erode</SelectItem>
				<SelectItem value="dilate">Dilate</SelectItem>
			</Select>
			<NumberInput
				title="Radius"
				labelSpan="col-span-4"
				inputSpan="col-span-2"
				value={attributes.radius.value}
				onChange={(v: number) => setAttr("attributes.radius.value", v)}
			/>
		</Container>
	);
}

export const Node = memo(Flood);

export const initialState = {
	tagName: meta.tagName,
	attributes: {
		in1: {
			type: STRING,
			value: "SourceGraphic",
		},
		operator: {
			type: STRING,
			value: "dilate",
		},
		radius: {
			type: NUMBER,
			value: 0,
		},
	},
	children: [],
} as NodeState["data"];

export function importer(node: XastElement) {
	const state = cloneDeep(initialState);
	if (node.attributes?.in1) {
		state.attributes.in1 = parseTarget.in1(node);
	}

	if (node.attributes.operator) {
		state.attributes.operator.value = node.attributes.operator;
	}

	if (node.attributes.radius) {
		state.attributes.radius.value = string.toNumber(node.attributes.radius);
	}
	return state;
}
