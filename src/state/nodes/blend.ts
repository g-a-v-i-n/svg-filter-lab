import { serialize } from "../exporter";
import { NodeSpecification } from "@/types";

// Define the node for serialization, parsing and rendering
export const specification = {
	meta: {
		nodeType: "blend",
		title: "Blend",
		tagName: "feBlend",
		icon: "􀟗",
		width: 200,
		attributeOrder: ["mode"],
		mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feBlend",
		cat: "",
		inputs: ["in1", "in2"],
		outputs: ["result"],
	},

	// inputs: {
	//   mode: {
	//     key: 'mode',
	//     attr: 'mode',
	//     label: 'Mode',
	//     input: {
	//       type: 'enum',
	//       options: [
	//         { key: "normal", title: "Normal", cat: "normal" },
	//         { key: "multiply", title: "Multiply", cat: "normal" },
	//         { key: "screen", title: "Screen", cat: "normal" },
	//         { key: "darken", title: "Darken", cat: "normal" },
	//         { key: "lighten", title: "Lighten", cat: "normal" },
	//         { key: "color-dodge", title: "Color Dodge", cat: "normal" },
	//         { key: "color-burn", title: "Color Burn", cat: "normal" },
	//         { key: "hard-light", title: "Hard Light", cat: "normal" },
	//         { key: "soft-light", title: "Soft Light", cat: "normal" },
	//         { key: "difference", title: "Difference", cat: "normal" },
	//         { key: "exclusion", title: "Exclusion", cat: "normal" },
	//         { key: "hue", title: "Hue", cat: "normal" },
	//         { key: "saturation", title: "Saturation", cat: "normal" },
	//         { key: "color", title: "Color", cat: "normal" },
	//         { key: "luminosity", title: "Luminosity", cat: "normal" },
	//       ]
	//     },
	//     defaultValue: 'normal',
	//     serializer: (v: string) => serialize.string(v),
	//   }
} as NodeSpecification;

const feBlend = {
	name: "feBlend",
	type: "element",
	attributes: {
		mode: {
			key: "mode",
			attr: "mode",
			label: "Mode",
			input: {
				type: "enum",
				options: [
					{ key: "normal", title: "Normal", cat: "normal" },
					{ key: "multiply", title: "Multiply", cat: "normal" },
					{ key: "screen", title: "Screen", cat: "normal" },
					{ key: "darken", title: "Darken", cat: "normal" },
					{ key: "lighten", title: "Lighten", cat: "normal" },
					{ key: "color-dodge", title: "Color Dodge", cat: "normal" },
					{ key: "color-burn", title: "Color Burn", cat: "normal" },
					{ key: "hard-light", title: "Hard Light", cat: "normal" },
					{ key: "soft-light", title: "Soft Light", cat: "normal" },
					{ key: "difference", title: "Difference", cat: "normal" },
					{ key: "exclusion", title: "Exclusion", cat: "normal" },
					{ key: "hue", title: "Hue", cat: "normal" },
					{ key: "saturation", title: "Saturation", cat: "normal" },
					{ key: "color", title: "Color", cat: "normal" },
					{ key: "luminosity", title: "Luminosity", cat: "normal" },
				],
			},
			defaultValue: "normal",
			serializer: (v: string) => serialize.string(v),
		},
	},
	children: [],
};
