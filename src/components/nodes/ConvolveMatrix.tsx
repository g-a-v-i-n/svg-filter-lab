import { memo } from "react";
import { Container } from "../nodeParts/Container";
import useStore from "@state/store";
import { State, NodeMetadata, NodeState, XastElement } from "@/types";
import { NUMBER, STRING } from "@lib/attrTypes";

import { NodeProps } from "reactflow";
import { cloneDeep } from "lodash";
import { parseTarget } from "@lib/parseTarget";
import { StringInput } from "../nodeParts/StringInput";
import { NumberInput } from "../nodeParts/NumberInput";
import { Select, SelectItem } from "../nodeParts/Select";
import string from "@lib/string";

export const meta = {
	title: "Convolve matrix",
	tagName: "feConvolveMatrix",
	nodeType: "convolveMatrix",
	icon: "􀦸",
	width: 220,
	mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feConvolveMatrix",
	cat: "",
	targets: ["in1"],
	sources: ["result"],
} as NodeMetadata;

function ConvolveMatrix(props: NodeProps) {
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
			<StringInput
				title="Kernel matrix"
				labelSpan="col-span-4"
				inputSpan="col-span-2"
				value={attributes.kernelMatrix.value}
				onChange={(v: string) => setAttr("attributes.kernelMatrix.value", v)}
			/>
			<NumberInput
				title="Order"
				labelSpan="col-span-4"
				inputSpan="col-span-2"
				value={attributes.order.value}
				onChange={(v: number) => setAttr("attributes.order.value", v)}
			/>
			<NumberInput
				title="Divisor"
				labelSpan="col-span-4"
				inputSpan="col-span-2"
				value={attributes.divisor.value}
				onChange={(v: number) => setAttr("attributes.divisor.value", v)}
			/>
			<NumberInput
				title="Bias"
				labelSpan="col-span-4"
				inputSpan="col-span-2"
				value={attributes.bias.value}
				onChange={(v: number) => setAttr("attributes.bias.value", v)}
			/>
			<NumberInput
				title="Target X"
				labelSpan="col-span-4"
				inputSpan="col-span-2"
				value={attributes.targetX.value}
				onChange={(v: number) => setAttr("attributes.targetX.value", v)}
			/>
			<NumberInput
				title="Target Y"
				labelSpan="col-span-4"
				inputSpan="col-span-2"
				value={attributes.targetY.value}
				onChange={(v: number) => setAttr("attributes.targetY.value", v)}
			/>
			<Select
				title="Edge mode"
				value={attributes.edgeMode.value}
				onValueChange={(v: string) =>
					setAttr(
						"attributes.edgeMode.value",
						v as "duplicate" | "wrap" | "none",
					)
				}
			>
				<SelectItem value="duplicate">Duplicate</SelectItem>
				<SelectItem value="wrap">Wrap</SelectItem>
				<SelectItem value="none">None</SelectItem>
			</Select>
			<NumberInput
				title="Kernal unit length"
				labelSpan="col-span-4"
				inputSpan="col-span-2"
				value={attributes.kernelUnitLength.value}
				onChange={(v: number) =>
					setAttr("attributes.kernelUnitLength.value", v)
				}
			/>
			{/* <Select
				title="Kernel unit length"
				value={attributes.kernelUnitLength.value}
				onValueChange={(v: string) =>
					setAttr(
						"attributes.kernelUnitLength.value",
						v as "userSpaceOnUse" | "objectBoundingBox",
					)
				}
			>
				<SelectItem value="userSpaceOnUse">User space on use</SelectItem>
				<SelectItem value="objectBoundingBox">Object bounding box</SelectItem>
			</Select> */}
		</Container>
	);
}

export const Node = memo(ConvolveMatrix);

export const initialState = {
	tagName: meta.tagName,
	attributes: {
		in1: {
			type: STRING,
			value: "SourceGraphic",
		},
		kernelMatrix: {
			type: STRING,
			value: "",
		},
		order: {
			type: NUMBER,
			value: 0,
		},
		divisor: {
			type: NUMBER,
			value: 0,
		},
		bias: {
			type: NUMBER,
			value: 0,
		},
		targetX: {
			type: NUMBER,
			value: 0,
		},
		targetY: {
			type: NUMBER,
			value: 0,
		},
		edgeMode: {
			type: STRING,
			value: "duplicate",
		},
		kernelUnitLength: {
			type: NUMBER,
			value: 3,
		},
	},
	children: [],
} as NodeState["data"];

export function importer(node: XastElement) {
	const state = cloneDeep(initialState);
	if (node.attributes?.in1) {
		state.attributes.in1 = parseTarget.in1(node);
	}

	if (node.attributes.kernelMatrix) {
		state.attributes.kernelMatrix.value = node.attributes.kernelMatrix;
	}

	if (node.attributes.order) {
		state.attributes.order.value = string.toNumber(node.attributes.order);
	}

	if (node.attributes.divisor) {
		state.attributes.divisor.value = string.toNumber(node.attributes.divisor);
	}

	if (node.attributes.bias) {
		state.attributes.bias.value = string.toNumber(node.attributes.bias);
	}

	if (node.attributes.targetX) {
		state.attributes.targetX.value = string.toNumber(node.attributes.targetX);
	}

	if (node.attributes.targetY) {
		state.attributes.targetY.value = string.toNumber(node.attributes.targetY);
	}

	if (node.attributes.edgeMode) {
		state.attributes.edgeMode.value = node.attributes.edgeMode;
	}

	if (node.attributes.kernelUnitLength) {
		state.attributes.kernelUnitLength.value = string.toNumber(
			node.attributes.kernelUnitLength,
		);
	}

	return state;
}
