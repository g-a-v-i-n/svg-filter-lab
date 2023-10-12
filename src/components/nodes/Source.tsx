import { memo } from "react";
import { Container } from "../nodeParts/Container";
import useStore from "@state/store";
import {
	State,
	BlendModeKey,
	NodeMetadata,
	NodeState,
	XastElement,
} from "@/types";
import { Select, SelectItem, Separator } from "../nodeParts/Select";
import string from "@lib/string";
import { STRING } from "@lib/attrTypes";
import { cloneDeep } from "lodash";

import { NodeProps } from "reactflow";

export const meta = {
	title: "Source",
	tagName: "",
	nodeType: "source",
	icon: "􀟗",
	width: 200,
	mdn: "",
	cat: "",
	inputs: [],
	outputs: ["result"],
} as NodeMetadata;

function Source(props: NodeProps) {
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
				title="Source"
				value={data.ast.attributes.source.value}
				onValueChange={(v: string) =>
					setAttr("attributes.source.value", v as BlendModeKey)
				}
			>
				<SelectItem value="SourceGraphic">Source graphic</SelectItem>
				<SelectItem value="SourceAlpha">Source alpha</SelectItem>
				<Separator />
				<SelectItem value="BackgroundImage">Background image</SelectItem>
				<SelectItem value="BackgroundAlpha">Background alpha</SelectItem>
				<Separator />
				<SelectItem value="FillPaint">Fill paint</SelectItem>
				<SelectItem value="StrokePaint">Stroke paint</SelectItem>
			</Select>
		</Container>
	);
}

export const Node = memo(Source);

export const initialState = {
	ast: {
		tagName: "source",
		attributes: {
			source: {
				type: STRING,
				value: "SourceGraphic",
			},
		},
		children: [],
	},
} as NodeState["data"];

export function importer(node: XastElement) {
	// NB: the node passed to this importer is a downstream element, not a real source element
	// Source node doesn't exist in SVG, we just use it to select input sources.
	const state = cloneDeep(initialState);

	if (node.attributes.in1) {
		state.ast.attributes.source.value = node.attributes.in1;
	}

	return state;
}
