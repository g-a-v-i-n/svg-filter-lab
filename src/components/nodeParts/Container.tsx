import React from "react";
import clsx from "clsx";
import { Position } from "reactflow";
import { ControlGroup } from "./ControlGroup";
import { Handle } from "./Handle";
import { Header } from "./Header";
import { NodeInputKey, NodeOutputKey, TagNameEnum } from "@/types";
import useStore from "@state/store";
import { exporter } from "@state/exporter";
import { Preview } from "./Preview";
import { Separator } from "./Separator";

export type ContainerProps = {
	selected: boolean;
	className?: string;
	children?: React.ReactNode;
	dragging: boolean | undefined;
	id: string;
	title: string;
	cat: string;
	icon: string;
	width: number;
	mdn: string;
	inputs: NodeInputKey[] | [];
	outputs: NodeOutputKey[] | [];
};

export function Container(props: ContainerProps) {
	const {
		className = "",
		children,
		selected,
		dragging,
		id,
		title,
		icon,
		width,
		mdn,
		inputs,
		outputs,
	} = props;

	const nodes = useStore((state) => state.nodes);
	const edges = useStore((state) => state.edges);

	const filterText = exporter(id, nodes, edges);

	return (
		<div
			style={{ width: `${width}px` }}
			className={clsx(
				"rounded-xl outline-none bg-base transition-all",
				{
					"shadow-card": !dragging,
					"shadow-cardSelected": selected,
				},
				className,
			)}
		>
			<div className="flex flex-col rounded-xl surface-1">
				<Header
					id={id}
					title={title}
					icon={icon}
					mdn={mdn}
					selected={selected}
				/>
				<Separator />
				<div className="flex w-full justify-between py-2">
					<div className="flex flex-col gap-y-2">
						{inputs.map((input: NodeInputKey, index: number) => (
							<Handle
								key={`${index}-${input}`}
								selected={selected}
								type="target"
								id={input}
								title={input}
								position={Position.Left}
							/>
						))}
					</div>
					<div className="flex flex-col gap-y-2">
						{outputs.map((output, index) => (
							<Handle
								key={`${index}-${output}`}
								selected={selected}
								type="source"
								id={output}
								title={output}
								position={Position.Right}
							/>
						))}
					</div>
				</div>

				<ControlGroup>
					<Separator />
					{children}
					<Separator />
				</ControlGroup>

				<Preview filterId={id} filterText={filterText} />

				{/* <Footer /> */}
			</div>
		</div>
	);
}
