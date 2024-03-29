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

export const meta = {
	title: "Gaussian blur",
	tagName: "feGaussianBlur",
	nodeType: "gaussianBlur",
	icon: "􀴿",
	width: 220,
	mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feGaussianBlur",
	cat: "",
	targets: ["in1"],
	sources: ["result"],
} as NodeMetadata;

function GaussianBlur(props: NodeProps) {
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
				title="Std. deviation"
				labelSpan="col-span-4"
				inputSpan="col-span-2"
				value={attributes.stdDeviation.value}
				onChange={(v: number) => setAttr("attributes.stdDeviation.value", v)}
			/>
		</Container>
	);
}

export const Node = memo(GaussianBlur);

export const initialState = {
	tagName: meta.tagName,
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
} as NodeState["data"];

export function importer(node: XastElement) {
	const state = cloneDeep(initialState);
	if (node.attributes?.in1) {
		state.attributes.in1 = parseTarget.in1(node);
	}

	if (node.attributes.stdDeviation) {
		state.attributes.stdDeviation.value = string.toNumber(
			node.attributes.stdDeviation,
		);
	}
	return state;
}
