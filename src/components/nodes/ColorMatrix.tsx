import { memo } from "react";
import { Container } from "../nodeParts/Container";
import useStore from "@state/store";
import { State, Element, NodeState, XastElement } from "@/types";
import { Select, SelectItem, Separator } from "../nodeParts/Select";
import { NodeProps } from "reactflow";
import { MatrixInput } from "../nodeParts/MatrixInput";
import { NumberInput } from "../nodeParts/NumberInput";
import string from "@lib/string";
import { STRING, NUMBER, MATRIX } from "@lib/attrTypes";
import { cloneDeep } from "lodash";
import { parseTarget } from "@/src/lib/parseTarget";

export const meta = {
	title: "Color Matrix",
	tagName: "feColorMatrix",
	nodeType: "colorMatrix",
	icon: "􀝦",
	width: 220,
	mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix",
	cat: "",
	targets: ["in1"],
	sources: ["result"],
};

function ColorMatrix(props: NodeProps) {
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
			<Select
				title="Type"
				value={attributes.type.value}
				onValueChange={(v: string) =>
					setAttr("attributes.type", {
						type: "string",
						value: v as MatrixTypeKey,
					})
				}
			>
				<SelectItem value="matrix">Matrix</SelectItem>
				<Separator />
				<SelectItem value="saturate">Saturate</SelectItem>
				<SelectItem value="hueRotate">Hue Rotate</SelectItem>
				<SelectItem value="luminanceToAlpha">Luminance to Alpha</SelectItem>
			</Select>

			{attributes.type.value === "matrix" && (
				<>
					<MatrixInput
						title="Values"
						rows={4}
						cols={5}
						onChange={(v: number, i: number, j: number) =>
							setAttr(`attributes.matrixValues.value[${i}][${j}]`, v as number)
						}
						value={attributes.matrixValues.value as number[][]}
					/>
				</>
			)}
			{attributes.type.value === "saturate" && (
				<>
					<NumberInput
						title="Values"
						value={attributes.saturateValues.value as number}
						onChange={(v: number) =>
							setAttr("attributes.saturateValues.value", v as number)
						}
					/>
				</>
			)}
			{attributes.type.value === "hueRotate" && (
				<>
					<NumberInput
						title="Values"
						value={attributes.hueRotateValues.value as number}
						onChange={(v: number) =>
							setAttr("attributes.hueRotateValues.value", v as number)
						}
					/>
				</>
			)}
			{attributes.type.value === "luminanceToAlpha" && (
				<>
					<NumberInput
						title="Values"
						value={attributes.luminanceToAlphaValues.value as number}
						onChange={(v: number) =>
							setAttr("attributes.luminanceToAlphaValues.value", v as number)
						}
					/>
				</>
			)}
		</Container>
	);
}

export const Node = memo(ColorMatrix);

export const initialState = {
	tagName: meta.tagName,
	attributes: {
		in1: {
			type: STRING,
			value: "SourceGraphic",
		},
		type: {
			type: STRING,
			value: "matrix",
		},
		matrixValues: {
			type: MATRIX,
			aliasOf: "values",
			primary: (element: Element) => element.attributes.type.value === "matrix",
			value: [
				[1, 0, 0, 0, 0],
				[0, 1, 0, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 1, 0],
			],
		},
		saturateValues: {
			type: NUMBER,
			aliasOf: "values",
			primary: (element: Element) =>
				element.attributes.type.value === "saturate",
			value: 1,
		},
		hueRotateValues: {
			type: NUMBER,
			aliasOf: "values",
			primary: (element: Element) =>
				element.attributes.type.value === "hueRotate",
			value: 1,
		},
		luminanceToAlphaValues: {
			type: NUMBER,
			aliasOf: "values",
			primary: (element: Element) =>
				element.attributes.type.value === "luminanceToAlpha",
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

	if (node.attributes?.type) {
		state.attributes.type.value = node.attributes.type;
	}

	if (state.attributes.type.value === "matrix") {
		if (node.attributes.values) {
			state.attributes.matrixValues.value = string.toMatrix(
				node.attributes.values,
				4,
				5,
			);
		}
	}

	if (state.attributes.type.value === "saturate") {
		if (node.attributes.values) {
			state.attributes.saturateValues.value = string.toNumber(
				node.attributes.values,
			);
		}
	}

	if (state.attributes.type.value === "hueRotate") {
		if (node.attributes.values) {
			state.attributes.hueRotateValues.value = string.toNumber(
				node.attributes.values,
			);
		}
	}

	if (state.attributes.type.value === "luminanceToAlpha") {
		if (node.attributes.values) {
			state.attributes.luminanceToAlphaValues.value = string.toNumber(
				node.attributes.values,
			);
		}
	}

	return state;
}
