import { useEffect, useRef } from "react";
import ReactFlow, { ReactFlowProvider, Background, Controls } from "reactflow";
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
		nodes,
		edges,
		onNodesChange,
		onEdgesChange,
		onConnect,
		onSelectionChange,
		onDrop,
		onDragOver,
		setXyfInstance,
		importFilter,
	} = useStore();

	console.log("app rendered");

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
				<Allotment.Pane minSize={100} maxSize={220} preferredSize={220}>
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
								onDrop={(event) => onDrop(event, RFWrapper)}
								onInit={setXyfInstance}
								onDragOver={onDragOver}
								fitView
								selectionOnDrag
								panOnScroll
								panOnDrag={false}
								// maxZoom={1}
								attributionPosition="bottom-center"
							>
								<Background color="#ccc" variant="dots" />
							</ReactFlow>
							<Controls />
						</div>
					</ReactFlowProvider>
				</Allotment.Pane>
				{/* <Allotment.Pane minSize={200} preferredSize={200}>
        <Preview />
      </Allotment.Pane> */}

				{/* <Tray /> */}
				{/* 
      <div className="fixed right-4 top-4 flex flex-col gap-y-2">
        <div className="bg-green cs-text text-inversePrimary dark:text-primary p-2 rounded-full">
          {pkg.version}
        </div>
        <button onClick={() => logState(nodes, edges)}>log state</button>
        <button onClick={() => logRender(nodes, edges)}>render</button>
        <button onClick={() => importFilter()}>import</button>
        <button onClick={() => parse(lizardSkin)}>parse</button>
      </div>

       */}
			</Allotment>
		</main>
	);
};

export default Home;
