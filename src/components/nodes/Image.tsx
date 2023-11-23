import { memo } from "react";
import { Container } from "../nodeParts/Container";
import useStore from "@state/store";
import { State, NodeMetadata, NodeState, XastElement } from "@/types";
import string from "@lib/string";
import { COLOR, NUMBER, STRING } from "@lib/attrTypes";

import { NodeProps } from "reactflow";
import { NumberInput } from "../nodeParts/NumberInput";
import { cloneDeep } from "lodash";
import { parseTarget } from "@/src/lib/parseTarget";
import { ColorInput } from "../nodeParts/ColorInput";

export const meta = {
	title: "Image",
	tagName: "feImage",
	nodeType: "image",
	icon: "􀏅",
	width: 220,
	mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feImage",
	cat: "",
	targets: [],
	sources: ["result"],
} as NodeMetadata;

function Image(props: NodeProps) {
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
			<TextInput
				title="Color"
				labelSpan="col-span-4"
				inputSpan="col-span-2"
				value={attributes.href.value}
				onChange={(v: number) => setAttr("attributes.href.value", v)}
			/>
		</Container>
	);
}

export const Node = memo(Image);

export const initialState = {
	tagName: meta.tagName,
	attributes: {
		href: {
			type: STRING,
			value: "",
		},
	},
	children: [],
} as NodeState["data"];

export function importer(node: XastElement) {
	const state = cloneDeep(initialState);
	if (node.attributes?.in1) {
		state.attributes.in1 = parseTarget.in1(node);
	}

	if (node.attributes.floodColor) {
		state.attributes.floodColor.value = string.toNumber(
			node.attributes.floodColor,
		);
	}

	if (node.attributes.floodOpacity) {
		state.attributes.floodOpacity.value = string.toNumber(
			node.attributes.floodOpacity,
		);
	}
	return state;
}
