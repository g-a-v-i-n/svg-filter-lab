import * as Blend from "./Blend";
import * as ColorMatrix from "./ColorMatrix";
import * as DiffuseLighting from "./DiffuseLighting";
import * as ComponentTransfer from "./ComponentTransfer";
import * as Composite from "./Composite";
// import * as Morphology from "./Morphology";
// import * as Offset from "./Offset";
// import * as Tile from "./Tile";
import * as Turbulence from "./Turbulence";
import * as DisplacementMap from "./DisplacementMap";
// import * as ConvolveMatrix from "./ConvolveMatrix";
import * as GaussianBlur from "./GaussianBlur";
// import * as SpecularLighting from "./SpecularLighting";
import { NodeMetadata, NodeState } from "@/types";

export const nodeTypes = {
	blend: Blend.Node,
	colorMatrix: ColorMatrix.Node,
	diffuseLighting: DiffuseLighting.Node,
	componentTransfer: ComponentTransfer.Node,
	composite: Composite.Node,
	// morphology: Morphology.Node,
	// offset: Offset.Node,
	// tile: Tile.Node,
	turbulence: Turbulence.Node,
	displacementMap: DisplacementMap.Node,
	// convolveMatrix: ConvolveMatrix.Node,
	gaussianBlur: GaussianBlur.Node,
};

export const initialState = {
	blend: Blend.initialState,
	colorMatrix: ColorMatrix.initialState,
	// diffuseLighting: DiffuseLighting.initialState,
	componentTransfer: ComponentTransfer.initialState,
	composite: Composite.initialState,
	// morphology: Morphology.initialState,
	// offset: Offset.initialState,
	// tile: Tile.initialState,
	turbulence: Turbulence.initialState,
	displacementMap: DisplacementMap.initialState,
	// convolveMatrix: ConvolveMatrix.initialState,
	gaussianBlur: GaussianBlur.initialState,
} as { [key: string]: NodeState["data"] };

export const nodeMetadata = {
	blend: Blend.meta,
	colorMatrix: ColorMatrix.meta,
	diffuseLighting: DiffuseLighting.meta,
	componentTransfer: ComponentTransfer.meta,
	composite: Composite.meta,
	// morphology: Morphology.meta,
	// offset: Offset.meta,
	// tile: Tile.meta,
	turbulence: Turbulence.meta,
	displacementMap: DisplacementMap.meta,
	// convolveMatrix: ConvolveMatrix.meta,
	gaussianBlur: GaussianBlur.meta,
} as { [key: string]: NodeMetadata };

export const nodeTypesByTagName = {
	// SVG filter tags
	feBlend: "blend",
	feColorMatrix: "colorMatrix",
	feComponentTransfer: "componentTransfer",
	feComposite: "composite",
	feConvolveMatrix: "convolveMatrix",
	feDiffuseLighting: "diffuseLighting",
	feDisplacementMap: "displacementMap",
	feFlood: "flood",
	feGaussianBlur: "gaussianBlur",
	feImage: "image",
	feMerge: "merge",
	feMorphology: "morphology",
	feOffset: "offset",
	feSpecularLighting: "specularLighting",
	feTile: "tile",
	feTurbulence: "turbulence",
};

export const importers = {
	blend: Blend.importer,
	colorMatrix: ColorMatrix.importer,
	// diffuseLighting: DiffuseLighting.importer,
	componentTransfer: ComponentTransfer.importer,
	composite: Composite.importer,
	// morphology: Morphology.importer,
	// offset: Offset.importer,
	// tile: Tile.importer,
	turbulence: Turbulence.importer,
	displacementMap: DisplacementMap.importer,
	// convolveMatrix: ConvolveMatrix.importer,
	gaussianBlur: GaussianBlur.importer,
};
