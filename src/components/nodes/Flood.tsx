import { memo } from "react";
import { Container } from "../nodeParts/Container";
import useStore from "@state/store";
import { State, NodeMetadata, NodeState, XastElement, Color } from "@/types";
import string from "@lib/string";
import { COLOR, NUMBER, STRING } from "@lib/attrTypes";

import { NodeProps } from "reactflow";
import { NumberInput } from "../nodeParts/NumberInput";
import { cloneDeep } from "lodash";
import { parseTarget } from "@/src/lib/parseTarget";
import { ColorInput } from "../nodeParts/ColorInput";

export const meta = {
	title: "Flood",
	tagName: "feFlood",
	nodeType: "flood",
	icon: "􀣯",
	width: 220,
	mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFlood",
	cat: "",
	targets: [],
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
			<ColorInput
				title="Color"
				labelSpan="col-span-4"
				inputSpan="col-span-2"
				value={attributes["flood-color"].value}
				onChange={(v: Color) => setAttr("attributes.flood-color.value", v)}
			/>
			<NumberInput
				title="Opacity"
				labelSpan="col-span-4"
				inputSpan="col-span-2"
				value={attributes["flood-opacity"].value}
				onChange={(v: number) => setAttr("attributes.flood-opacity.value", v)}
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
		"flood-opacity": {
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

	if (node.attributes["flood-color"]) {
		state.attributes["flood-color"].value = string.toColor(
			node.attributes["flood-color"],
		);
	}

	if (node.attributes["flood-opacity"]) {
		state.attributes["flood-opacity"].value = string.toNumber(
			node.attributes["flood-opacity"],
		);
	}
	return state;
}
