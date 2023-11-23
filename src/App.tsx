import { useEffect, useRef } from "react";
import ReactFlow, {
	ReactFlowProvider,
	Background,
	Controls,
	BackgroundVariant,
} from "reactflow";
// @ts-ignore: allotment has incorrectly bundled or missing types
import { Allotment } from "allotment";
import "allotment/dist/style.css";

import useStore from "@state/store";
import Edge from "@components/edges/Edge";
import ConnectionLine from "@components/edges/ConnectionLine";
import { Sidebar } from "@components/sidebar/Sidebar";
import { nodeTypes } from "@components/nodes";

const edgeTypes = {
	custom: Edge,
};

const Home = () => {
	const RFWrapper = useRef(null);

	const {
		data,
		nodes,
		edges,
		onNodesChange,
		onEdgesChange,
		onConnect,
		onSelectionChange,
		createNodeViaDrop,
		onDragOver,
		setReactFlowInstance,
		importFilter,
	} = useStore();

	// console.log("app rendered");
	// console.log(data);

	useEffect(() => {
		// On page load or when changing themes, best to add inline in `head` to avoid FOUC
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}

		// Whenever the user explicitly chooses light mode
		localStorage.theme = "light";

		// Whenever the user explicitly chooses dark mode
		localStorage.theme = "dark";

		// Whenever the user explicitly chooses to respect the OS preference
		localStorage.removeItem("theme");
	});

	if (process.env.NODE_ENV !== "development") {
		return (
			<main className="w-full h-[100dvh] flex items-center justify-center">
				<div className="text-gray-700">Coming Soon</div>
			</main>
		);
	}

	return (
		<main className="relative w-full h-[100dvh] flex">
			<div className="absolute right-0 top-0 p-8 z-50">
				<button type="button" onClick={() => importFilter()}>
					Import
				</button>
			</div>
			<Allotment>
				<Allotment.Pane minSize={100} maxSize={320} preferredSize={220}>
					<Sidebar />
				</Allotment.Pane>
				<Allotment.Pane minSize={200}>
					<ReactFlowProvider>
						<div ref={RFWrapper} className="w-full h-full relative">
							<ReactFlow
								nodes={nodes}
								edges={edges}
								onNodesChange={onNodesChange}
								onEdgesChange={onEdgesChange}
								onConnect={onConnect}
								onSelectionChange={onSelectionChange}
								nodeTypes={nodeTypes}
								edgeTypes={edgeTypes}
								connectionLineComponent={ConnectionLine}
								onDrop={(event) => createNodeViaDrop(event, RFWrapper)}
								onInit={setReactFlowInstance}
								onDragOver={onDragOver}
								fitView
								selectionOnDrag
								panOnScroll
								panOnDrag={false}
								// snapToGrid
								attributionPosition="bottom-center"
							>
								<Background color="#ccc" variant={BackgroundVariant.Dots} />
							</ReactFlow>
							<Controls />
						</div>
					</ReactFlowProvider>
				</Allotment.Pane>
			</Allotment>
		</main>
	);
};

export default Home;
