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
import { ColorInput } from "../nodeParts/ColorInput";

export const meta = {
	title: "Offset",
	tagName: "feOffset",
	nodeType: "offset",
	icon: "􀟦",
	width: 220,
	mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDropShadow",
	cat: "",
	targets: ["in1"],
	sources: ["result"],
} as NodeMetadata;

function Offset(props: NodeProps) {
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
			<NumberInput
				title="dX"
				labelSpan="col-span-4"
				inputSpan="col-span-2"
				value={attributes.dx.value}
				onChange={(v: number) => setAttr("attributes.dx.value", v)}
			/>
			<NumberInput
				title="dY"
				labelSpan="col-span-4"
				inputSpan="col-span-2"
				value={attributes.dy.value}
				onChange={(v: number) => setAttr("attributes.dy.value", v)}
			/>
		</Container>
	);
}

export const Node = memo(Offset);

export const initialState = {
	tagName: meta.tagName,
	attributes: {
		in1: {
			type: STRING,
			value: "SourceGraphic",
		},
		dx: {
			type: NUMBER,
			value: 0,
		},
		dy: {
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

	if (node.attributes.dx) {
		state.attributes.dx.value = string.toNumber(node.attributes.dx);
	}

	if (node.attributes.dy) {
		state.attributes.dy.value = string.toNumber(node.attributes.dy);
	}
	return state;
}
