import { nodeMetadata } from "@components/nodes";
import { version } from "@/package.json";
import { byAlpha } from "@lib/byAlpha";
import { NodeDefinition } from "@/types";

// conver the nodes import to a dictionary
const orderedNodeMetadata = Object.values(nodeMetadata).sort((a, b) =>
	byAlpha(a.title, b.title),
);

export function Sidebar() {
	return (
		<aside className="relative w-full h-full bg-black-100 dark:bg-white-100 backdrop-blur-3xl flex flex-col gap-1 p-1 flex-none">
			<span className="p-2 font-semibold">Filter Elements</span>
			{orderedNodeMetadata.map((meta: NodeDefinition) => {
				return (
					<Card
						key={meta.nodeType}
						icon={meta.icon}
						title={meta.title}
						nodeType={meta.nodeType}
					/>
				);
			})}
			<div className="absolute left-0 bottom-0 p-3">
				<span className="textTertiary font-mono">{version}</span>
			</div>
		</aside>
	);
}

type CardProps = {
	metadata: NodeDefinition["specification"]["meta"];
};

export default function Card({ icon, title, nodeType }: CardProps) {
	return (
		<div
			draggable
			onDragStart={(event) => {
				event.dataTransfer.setData("application/reactflow", nodeType);
				event.dataTransfer.effectAllowed = "move";
			}}
			className="rounded-lg flex items-center gap-x-2 p-2 cursor-grab"
		>
			<span className="select-none">{icon}</span>
			<span className="select-none">{title}</span>
		</div>
	);
}
