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

export const meta = {
	title: "Turbulence",
	tagName: "feTurbulence",
	nodeType: "turbulence",
	icon: "􁎄",
	width: 220,
	mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feBlend",
	cat: "",
	targets: [],
	sources: ["result"],
} as NodeMetadata;

function Turbulence(props: NodeProps) {
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
					setAttr("attributes.type.value", v as string)
				}
			>
				<SelectItem value="fractalNoise">Fractal noise</SelectItem>
				<SelectItem value="turbulence">Turbulence</SelectItem>
			</Select>

			<NumberInput
				title="Base freq."
				value={attributes.baseFrequency.value}
				onChange={(v: number) => setAttr("attributes.baseFrequency.value", v)}
			/>
			<NumberInput
				title="Num. octaves"
				value={attributes.numOctaves.value}
				onChange={(v: number) => setAttr("attributes.numOctaves.value", v)}
			/>
			<NumberInput
				title="Seed"
				value={attributes.seed.value}
				onChange={(v: number) => setAttr("attributes.seed.value", v)}
			/>
			<Select
				title="Stitch tiles"
				value={attributes.stitchTiles.value}
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
	tagName: "feTurbulence",
	attributes: {
		in1: {
			type: STRING,
			value: "SourceGraphic",
		},
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
} as NodeState["data"];

export function importer(node: XastElement) {
	const state = cloneDeep(initialState);

	if (node.attributes?.type) {
		state.attributes.type.value = node.attributes.type;
	}

	if (node.attributes?.baseFrequency) {
		state.attributes.baseFrequency.value = string.toNumber(
			node.attributes.baseFrequency,
		);
	}

	if (node.attributes?.numOctaves) {
		state.attributes.numOctaves.value = string.toNumber(
			node.attributes.numOctaves,
		);
	}

	if (node.attributes?.seed) {
		state.attributes.seed.value = string.toNumber(node.attributes.seed);
	}

	if (node.attributes?.stitchTiles) {
		state.attributes.stitchTiles.value = node.attributes.stitchTiles;
	}

	return state;
}
