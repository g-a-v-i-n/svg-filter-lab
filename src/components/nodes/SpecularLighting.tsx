import { memo } from "react";
import { Container } from "../nodeParts/Container";
import useStore from "@state/store";
import { State, NodeMetadata, NodeState, XastElement } from "@/types";
import { NUMBER, STRING, COLOR } from "@lib/attrTypes";

import { NodeProps } from "reactflow";
import { cloneDeep } from "lodash";
import { parseTarget } from "@/src/lib/parseTarget";
import { ColorInput } from "../nodeParts/ColorInput";
import { NumberInput } from "../nodeParts/NumberInput";
import { Select, SelectItem } from "../nodeParts/Select";
import string from "@lib/string";

export const meta = {
	title: "Specular lighting",
	tagName: "feSpecularLighting",
	nodeType: "specularLighting",
	icon: "􁣇",
	width: 220,
	mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feSpecularLighting",
	cat: "",
	targets: ["in1"],
	sources: ["result"],
} as NodeMetadata;

function SpecularLighting(props: NodeProps) {
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

			<NumberInput
				title="Surface scale"
				value={attributes.surfaceScale.value}
				onChange={(v: number) => {
					setAttr("attributes.surfaceScale.value", v as number);
				}}
			/>

			<NumberInput
				title="Specular constant"
				value={attributes.specularConstant.value}
				onChange={(v: number) => {
					setAttr("attributes.specularConstant.value", v as number);
				}}
			/>

			<NumberInput
				title="Specular exponent"
				value={attributes.specularExponent.value}
				onChange={(v: number) => {
					setAttr("attributes.specularExponent.value", v as number);
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

export const Node = memo(SpecularLighting);

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
		surfaceScale: {
			type: NUMBER,
			value: 1,
		},
		specularConstant: {
			type: NUMBER,
			value: 1,
		},
		specularExponent: {
			type: NUMBER,
			value: 1,
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

	if (node.attributes["lighting-color"]) {
		state.attributes["lighting-color"].value = string.toColor(
			node.attributes["lighting-color"],
		);
	}

	if (node.attributes.surfaceScale) {
		state.attributes.surfaceScale.value = node.attributes.surfaceScale;
	}

	if (node.attributes.specularConstant) {
		state.attributes.specularConstant.value = node.attributes.specularConstant;
	}

	if (node.attributes.specularExponent) {
		state.attributes.specularExponent.value = node.attributes.specularExponent;
	}

	if (node.children) {
		const child = node.children[0];
		const { name } = child.name;

		if (name === "feDistantLight") {
			state.attributes.lightType.value = "distant";
			state.children[0].omit = false;
			state.children[1].omit = true;
			state.children[2].omit = true;
		}
		if (name === "fePointLight") {
			state.attributes.lightType.value = "point";
			state.children[0].omit = true;
			state.children[1].omit = false;
			state.children[2].omit = true;
		}
		if (name === "feSpotLight") {
			state.attributes.lightType.value = "spot";
			state.children[0].omit = true;
			state.children[1].omit = true;
			state.children[2].omit = false;
		}

		if (child.attributes.azimuth) {
			state.children[0].attributes.azimuth.value = child.attributes.azimuth;
		}
		if (child.attributes.elevation) {
			state.children[0].attributes.elevation.value = child.attributes.elevation;
		}

		if (child.attributes.x) {
			state.children[1].attributes.x.value = child.attributes.x;
		}
		if (child.attributes.y) {
			state.children[1].attributes.y.value = child.attributes.y;
		}
		if (child.attributes.z) {
			state.children[1].attributes.z.value = child.attributes.z;
		}

		if (node.children[0].attributes.x) {
			state.children[2].attributes.x.value = child.attributes.x;
		}
		if (child.attributes.y) {
			state.children[2].attributes.y.value = child.attributes.y;
		}
		if (child.attributes.z) {
			state.children[2].attributes.z.value = child.attributes.z;
		}
		if (child.attributes.pointsAtX) {
			state.children[2].attributes.pointsAtX.value = child.attributes.pointsAtX;
		}
		if (child.attributes.pointsAtY) {
			state.children[2].attributes.pointsAtY.value = child.attributes.pointsAtY;
		}
		if (child.attributes.pointsAtZ) {
			state.children[2].attributes.pointsAtZ.value = child.attributes.pointsAtZ;
		}
		if (child.attributes.specularExponent) {
			state.children[2].attributes.specularExponent.value =
				child.attributes.specularExponent;
		}
		if (child.attributes.limitingConeAngle) {
			state.children[2].attributes.limitingConeAngle.value =
				child.attributes.limitingConeAngle;
		}
	}
	return state;
}
