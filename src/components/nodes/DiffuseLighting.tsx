import { memo } from "react";
import { Container } from "../nodeParts/Container";
import useStore from "@state/store";
import { State, NodeMetadata, NodeState, XastElement } from "@/types";
import { NUMBER, STRING, COLOR } from "@lib/attrTypes";

import { NodeProps } from "reactflow";
import { cloneDeep, set } from "lodash";
import { parseTarget } from "@/src/lib/parseTarget";
import { ColorInput } from "../nodeParts/ColorInput";
import { NumberInput } from "../nodeParts/NumberInput";
import { Select, SelectItem } from "../nodeParts/Select";

export const meta = {
	title: "Diffuse lighting",
	tagName: "feDiffuseLighting",
	nodeType: "diffuseLighting",
	icon: "􀇯",
	width: 220,
	mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDiffuseLighting",
	cat: "",
	targets: ["in1"],
	sources: ["result"],
} as NodeMetadata;

function DiffuseLighting(props: NodeProps) {
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

	const { attributes, children } = data.ast;
	return (
		<Container {...containerProps}>
			<Select
				title="Type"
				value={attributes.lightType.value}
				onValueChange={(v: string) => {
					setAttr("attributes.lightType.value", v as string);
					if (v === "distant") {
						setAttr("children[0].omit", false);
						setAttr("children[1].omit", true);
						setAttr("children[2].omit", true);
					} else if (v === "point") {
						setAttr("children[0].omit", true);
						setAttr("children[1].omit", false);
						setAttr("children[2].omit", true);
					} else if (v === "spot") {
						setAttr("children[0].omit", true);
						setAttr("children[1].omit", true);
						setAttr("children[2].omit", false);
					}
				}}
			>
				<SelectItem value="distant">Distant</SelectItem>
				<SelectItem value="point">Point</SelectItem>
				<SelectItem value="spot">Spot</SelectItem>
			</Select>

			<ColorInput
				title="Color"
				value={attributes["lighting-color"].value}
				onChange={(v: string) => {
					setAttr("attributes['lighting-color'].value", v as string);
				}}
			/>

			{attributes.lightType.value === "distant" && (
				<>
					<NumberInput
						title="Azimuth"
						value={children[0].attributes.azimuth.value}
						onChange={(v: number) => {
							setAttr("children[0].attributes.azimuth.value", v as number);
						}}
					/>
					<NumberInput
						title="Elevation"
						value={children[0].attributes.elevation.value}
						onChange={(v: number) => {
							setAttr("children[0].attributes.elevation.value", v as number);
						}}
					/>
				</>
			)}

			{attributes.lightType.value === "point" && (
				<>
					<NumberInput
						title="X"
						value={children[1].attributes.x.value}
						onChange={(v: number) => {
							setAttr("children[1].attributes.x.value", v as number);
						}}
					/>
					<NumberInput
						title="Y"
						value={children[1].attributes.y.value}
						onChange={(v: number) => {
							setAttr("children[1].attributes.y.value", v as number);
						}}
					/>
					<NumberInput
						title="Z"
						value={children[1].attributes.z.value}
						onChange={(v: number) => {
							setAttr("children[1].attributes.z.value", v as number);
						}}
					/>
				</>
			)}

			{attributes.lightType.value === "spot" && (
				<>
					<NumberInput
						title="X"
						value={children[2].attributes.x.value}
						onChange={(v: number) => {
							setAttr("children[2].attributes.x.value", v as number);
						}}
					/>
					<NumberInput
						title="Y"
						value={children[2].attributes.y.value}
						onChange={(v: number) => {
							setAttr("children[2].attributes.y.value", v as number);
						}}
					/>
					<NumberInput
						title="Z"
						value={children[2].attributes.z.value}
						onChange={(v: number) => {
							setAttr("children[2].attributes.z.value", v as number);
						}}
					/>
					<NumberInput
						title="Points at X"
						value={children[2].attributes.pointsAtX.value}
						onChange={(v: number) => {
							setAttr("children[2].attributes.pointsAtX.value", v as number);
						}}
					/>
					<NumberInput
						title="Points at Y"
						value={children[2].attributes.pointsAtY.value}
						onChange={(v: number) => {
							setAttr("children[2].attributes.pointsAtY.value", v as number);
						}}
					/>
					<NumberInput
						title="Points at Z"
						value={children[2].attributes.pointsAtZ.value}
						onChange={(v: number) => {
							setAttr("children[2].attributes.pointsAtZ.value", v as number);
						}}
					/>
					<NumberInput
						title="Specular exponent"
						value={children[2].attributes.specularExponent.value}
						onChange={(v: number) => {
							setAttr(
								"children[2].attributes.specularExponent.value",
								v as number,
							);
						}}
					/>
					<NumberInput
						title="Limiting cone angle"
						value={children[2].attributes.limitingConeAngle.value}
						onChange={(v: number) => {
							setAttr(
								"children[2].attributes.limitingConeAngle.value",
								v as number,
							);
						}}
					/>
				</>
			)}
		</Container>
	);
}

export const Node = memo(DiffuseLighting);

export const initialState = {
	tagName: meta.tagName,
	attributes: {
		in1: {
			type: STRING,
			value: "SourceGraphic",
		},
		lightType: {
			type: STRING,
			omit: true,
			value: "distant",
		},
		"lighting-color": {
			type: COLOR,
			value: {
				type: "rgb",
				value: {
					r: 255,
					g: 255,
					b: 255,
				},
			},
		},
	},
	children: [
		{
			type: "element",
			tagName: "feDistantLight",
			omit: false,
			attributes: {
				azimuth: {
					type: NUMBER,
					value: 0,
				},
				elevation: {
					type: NUMBER,
					value: 0,
				},
			},
			children: [],
		},
		{
			type: "element",
			tagName: "fePointLight",
			omit: true,
			attributes: {
				x: {
					type: NUMBER,
					value: 0,
				},
				y: {
					type: NUMBER,
					value: 0,
				},
				z: {
					type: NUMBER,
					value: 0,
				},
			},
			children: [],
		},
		{
			type: "element",
			tagName: "feSpotLight",
			omit: true,
			attributes: {
				x: {
					type: NUMBER,
					value: 0,
				},
				y: {
					type: NUMBER,
					value: 0,
				},
				z: {
					type: NUMBER,
					value: 0,
				},
				pointsAtX: {
					type: NUMBER,
					value: 0,
				},
				pointsAtY: {
					type: NUMBER,
					value: 0,
				},
				pointsAtZ: {
					type: NUMBER,
					value: 0,
				},
				specularExponent: {
					type: NUMBER,
					value: 1,
				},
				limitingConeAngle: {
					type: NUMBER,
					value: 0,
				},
			},
			children: [],
		},
	],
} as NodeState["data"];

export function importer(node: XastElement) {
	const state = cloneDeep(initialState);
	if (node.attributes?.in1) {
		state.attributes.in1 = parseTarget.in1(node);
	}

	if (node.attributes.kernalMatrix) {
		state.attributes.kernalMatrix.value = node.attributes.kernalMatrix;
	}
	return state;
}
