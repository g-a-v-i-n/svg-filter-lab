import { NodeProps, EdgeProps, Node, Edge } from "reactflow";

// @ts-expect-error NB Gavin: Library `xast` exposes no types
import { Element as _XastElement } from "@types/xast";

// Basic Types
export type ZustandSet = (
	nextStateOrUpdater: any,
	shouldReplace?: boolean | undefined,
) => void;
export type Matrix = number[][];
export type Color = string;
export type State = {
	[key: string]: any;
};

export type XastElement = _XastElement;

// Node and Edge Types
export type NodeInstance = Node<NodeState["data"]>;
export type EdgeInstance = Edge;
export type NodeState = NodeProps & {
	data: {
		ast: Element; // NB this should be a xast syntax tree which is parsable by unified
	};
};

export type EdgeState = EdgeProps;

// Attribute
export type Attribute<Value, Type> = {
	value: Value;
	type: Type;
	omit?: boolean;
	aliasOf?: string;
	primary?: (data: Element) => boolean;
	// noError?: boolean;
	noValue?: boolean;
};

// Element
export type Element = {
	type: "element";
	tagName: TagNameEnum;
	omit: boolean;
	attributes: {
		[key: string]: Attribute<AttributeValue, AttributeType>;
	};
	children?: Element[];
};

export type AttributeValue =
	| string
	| number
	| boolean
	| Matrix
	| Array<number>
	| Color
	| null;

export type AttributeType =
	| "string"
	| "number"
	| "boolean"
	| "matrix"
	| "array"
	| "color"
	| "null";

// Node Definitions and Metadata
export type NodeMetadata = {
	nodeType: NodeTypeEnum;
	title: string;
	cat: string;
	icon: string;
	width: number;
	tagName: TagNameEnum;
	mdn: string;
	inputs: NodeInputKey[] | [];
	outputs: NodeOutputKey[] | [];
};

// Node Input/Output Types
export type NodeInputKey = "in1" | "in2";
export type NodeOutputKey = "result";

// Attribute-level Enums
export type NodeTypeEnum =
	| "blend"
	| "colorMatrix"
	| "composite"
	| "convolveMatrix"
	| "displacementMap"
	| "dropShadow"
	| "flood"
	| "gaussianBlur"
	| "image"
	| "merge"
	| "morphology"
	| "offset"
	| "source"
	| "tile"
	| "turbulence"
	| "filter"
	| "componentTransfer";

export type TagNameEnum =
	| "feBlend"
	| "feColorMatrix"
	| "feComposite"
	| "feConvolveMatrix"
	| "feDisplacementMap"
	| "feDropShadow"
	| "feFlood"
	| "feGaussianBlur"
	| "feImage"
	| "feMerge"
	| "feMorphology"
	| "feOffset"
	| "feTile"
	| "feTurbulence"
	| "feComponentTransfer"
	| "feDiffuseLighting"
	| "feDistantLight"
	| "fePointLight"
	| "feSpotLight"
	| "feSpecularLighting"
	| "feFuncA"
	| "feFuncB"
	| "feFuncG"
	| "feFuncR";

export type BlendModeKey =
	| "normal"
	| "multiply"
	| "screen"
	| "darken"
	| "lighten"
	| "color-dodge"
	| "color-burn"
	| "hard-light"
	| "soft-light"
	| "difference"
	| "exclusion"
	| "hue"
	| "saturation"
	| "color"
	| "luminosity";
