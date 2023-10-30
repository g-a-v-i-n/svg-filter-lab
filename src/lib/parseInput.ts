import { XastElement } from "@/types";
import { STRING } from "./attrTypes";

export const parseInput = {
	in1: (node: XastElement) => {
		return {
			type: STRING,
			value: node.attributes?.in1 || "SourceGraphic",
		};
	},
	in2: (node: XastElement) => {
		return {
			type: STRING,
			value: node.attributes?.in2 || "SourceGraphic",
		};
	},
};
