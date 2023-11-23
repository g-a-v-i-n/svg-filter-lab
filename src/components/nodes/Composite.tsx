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
import { parseTarget } from "@lib/parseTarget";

export const meta = {
	title: "Composite",
	tagName: "feComposite",
	nodeType: "composite",
	icon: "􀧻",
	width: 220,
	mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feComposite",
	cat: "",
	targets: ["in1", "in2"],
	sources: ["result"],
} as NodeMetadata;

function Composite(props: NodeProps) {
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
				title="Mode"
				value={attributes.operator.value}
				onValueChange={(v: string) => {
					setAttr("attributes.operator.value", v as string);
					if (v === "arithmetic") {
						setAttr("attributes.k1.omit", false);
						setAttr("attributes.k2.omit", false);
						setAttr("attributes.k3.omit", false);
						setAttr("attributes.k4.omit", false);
					} else {
						setAttr("attributes.k1.omit", true);
						setAttr("attributes.k2.omit", true);
						setAttr("attributes.k3.omit", true);
						setAttr("attributes.k4.omit", true);
					}
				}}
			>
				<SelectItem value="over">Over</SelectItem>
				<SelectItem value="in">In</SelectItem>
				<SelectItem value="out">Out</SelectItem>
				<SelectItem value="atop">Atop</SelectItem>
				<SelectItem value="xor">Xor</SelectItem>
				<Separator />
				<SelectItem value="arithmetic">Arithmetic</SelectItem>
			</Select>

			{attributes.operator.value === "arithmetic" && (
				<>
					<NumberInput
						title="K1"
						value={attributes.k1.value}
						onChange={(v: number) => setAttr("attributes.k1.value", v)}
					/>
					<NumberInput
						title="K2"
						value={attributes.k2.value}
						onChange={(v: number) => setAttr("attributes.k2.value", v)}
					/>
					<NumberInput
						title="K3"
						value={attributes.k3.value}
						onChange={(v: number) => setAttr("attributes.k3.value", v)}
					/>
					<NumberInput
						title="K4"
						value={attributes.k4.value}
						onChange={(v: number) => setAttr("attributes.k4.value", v)}
					/>
				</>
			)}
		</Container>
	);
}

export const Node = memo(Composite);

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
		operator: {
			type: STRING,
			value: "over",
		},
		k1: {
			type: NUMBER,
			omit: true,
			value: 0,
		},
		k2: {
			type: NUMBER,
			omit: true,
			value: 0,
		},
		k3: {
			type: NUMBER,
			omit: true,
			value: 0,
		},
		k4: {
			type: NUMBER,
			omit: true,
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

	if (node.attributes?.in2) {
		state.attributes.in2 = parseTarget.in2(node);
	}

	if (node.attributes?.operator) {
		state.attributes.operator.value = node.attributes.operator;
	}

	if (node.attributes?.operator === "arithmetic") {
		if (node.attributes?.k1) {
			state.attributes.k1.omit = false;
			state.attributes.k1.value = string.toNumber(node.attributes.k1);
		}
		if (node.attributes?.k2) {
			state.attributes.k2.omit = false;
			state.attributes.k2.value = string.toNumber(node.attributes.k2);
		}
		if (node.attributes?.k3) {
			state.attributes.k3.omit = false;
			state.attributes.k3.value = string.toNumber(node.attributes.k3);
		}
		if (node.attributes?.k4) {
			state.attributes.k4.omit = false;
			state.attributes.k4.value = string.toNumber(node.attributes.k4);
		}
	}
	return state;
}
