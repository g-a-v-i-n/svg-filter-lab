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

export const meta = {
	title: "GaussianBlur",
	tagName: "feGaussianBlur",
	nodeType: "gaussianBlur",
	icon: "􀴿",
	width: 200,
	mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feGaussianBlur",
	cat: "",
	inputs: ["in1"],
	outputs: ["result"],
} as NodeMetadata;

function GaussianBlur(props: NodeProps) {
	const { id, data, selected, dragging } = props;

	const containerProps = {
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
	if (node.attributes.stdDeviation) {
		state.ast.attributes.stdDeviation.value = string.toNumber(
			node.attributes.stdDeviation,
		);
	}
	return state;
}
