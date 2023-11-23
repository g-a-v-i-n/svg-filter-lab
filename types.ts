import { NodeProps, EdgeProps, Node, Edge } from "reactflow";

// @ts-expect-error NB Gavin: Library `xast` exposes no types
import { Element as _XastElement } from "@types/xast";
import { type } from "os";

// Basic Types
export type ZustandSet = (
	nextStateOrUpdater: any,
	shouldReplace?: boolean | undefined,
) => void;
export type Matrix = number[][];
export type RGBColor = {
	type: "rgb";
	value: { r: number; g: number; b: number };
};
export type RGBAColor = {
	type: "rgba";
	value: { r: number; g: number; b: number; a: number };
};
export type HSLColor = {
	type: "hsl";
	value: { h: number; s: number; l: number };
};
export type HSLAColor = {
	type: "hsla";
	value: { h: number; s: number; l: number; a: number };
};
export type HexColor = {
	type: "hex";
	value: string;
};
export type HexAlphaColor = {
	type: "hexa";
	value: string;
};
export type HSVColor = {
	type: "hsv";
	value: { h: number; s: number; v: number };
};
export type HSVAColor = {
	type: "hsva";
	value: { h: number; s: number; v: number; a: number };
};
export type Color =
	| RGBColor
	| RGBAColor
	| HSLColor
	| HSLAColor
	| HexColor
	| HexAlphaColor
	| HSVColor
	| HSVAColor;
// export type Color = string;
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
	// noValue?: boolean;
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
	// Targets and sources are react-flow nomenclature
	targets: NodeTargetKey[] | [];
	sources: NodeSourceKey[] | [];
};

// Node Input/Output Types
export type NodeTargetKey = "in1" | "in2";
export type NodeSourceKey = "result";

export type In1 = {
	value: NodeTargetKey;
	type: "string";
};

export type In2 = {
	value: NodeTargetKey;
	type: "string";
};

// Attribute-level Enums
export type NodeTypeEnum =
	| "blend"
	| "colorMatrix"
	| "composite"
	| "convolveMatrix"
	| "displacementMap"
	| "diffuseLighting"
	| "specularLighting"
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

export type ColorMatrixTypeKey =
	| "matrix"
	| "saturate"
	| "hueRotate"
	| "luminanceToAlpha";

export type CompositeOperatorKey =
	| "over"
	| "in"
	| "out"
	| "atop"
	| "xor"
	| "arithmetic";

export type ConvolveMatrixEdgeModeKey = "duplicate" | "wrap" | "none";

export type DisplacementMapChannelSelectorKey = "R" | "G" | "B" | "A";

export type GaussianBlurEdgeModeKey = "duplicate" | "wrap" | "none";

export type inType =
	| "SourceGraphic"
	| "SourceAlpha"
	| "BackgroundImage"
	| "BackgroundAlpha"
	| "FillPaint"
	| "StrokePaint"
	| string;
