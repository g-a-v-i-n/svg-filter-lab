import { memo } from "react";
import { Container } from "../nodeParts/Container";
import useStore from "@state/store";

export const meta = {
	title: "Diffuse Lighting",
	tagName: "feDiffuseLighting",
	nodeType: "diffuseLighting",
	icon: "􀟗",
	width: 220,
	attributeOrder: ["mode"],
	mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDiffuseLighting",
	cat: "",
	inputs: ["in1"],
	outputs: ["result"],
};

function DiffuseLighting() {
	return <Container>soon</Container>;
}

export const Node = memo(DiffuseLighting);
