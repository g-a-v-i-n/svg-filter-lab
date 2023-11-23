import { memo } from "react";
import { Container } from "../nodeParts/Container";
import useStore from "@state/store";
import { State, NodeMetadata, NodeState, XastElement } from "@/types";
import { Select, SelectItem } from "../nodeParts/Select";
import { NUMBER, STRING } from "@lib/attrTypes";

import { NodeProps } from "reactflow";
import { NumberInput } from "../nodeParts/NumberInput";
import { cloneDeep } from "lodash";
import { parseTarget } from "@/src/lib/parseTarget";

export const meta = {
	title: "Displacement map",
	tagName: "feDisplacementMap",
	nodeType: "displacementMap",
	icon: "􁁬",
	width: 220,
	mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDisplacementMap",
	cat: "",
	targets: ["in1", "in2"],
	sources: ["result"],
} as NodeMetadata;

function DisplacementMap(props: NodeProps) {
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
				title="Scale"
				value={attributes.scale.value}
				onChange={(v: number) => setAttr("attributes.scale.value", v)}
			/>

			<Select
				title="X channel"
				value={attributes.xChannelSelector.value}
				onValueChange={(v: string) => {
					setAttr("attributes.xChannelSelector.value", v as string);
				}}
			>
				<SelectItem value="R">Red</SelectItem>
				<SelectItem value="G">Green</SelectItem>
				<SelectItem value="B">Blue</SelectItem>
				<SelectItem value="A">Alpha</SelectItem>
			</Select>

			<Select
				title="Y channel"
				value={attributes.yChannelSelector.value}
				onValueChange={(v: string) => {
					setAttr("attributes.yChannelSelector.value", v as string);
				}}
			>
				<SelectItem value="R">Red</SelectItem>
				<SelectItem value="G">Green</SelectItem>
				<SelectItem value="B">Blue</SelectItem>
				<SelectItem value="A">Alpha</SelectItem>
			</Select>
		</Container>
	);
}

export const Node = memo(DisplacementMap);

export const initialState = {
	tagName: meta.tagName,
	attributes: {
		in1: {
			type: STRING,
			value: "SourceGraphic",
		},
		in2: {
			type: STRING,
			value: "SourceGraphic",
		},
		scale: {
			type: NUMBER,
			value: 0,
		},
		xChannelSelector: {
			type: STRING,
			value: "A",
		},
		yChannelSelector: {
			type: STRING,
			value: "A",
		},
	},
	children: [],
} as NodeState["data"];

export function importer(node: XastElement) {
	const state = cloneDeep(initialState);

	if (node.attributes?.in1) {
		state.attributes.in1 = parseTarget.in1(node);
	}

	if (node.attributes?.in2) {
		state.attributes.in2 = parseTarget.in2(node);
	}

	if (node.attributes?.scale) {
		state.attributes.scale.value = node.attributes.scale;
	}

	if (node.attributes?.xChannelSelector) {
		state.attributes.xChannelSelector.value = node.attributes.xChannelSelector;
	}

	if (node.attributes?.yChannelSelector) {
		state.attributes.yChannelSelector.value = node.attributes.yChannelSelector;
	}

	return state;
}
