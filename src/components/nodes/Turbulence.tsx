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
	title: "Turbulence",
	tagName: "feTurbulence",
	nodeType: "turbulence",
	icon: "􁎄",
	width: 230,
	// attributeOrder: ["mode"],
	mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feBlend",
	cat: "",
	inputs: [],
	outputs: ["result"],
} as NodeMetadata;

function Turbulence(props: NodeProps) {
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
					setAttr("attributes.type.value", v as string)
				}
			>
				<SelectItem value="fractalNoise">Fractal noise</SelectItem>
				<SelectItem value="turbulence">Turbulence</SelectItem>
			</Select>

			<NumberInput
				title="Base freq."
				value={data.ast.attributes.baseFrequency.value}
				onChange={(v: number) => setAttr("attributes.baseFrequency.value", v)}
			/>
			<NumberInput
				title="Num. octaves"
				value={data.ast.attributes.numOctaves.value}
				onChange={(v: number) => setAttr("attributes.numOctaves.value", v)}
			/>
			<NumberInput
				title="Seed"
				value={data.ast.attributes.seed.value}
				onChange={(v: number) => setAttr("attributes.seed.value", v)}
			/>
			<Select
				title="Stitch tiles"
				value={data.ast.attributes.stitchTiles.value}
				onValueChange={(v: string) =>
					setAttr("attributes.stitchTiles.value", v as string)
				}
			>
				<SelectItem value="stitch">Stitch</SelectItem>
				<SelectItem value="noStitch">No stitch</SelectItem>
			</Select>
		</Container>
	);
}

export const Node = memo(Turbulence);

export const initialState = {
	ast: {
		tagName: "feTurbulence",
		attributes: {
			type: {
				type: STRING,
				value: "turbulence",
			},
			baseFrequency: {
				type: NUMBER,
				value: 0.01,
			},
			numOctaves: {
				type: NUMBER,
				value: 1,
			},
			seed: {
				type: NUMBER,
				value: 0,
			},
			stitchTiles: {
				type: STRING,
				value: "noStitch",
			},
		},
		children: [],
	},
} as NodeState["data"];

export function importer(node: XastElement) {
	const state = cloneDeep(initialState);

	if (node.attributes?.type) {
		state.ast.attributes.type.value = node.attributes.type;
	}

	if (node.attributes?.baseFrequency) {
		state.ast.attributes.baseFrequency.value = string.toNumber(
			node.attributes.baseFrequency,
		);
	}

	if (node.attributes?.numOctaves) {
		state.ast.attributes.numOctaves.value = string.toNumber(
			node.attributes.numOctaves,
		);
	}

	if (node.attributes?.seed) {
		state.ast.attributes.seed.value = string.toNumber(node.attributes.seed);
	}

	if (node.attributes?.stitchTiles) {
		state.ast.attributes.stitchTiles.value = node.attributes.stitchTiles;
	}

	return state;
}
