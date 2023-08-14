import React, { useEffect, useRef } from "react"
import type { NextPage } from "next"
import ReactFlow, { ReactFlowProvider } from "reactflow"
import "allotment/dist/style.css";
import { Allotment } from "allotment";
import pkg from "../package.json"

import useStore from "../state/store"
import Edge from "../components/edges/Edge"
import ConnectionLine from "../components/edges/ConnectionLine"
import {nodeFactory} from "../components/nodes/Node"
import { Sidebar } from "../components/sidebar/Sidebar"
import { Preview } from "../components/preview/Preview"
import nodes from '../state/nodes/index'
import { exportFilter } from "../state/exporter";


const nodeTypes = Object.entries(nodes).reduce((acc, [key, value]) => {
  acc[key] = nodeFactory(value.definition)
  return acc
}, {})

const edgeTypes = {
  custom: Edge,
}

// function Flow(props) {
//   return <ReactFlow {...props} />
// }

function logState(nodes, edges) {
  const initialNodes = JSON.stringify(nodes, null, 2)
  const initialEdges = JSON.stringify(edges, null, 2)
  console.log("initialNodes", initialNodes)
  console.log("initialEdges", initialEdges)
}

// function logRender(nodes, edges) {
//   console.log("RENDER", render(nodes, edges))
// }

// function importFilter() {
//   parse(lizardSkin)
// }

const Home: NextPage = () => {
  const RFWrapper = useRef(null)

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
    // parse,
    // filterText,
  } = useStore()

  console.log("STATE:", useStore())

  console.log(
    "exportFilter:",
    exportFilter(nodes)
  );

  useEffect(() => {
    console.log('this forces clientside render')
  })

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
            />
          </div>
        </ReactFlowProvider>
      </Allotment.Pane>
      <Allotment.Pane minSize={200} preferredSize={500}>
        <Preview />
      </Allotment.Pane>

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
  )
}

export default Home
