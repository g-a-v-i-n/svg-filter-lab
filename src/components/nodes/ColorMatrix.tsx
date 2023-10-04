import { memo } from "react";
import { Container } from "../nodeParts/Container";
import useStore from "@state/store";
import {
	State,
	Element,
	NodeState,
	Attribute,
	AttributeValue,
	AttributeType,
	XastElement,
} from "@/types";
import { Select, SelectItem, Separator } from "../nodeParts/Select";
import { NodeProps } from "reactflow";
import { MatrixInput } from "../nodeParts/MatrixInput";
import { NumberInput } from "../nodeParts/NumberInput";
import string from "@lib/string";
import { STRING, NUMBER, MATRIX } from "@lib/attrTypes";

export const meta = {
	title: "Color Matrix",
	tagName: "feColorMatrix",
	nodeType: "colorMatrix",
	icon: "􀟗",
	width: 240,
	attributeOrder: ["mode"],
	mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix",
	cat: "",
	inputs: ["in1"],
	outputs: ["result"],
};

function ColorMatrix(props: NodeProps) {
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
			<Select
				title="Type"
				value={data.ast.attributes.type.value}
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

			{data.ast.attributes.type.value === "matrix" && (
				<>
					<MatrixInput
						title="Values"
						rows={4}
						cols={5}
						onChange={(v: string, i: number, j: number) =>
							setAttr(
								`attributes.matrixValues.value[${i}][${j}]`,
								v as MatrixTypeKey,
							)
						}
						value={data.ast.attributes.matrixValues.value as number[][]}
					/>
				</>
			)}
			{data.ast.attributes.type.value === "saturate" && (
				<>
					<NumberInput
						title="Values"
						value={data.ast.attributes.saturateValues.value as number}
						onChange={(v: string) =>
							setAttr("attributes.saturateValues.value", v as string)
						}
					/>
				</>
			)}
			{data.ast.attributes.type.value === "hueRotate" && (
				<>
					<NumberInput
						title="Values"
						value={data.ast.attributes.hueRotateValues.value as number}
						onChange={(v: string) =>
							setAttr("attributes.hueRotateValues.value", v as string)
						}
					/>
				</>
			)}
			{data.ast.attributes.type.value === "luminanceToAlpha" && (
				<>
					<NumberInput
						title="Values"
						value={data.ast.attributes.luminanceToAlphaValues.value as number}
						onChange={(v: string) =>
							setAttr("attributes.luminanceToAlphaValues.value", v as string)
						}
					/>
				</>
			)}
		</Container>
	);
}

export const Node = memo(ColorMatrix);

export const defaultState = {
	ast: {
		tagName: "feColorMatrix",
		attributes: {
			type: {
				type: STRING,
				value: "matrix",
			},
			matrixValues: {
				type: MATRIX,
				aliasOf: "values",
				primary: (element: Element) =>
					element.attributes.type.value === "matrix",
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
	},
	children: [],
} as NodeState["data"];

export function importer(node: XastElement) {
	return {
		ast: {
			...defaultState.ast,
			attributes: {
				type: parse.type(node),
				matrixValues: parse.matrixValues(node),
				saturateValues: parse.saturateValues(node),
				hueRotateValues: parse.hueRotateValues(node),
				luminanceToAlphaValues: parse.luminanceToAlphaValues(node),
			},
		},
	};
}

const parse = {
	type: (node: XastElement): Attribute<AttributeValue, AttributeType> => {
		const attrValue = node.attributes?.type || null;
		const { ast } = defaultState.ast.attributes.type;

		if (attrValue === null) {
			return {
				...ast.attributes.type,
				value: null,
				// noValue: true,
			};
		}
		return {
			...ast.attributes.type,
			value: attrValue,
		};
	},
	matrixValues: (
		node: XastElement,
	): Attribute<AttributeValue, AttributeType> => {
		const selector = node.attributes?.type || null;
		const attrValue = node.attributes?.values || null;
		const { ast } = defaultState.ast.attributes.matrixValues;

		if (selector === "matrix" && attrValue) {
			return {
				...ast.attributes.matrixValues,
				value: string.toMatrix(attrValue, 4, 5),
			};
		}

		if (selector === "matrix" && !attrValue) {
			return {
				...ast.attributes.matrixValues,
				value: null,
				noValue: true,
			};
		}

		// If `type` is unset, it defaults to `matrix` per spec.
		if (selector === null) {
			return {
				...ast.attributes.matrixValues,
				value: null,
				noValue: true,
			};
		}

		if (selector !== "matrix") {
			return {
				...ast.attributes.matrixValues,
			};
		}
	},
	saturateValues: (
		node: XastElement,
	): Attribute<AttributeValue, AttributeType> => {
		const selector = node.attributes?.type || null;
		const attrValue = node.attributes?.values || null;
		if (selector === "matrix" && attrValue) {
			return {
				...defaultState.ast.attributes.matrixValues,
				value: string.toMatrix(attrValue, 4, 5),
			};
		}

		if (selector === "matrix" && !attrValue) {
			return {
				...defaultState.ast.attributes.matrixValues,
				value: null,
				noValue: true,
			};
		}

		if (selector !== "matrix") {
			return {
				...defaultState.ast.attributes.matrixValues,
			};
		}
	},
	hueRotateValues: (
		node: XastElement,
	): Attribute<AttributeValue, AttributeType> => {
		const values = node.attributes?.values || null;

		if (!values) {
			return {
				...defaultState.ast.attributes.hueRotateValues,
				value: null,
				noValue: true,
			};
		}
		return {
			...defaultState.ast.attributes.hueRotateValues,
			value: string.toNumber(values),
		};
	},
	luminanceToAlphaValues: (
		node: XastElement,
	): Attribute<AttributeValue, AttributeType> => {
		const values = node.attributes?.values || null;
		if (!values) {
			return {
				...defaultState.ast.attributes.luminanceToAlphaValues,
				value: null,
				noValue: true,
			};
		}
		return {
			...defaultState.ast.attributes.luminanceToAlphaValues,
			value: string.toNumber(values),
		};
	},
};
