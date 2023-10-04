import * as Blend from "./Blend";
import * as ColorMatrix from "./ColorMatrix";
import * as DiffuseLighting from "./DiffuseLighting";
import * as ComponentTransfer from "./ComponentTransfer";
import { NodeMetadata, NodeState } from "@/types";

console.log(Blend.defaultState);

export const nodeTypes = {
	blend: Blend.Node,
	colorMatrix: ColorMatrix.Node,
	diffuseLighting: DiffuseLighting.Node,
	componentTransfer: ComponentTransfer.Node,
};

export const defaultState = {
	blend: Blend.defaultState,
	colorMatrix: ColorMatrix.defaultState,
	// diffuseLighting: DiffuseLighting.defaultState,
	componentTransfer: ComponentTransfer.defaultState,
} as { [key: string]: NodeState["data"] };

export const nodeMetadata = {
	blend: Blend.meta,
	colorMatrix: ColorMatrix.meta,
	diffuseLighting: DiffuseLighting.meta,
	componentTransfer: ComponentTransfer.meta,
} as { [key: string]: NodeMetadata };
