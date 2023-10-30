import { memo } from "react";
import { Container } from "../nodeParts/Container";
import useStore from "@state/store";
import { State, NodeMetadata, NodeState, XastElement } from "@/types";
import { Select, SelectItem } from "../nodeParts/Select";
import string from "@lib/string";
import { NUMBER, STRING } from "@lib/attrTypes";

import { NodeProps } from "reactflow";
import { NumberInput } from "../nodeParts/NumberInput";
import { cloneDeep } from "lodash";
import { parseInput } from "@/src/lib/parseInput";

export const meta = {
	title: "Displacement map",
	tagName: "feDisplacementMap",
	nodeType: "displacementMap",
	icon: "􁁬",
	width: 200,
	mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feComposite",
	cat: "",
	targets: ["in1", "in2"],
	sources: ["result"],
} as NodeMetadata;

function DisplacementMap(props: NodeProps) {
	const { id, data, selected, dragging } = props;

	const containerProps = {
		data,
		id,
		selected,
		dragging,
		...meta,
	};

	const setAttr = useStore((state: State) => state.setAttr(id));

	return (
		<Container {...containerProps}>
			<NumberInput
				title="Scale"
				value={data.ast.attributes.scale.value}
				onChange={(v: number) => setAttr("attributes.scale.value", v)}
			/>

			<Select
				title="X channel"
				value={data.ast.attributes.xChannel.value}
				onValueChange={(v: string) => {
					setAttr("attributes.xChannel.value", v as string);
				}}
			>
				<SelectItem value="R">Red</SelectItem>
				<SelectItem value="G">Green</SelectItem>
				<SelectItem value="B">Blue</SelectItem>
				<SelectItem value="A">Alpha</SelectItem>
			</Select>

			<Select
				title="Y channel"
				value={data.ast.attributes.yChannel.value}
				onValueChange={(v: string) => {
					setAttr("attributes.yChannel.value", v as string);
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
	ast: {
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
			xChannel: {
				type: STRING,
				value: "A",
			},
			yChannel: {
				type: STRING,
				value: "A",
			},
		},
		children: [],
	},
} as NodeState["data"];

export function importer(node: XastElement) {
	const state = cloneDeep(initialState);

	if (node.attributes?.in1) {
		state.ast.attributes.in1 = parseInput.in1(node);
	}

	if (node.attributes?.in2) {
		state.ast.attributes.in2 = parseInput.in2(node);
	}

	if (node.attributes?.scale) {
		state.ast.attributes.scale.value = node.attributes.scale;
	}

	if (node.attributes?.xChannel) {
		state.ast.attributes.xChannel.value = node.attributes.xChannel;
	}

	if (node.attributes?.yChannel) {
		state.ast.attributes.yChannel.value = node.attributes.yChannel;
	}

	return state;
}
