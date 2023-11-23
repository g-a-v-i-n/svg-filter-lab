import { memo } from "react";
import { Container } from "../nodeParts/Container";
import useStore from "@state/store";
import { State, NodeMetadata, NodeState, XastElement } from "@/types";
import string from "@lib/string";
import { NUMBER, STRING, COLOR } from "@lib/attrTypes";

import { NodeProps } from "reactflow";
import { NumberInput } from "../nodeParts/NumberInput";
import { cloneDeep } from "lodash";
import { parseTarget } from "@/src/lib/parseTarget";
import { ColorInput } from "../nodeParts/ColorInput";

export const meta = {
	title: "Drop shadow",
	tagName: "feDropShadow",
	nodeType: "dropShadow",
	icon: "􀣽",
	width: 220,
	mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDropShadow",
	cat: "",
	targets: ["in1"],
	sources: ["result"],
} as NodeMetadata;

function DropShadow(props: NodeProps) {
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
			<NumberInput
				title="Std. deviation"
				labelSpan="col-span-4"
				inputSpan="col-span-2"
				value={attributes.stdDeviation.value}
				onChange={(v: number) => setAttr("attributes.stdDeviation.value", v)}
			/>
			<ColorInput
				title="Color"
				labelSpan="col-span-4"
				inputSpan="col-span-2"
				value={attributes["flood-color"].value}
				onChange={(v: number) => setAttr("attributes.flood-color.value", v)}
			/>
			<NumberInput
				title="Opacity"
				labelSpan="col-span-4"
				inputSpan="col-span-2"
				value={attributes.floodOpacity.value}
				onChange={(v: number) => setAttr("attributes.floodOpacity.value", v)}
			/>
		</Container>
	);
}

export const Node = memo(DropShadow);

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
		stdDeviation: {
			type: NUMBER,
			value: 0,
		},
		"flood-color": {
			type: COLOR,
			value: {
				type: "rgb",
				value: {
					r: 0,
					g: 0,
					b: 0,
				},
			},
		},
		floodOpacity: {
			type: NUMBER,
			value: 1,
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

	if (node.attributes.stdDeviation) {
		state.attributes.stdDeviation.value = string.toNumber(
			node.attributes.stdDeviation,
		);
	}

	if (node.attributes["flood-color"]) {
		state.attributes["flood-color"].value = string.toColor(
			node.attributes["flood-color"],
		);
	}

	if (node.attributes.floodOpacity) {
		state.attributes.floodOpacity.value = string.toNumber(
			node.attributes.floodOpacity,
		);
	}
	return state;
}
