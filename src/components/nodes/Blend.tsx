import { memo } from "react";
import { Container } from "../nodeParts/Container";
import useStore from "@state/store";
import {
	State,
	BlendModeKey,
	NodeMetadata,
	NodeState,
	Attribute,
	AttributeValue,
	AttributeType,
	XastElement,
} from "@/types";
import { Select, SelectItem, Separator } from "../nodeParts/Select";
import string from "@lib/string";
import { STRING } from "@lib/attrTypes";

import { NodeProps } from "reactflow";

export const meta = {
	title: "Blend",
	tagName: "feBlend",
	nodeType: "blend",
	icon: "􀟗",
	width: 200,
	attributeOrder: ["mode"],
	mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feBlend",
	cat: "",
	inputs: ["in1", "in2"],
	outputs: ["result"],
} as NodeMetadata;

function Blend(props: NodeProps) {
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
				title="Mode"
				value={data.ast.attributes.mode.value}
				onValueChange={(v: string) =>
					setAttr("attributes.mode.value", v as BlendModeKey)
				}
			>
				<SelectItem value="normal">Normal</SelectItem>
				<Separator />
				<SelectItem value="darken">Darken</SelectItem>
				<SelectItem value="multiply">Multiply</SelectItem>
				<SelectItem value="color-burn">Color Burn</SelectItem>
				<Separator />
				<SelectItem value="lighten">Lighten</SelectItem>
				<SelectItem value="screen">Screen</SelectItem>
				<SelectItem value="color-dodge">Color Dodge</SelectItem>
				<Separator />
				<SelectItem value="overlay">Overlay</SelectItem>
				<SelectItem value="soft-light">Soft Light</SelectItem>
				<SelectItem value="hard-light">Hard Light</SelectItem>
				<Separator />
				<SelectItem value="difference">Difference</SelectItem>
				<SelectItem value="exclusion">Exclusion</SelectItem>
				<Separator />
				<SelectItem value="hue">Hue</SelectItem>
				<SelectItem value="saturation">Saturation</SelectItem>
				<SelectItem value="color">Color</SelectItem>
				<SelectItem value="luminosity">Luminosity</SelectItem>
			</Select>
		</Container>
	);
}

export const Node = memo(Blend);

export const defaultState = {
	ast: {
		tagName: "feBlend",
		attributes: {
			mode: {
				type: STRING,
				value: "normal",
			},
		},
		children: [],
	},
} as NodeState["data"];

export function importer(node: XastElement) {
	return {
		ast: {
			...defaultState.ast,
			attributes: {
				mode: parse.mode(node),
			},
		},
	};
}

const parse = {
	mode: (node: XastElement): Attribute<AttributeValue, AttributeType> => {
		const mode = node.attributes?.mode || null;
		if (mode === null) {
			return {
				type: STRING,
				value: null,
				noValue: true,
			};
		}
		return {
			type: STRING,
			value: string.value(mode),
		};
	},
};
