import { memo } from "react";
import { cloneDeep } from "lodash";
import { Container } from "../nodeParts/Container";
import useStore from "@state/store";
import { State, Element } from "@/types";
import {
	Select,
	SelectItem,
	Separator as SelectSeparator,
} from "../nodeParts/Select";
import { NodeProps } from "reactflow";
import { SectionSwitch } from "../nodeParts/SectionSwitch";
import { StringInput } from "../nodeParts/StringInput";
import { NumberInput } from "../nodeParts/NumberInput";
import { Switch } from "../nodeParts/Switch";
import { Separator } from "../nodeParts/Separator";

export const meta = {
	title: "Component Transfer",
	tagName: "feComponentTransfer",
	nodeType: "componentTransfer",
	icon: "􀧏",
	width: 220,
	mdn: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feComponentTransfer",
	cat: "",
	inputs: ["in1"],
	outputs: ["result"],
};

function ComponentTransfer(props: NodeProps) {
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
			<ChannelRow
				label="Red"
				tag="feFuncR"
				id="red"
				index={0}
				setAttr={setAttr}
				data={data}
				switchColorClassName="bg-red-500 dark:bg-red-400"
			/>
			<Separator />
			<ChannelRow
				label="Green"
				tag="feFuncG"
				id="green"
				index={1}
				setAttr={setAttr}
				data={data}
				switchColorClassName="bg-green-500 dark:bg-green-400"
			/>
			<Separator />
			<ChannelRow
				label="Blue"
				tag="feFuncB"
				id="blue"
				index={2}
				setAttr={setAttr}
				data={data}
				switchColorClassName="bg-blue-500 dark:bg-blue-400"
			/>
			<Separator />
			<ChannelRow
				label="Alpha"
				tag="feFuncA"
				id="alpha"
				index={3}
				setAttr={setAttr}
				data={data}
				switchColorClassName="bg-black-500 dark:bg-white-400"
			/>
		</Container>
	);
}

function ChannelRow({
	label,
	tag,
	id,
	index,
	setAttr,
	data,
	switchColorClassName,
}) {
	const isOn = !data.ast.children[index].omit;
	const type = data.ast.children[index].attributes.type.value;

	return (
		<>
			<SectionSwitch label={label} checked={isOn}>
				<Switch
					className={isOn ? switchColorClassName : ""}
					checked={isOn}
					onCheckedChange={() => {
						setAttr(`children[${index}].omit`, isOn);
					}}
				/>
			</SectionSwitch>

			{isOn && (
				<div className="flex flex-col">
					<Select
						title="Type"
						value={type}
						onValueChange={(val: string) =>
							setAttr(`children[${index}].attributes.type.value`, val)
						}
					>
						<SelectItem value="identity">Identity</SelectItem>
						<SelectSeparator />
						<SelectItem value="table">Table</SelectItem>
						<SelectItem value="linear">Linear</SelectItem>
						<SelectItem value="discrete">Discrete</SelectItem>
						<SelectItem value="gamma">Gamma</SelectItem>
					</Select>

					{type === "linear" && (
						<>
							<NumberInput
								title="Slope"
								value={data.ast.children[index].attributes.slope.value}
								onChange={(v: number) =>
									setAttr(`children[${index}].attributes.slope.value`, v)
								}
							/>

							<NumberInput
								title="Intercept"
								value={data.ast.children[index].attributes.intercept.value}
								onChange={(v: number) =>
									setAttr(`children[${index}].attributes.intercept.value`, v)
								}
							/>
						</>
					)}

					{type === "gamma" && (
						<>
							<NumberInput
								title="Amplitude"
								value={data.ast.children[index].attributes.amplitude.value}
								onChange={(v: number) =>
									setAttr(`children[${index}].attributes.amplitude.value`, v)
								}
							/>
							<NumberInput
								title="Exponent"
								value={data.ast.children[index].attributes.exponent.value}
								onChange={(v: number) =>
									setAttr(`children[${index}].attributes.exponent.value`, v)
								}
							/>
							<NumberInput
								title="Offset"
								value={data.ast.children[index].attributes.offset.value}
								onChange={(v: number) =>
									setAttr(`children[${index}].attributes.offset.value`, v)
								}
							/>
						</>
					)}

					{type === "table" && (
						<StringInput
							title="Table Values"
							value={data.ast.children[index].attributes.tableValues.value}
							onChange={(v: string) =>
								setAttr(`children[${index}].attributes.tableValues.value`, v)
							}
						/>
					)}

					{type === "discrete" && (
						<StringInput
							title="Table Values"
							value={data.ast.children[index].attributes.tableValues.value}
							onChange={(v: string) =>
								setAttr(`children[${index}].attributes.tableValues.value`, v)
							}
						/>
					)}
				</div>
			)}
		</>
	);
}

export const Node = memo(ComponentTransfer);

export const initialState = {
	ast: {
		tagName: "feComponentTransfer",
		attributes: {},
		children: [
			makeInitialChannelState("feFuncR"),
			makeInitialChannelState("feFuncG"),
			makeInitialChannelState("feFuncB"),
			makeInitialChannelState("feFuncA"),
		],
	},
};

function makeInitialChannelState(tagName: string) {
	return {
		type: "element",
		tagName: tagName,
		omit: false,
		attributes: {
			type: {
				type: "string",
				value: "identity",
			},
			slope: {
				type: "number",
				value: 1,
			},
			intercept: {
				type: "number",
				value: 0,
			},
			amplitude: {
				type: "number",
				value: 1,
			},
			exponent: {
				type: "number",
				value: 1,
			},
			offset: {
				type: "number",
				value: 0,
			},
			tableValues: {
				type: "string",
				value: "0, 1",
			},
		},
	} as Element;
}

export function importer(node: XastElement) {
	const state = cloneDeep(initialState);

	// if (node.attributes?.type) {
	// 	state.ast.attributes.type.value = node.attributes.type;
	// }

	// if (state.ast.attributes.type.value === "matrix") {
	// 	if (node.attributes.values) {
	// 		state.ast.attributes.matrixValues.value = string.toMatrix(
	// 			node.attributes.values,
	// 			4,
	// 			5,
	// 		);
	// 	}
	// }

	// if (state.ast.attributes.type.value === "saturate") {
	// 	if (node.attributes.values) {
	// 		state.ast.attributes.saturateValues.value = string.toNumber(
	// 			node.attributes.values,
	// 		);
	// 	}
	// }

	// if (state.ast.attributes.type.value === "hueRotate") {
	// 	if (node.attributes.values) {
	// 		state.ast.attributes.hueRotateValues.value = string.toNumber(
	// 			node.attributes.values,
	// 		);
	// 	}
	// }

	// if (state.ast.attributes.type.value === "luminanceToAlpha") {
	// 	if (node.attributes.values) {
	// 		state.ast.attributes.luminanceToAlphaValues.value = string.toNumber(
	// 			node.attributes.values,
	// 		);
	// 	}
	// }

	return state;
}
