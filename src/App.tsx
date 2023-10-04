import { useRef } from "react";
import ReactFlow, { ReactFlowProvider, Background } from "reactflow";
// @ts-ignore: allotment has incorrectly bundled or missing types
import { Allotment } from "allotment";
import "allotment/dist/style.css";

import useStore from "@state/store";
import Edge from "@components/edges/Edge";
import ConnectionLine from "@components/edges/ConnectionLine";
import { Sidebar } from "@components/sidebar/Sidebar";
import { nodeTypes } from "@components/nodes";
import { importer } from "./state/importer";

const edgeTypes = {
	custom: Edge,
};

const Home = () => {
	const RFWrapper = useRef(null);

	console.log("importer", importer(""));

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
	} = useStore();

	if (process.env.NODE_ENV !== "development") {
		return (
			<main className="w-full h-[100dvh] flex items-center justify-center">
				<div className="textSecondary">Coming Soon</div>
			</main>
		);
	}

	return (
		<main className="w-full h-[100dvh] flex">
			<Allotment>
				<Allotment.Pane minSize={100} maxSize={220} preferredSize={220}>
					<Sidebar />
				</Allotment.Pane>
				<Allotment.Pane minSize={200}>
					<ReactFlowProvider>
						<div ref={RFWrapper} className={"w-full h-full"}>
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
