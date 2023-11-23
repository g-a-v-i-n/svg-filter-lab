import React, { useMemo } from "react";
import clsx from "clsx";
import { getConnectedEdges } from "reactflow";
import { ControlGroup } from "./ControlGroup";
import { Header } from "./Header";
import { NodeTargetKey, NodeSourceKey } from "@/types";
import useStore from "@state/store";
import { exporter } from "@state/exporter";
import { Separator } from "./Separator";
import { TargetHandleRow } from "./TargetHandleRow";
import { SourceHandleRow } from "./SourceHandleRow";
import { Node as ReactFlowNode } from "reactflow";

function getOutgoers(nodeId, edges) {
	return edges.filter((edge) => edge.source === nodeId);
}

export type ContainerProps = {
	selected: boolean;
	children?: React.ReactNode;
	dragging: boolean | undefined;
	id: string;
	title: string;
	cat: string;
	icon: string;
	width: number;
	mdn: string;
	// data: { ast: { [key: string]: any } };
	targets: NodeTargetKey[] | [];
	sources: NodeSourceKey[] | [];
};

export function Container(props: ContainerProps) {
	const {
		children,
		selected,
		dragging,
		id,
		title,
		icon,
		width,
		mdn,
		sources,
		targets,
		// data,
	} = props;

	const thisNode = {
		id,
		type: "custom",
	} as ReactFlowNode;

	const isSelected = selected;

	const { edges, setAttr, data } = useStore((state) => {
		return {
			setAttr: state.setAttr(id),
			edges: state.edges,
			data: state.data,
		};
	});

	const { attributes } = data[id].ast;

	const outgoers = useMemo(() => {
		return getOutgoers(thisNode, edges);
	}, [edges]);

	const connectedEdges = useMemo(() => {
		return getConnectedEdges([thisNode], edges);
	}, [edges]);

	const filterText = useMemo(() => {
		return exporter(id, edges, connectedEdges, data);
	}, [id, edges, connectedEdges, data]);

	return (
		<div
			style={{ width: `${width}px` }}
			className={clsx("rounded-xl outline-none bg-base transition-all", {
				"shadow-card": !dragging,
				"shadow-card-selected": selected,
			})}
		>
			<div className="flex flex-col rounded-xl bg-white dark:bg-gray-50">
				<Header
					id={id}
					title={title}
					icon={icon}
					mdn={mdn}
					selected={selected}
				/>
				{targets.length > 0 && <Separator />}
				{targets.map((source: NodeSourceKey, index: number) => {
					// is this input connected to another node?
					// if so, get the id of that node
					const connectedTo =
						connectedEdges.find(
							(edge) =>
								edge.targetHandle === `in${index + 1}` && edge.source !== id,
						)?.source || false;

					const isConnected = connectedTo ? true : false;

					return (
						<TargetHandleRow
							key={`${id}-source-in${index + 1}`}
							label={`in${index + 1}`}
							isSelected={isSelected}
							nodeId={id}
							handleId={source} // id of source handle used by RF
							isConnected={isConnected} // is this source connected to another node?
							connectedTo={connectedTo} // id of node connected to this source if any
							dropdown={{
								value: attributes[`in${index + 1}`].value,
								onValueChange: (v: string) =>
									setAttr(`attributes.in${index + 1}.value`, v as BlendModeKey),
							}}
							filter={{
								id: id, // filter id of connected node, or unit filter id
								// text: filterText, // filter text of connected node, or unit filter
							}}
						/>
					);
				})}
				{sources.length > 0 && <Separator />}
				{sources.map((source, index) => {
					return (
						<SourceHandleRow
							key={`${index}-${source}`}
							isSelected={isSelected}
							label={`result`}
							id={source}
							filterId={id}
							isConnected={outgoers.length > 0 ? true : false}
							filterText={filterText}
						/>
					);
				})}

				<ControlGroup>
					<Separator />
					{children}
				</ControlGroup>
			</div>
		</div>
	);
}
