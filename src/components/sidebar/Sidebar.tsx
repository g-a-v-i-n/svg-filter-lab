import { nodeMetadata } from "@components/nodes";
import { version } from "@/package.json";
import { byAlpha } from "@lib/byAlpha";
import { Logo } from "./Logo";

// conver the nodes import to a dictionary
const orderedNodeMetadata = Object.values(nodeMetadata).sort((a, b) =>
	byAlpha(a.title, b.title),
);

export function Sidebar() {
	return (
		<aside className="relative w-full h-full bg-gray-50 backdrop-blur-3xl flex flex-col flex-none">
			<div className="flex justify-between items-center">
				<div className="flex items-center h-12">
					<Logo />
					<span className="font-semibold cs-text-lg">SVG Filter Lab</span>
				</div>
				<button type="button">{"<<"}</button>
			</div>
			<div className="w-full h-full overflow-y-scroll">
				<div className="flex flex-col">
					<Header>Image source</Header>
					<div className="flex w-full h-[380px] bg-gray-50" />
					<Header>Filter</Header>
					<Header>Elements</Header>
					<div className="flex flex-col gap-2 p-1">
						{orderedNodeMetadata.map((meta: NodeDefinition) => {
							return (
								<ElementListItem
									key={meta.nodeType}
									icon={meta.icon}
									title={meta.title}
									nodeType={meta.nodeType}
									onClick={() => {}}
								/>
							);
						})}
					</div>
				</div>
			</div>
			<div className="absolute left-0 bottom-0 p-3">
				<span className="textTertiary font-mono">{version}</span>
			</div>
		</aside>
	);
}

type ElementListItemProps = {
	metadata: NodeDefinition["specification"]["meta"];
};

export default function ElementListItem({
	icon,
	title,
	nodeType,
	onClick,
}: ElementListItemProps) {
	return (
		<div
			onClick={onClick}
			draggable
			onDragStart={(event) => {
				event.dataTransfer.setData("application/reactflow", nodeType);
				event.dataTransfer.effectAllowed = "move";
			}}
			className="rounded-lg flex items-center justify-between p-2 py-3 cursor-grab hover:bg-gray-100 transition-colors group"
		>
			<div className="flex items-center gap-x-2">
				<span className="select-none w-5 text-center">{icon}</span>
				<span className="select-none">{title}</span>
			</div>
			<span className="select-none opacity-0 group-hover:opacity-100 transition-opacity">
				􀄹
			</span>
		</div>
	);
}

function Header({ children }) {
	return (
		<div className="flex items-center h-8 border-t border-t-gray-200">
			<span className="p-2 font-semibold cs-text-sm text-gray-500">
				{children}
			</span>
		</div>
	);
}
