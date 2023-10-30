import { memo } from "react";
import { Container } from "../nodeParts/Container";
import useStore from "@state/store";
import { State, NodeMetadata, NodeState, XastElement } from "@/types";
import { Select, SelectItem, Separator } from "../nodeParts/Select";
import string from "@lib/string";
import { NUMBER, STRING } from "@lib/attrTypes";

import { NodeProps } from "reactflow";
import { NumberInput } from "../nodeParts/NumberInput";
import { cloneDeep } from "lodash";
import { parseInput } from "@/src/lib/parseInput";

export const meta = {
	title: "GaussianBlur",
	tagName: "feGaussianBlur",
	nodeType: "gaussianBlur",
	icon: "􀴿",
	width: 200,
	mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feGaussianBlur",
	cat: "",
	targets: ["in1"],
	sources: ["result"],
} as NodeMetadata;

function GaussianBlur(props: NodeProps) {
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
				title="Std. deviation"
				labelSpan="col-span-4"
				inputSpan="col-span-2"
				value={data.ast.attributes.stdDeviation.value}
				onChange={(v: number) => setAttr("attributes.stdDeviation.value", v)}
			/>
		</Container>
	);
}

export const Node = memo(GaussianBlur);

export const initialState = {
	ast: {
		tagName: "feGaussianBlur",
		attributes: {
			in1: {
				type: STRING,
				value: "SourceGraphic",
			},
			stdDeviation: {
				type: NUMBER,
				value: 0,
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

	if (node.attributes.stdDeviation) {
		state.ast.attributes.stdDeviation.value = string.toNumber(
			node.attributes.stdDeviation,
		);
	}
	return state;
}
