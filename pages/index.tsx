import React, { useRef } from "react"
import type { NextPage } from "next"
import Div100vh from "react-div-100vh"
import ReactFlow, { ReactFlowProvider } from "reactflow"

import useStore from "../state/store"

import Edge from "../components/edges/Edge"
import ConnectionLine from "../components/edges/ConnectionLine"

import SourceNode from "../components/nodes/SourceNode"
import BlendNode from "../components/nodes/BlendNode"
import ColorMatrixNode from "../components/nodes/ColorMatrixNode"
import ComponentTransferNode from "../components/nodes/ComponentTransferNode"
import CompositeNode from "../components/nodes/CompositeNode"
import ConvolveMatrixNode from "../components/nodes/ConvolveMatrixNode"
import { Tray } from "../components/tray/Tray"
import pkg from "../package.json"

const nodeTypes = {
  source: SourceNode,
  blend: BlendNode,
  colorMatrix: ColorMatrixNode,
  componentTransfer: ComponentTransferNode,
  composite: CompositeNode,
  convolveMatrix: ConvolveMatrixNode,
}

const edgeTypes = {
  custom: Edge,
}

function Flow(props) {
  return <ReactFlow {...props} />
}

const Home: NextPage = () => {
  const RFWrapper = useRef(null)

  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    onDrop,
    onDragOver,
    setReactFlowInstance,
  } = useStore()
  console.log("nodes", nodes)
  return (
    <Div100vh>
      <ReactFlowProvider>
        <div ref={RFWrapper} className={"w-full h-full"}>
          <Flow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            connectionLineComponent={ConnectionLine}
            onDrop={(event) => onDrop(event, RFWrapper)}
            onInit={setReactFlowInstance}
            onDragOver={onDragOver}
            fitView
            panOnScroll
            // maxZoom={1}
            attributionPosition="bottom-center"
          />
        </div>
      </ReactFlowProvider>
      <Tray />

      <div className="fixed right-4 top-4">
        <div className="bg-green cs-text text-inversePrimary dark:text-primary p-2 rounded-full">
          {pkg.version}
        </div>
      </div>
    </Div100vh>
  )
}

export default Home
