import React from "react";
import type { NextPage } from "next";
import Div100vh from "react-div-100vh";
import ReactFlow, { ReactFlowProvider } from "reactflow";

import useStore from "../stores/store";

import Edge from "../components/edges/Edge";
import ConnectionLine from "../components/edges/ConnectionLine";
import BlendNode from "../components/nodes/BlendNode";
import ColorMatrixNode from "../components/nodes/ColorMatrixNode";
import ComponentTransferNode from "../components/nodes/ComponentTransferNode";
import CompositeNode from "../components/nodes/CompositeNode";
import ConvolutionMatrix from "../components/nodes/ConvolutionMatrix";

const nodeTypes = {
  blend: BlendNode,
  colorMatrix: ColorMatrixNode,
  componentTransfer: ComponentTransferNode,
  composite: CompositeNode,
  convolutionMatrix: ConvolutionMatrix,
};

const edgeTypes = {
  custom: Edge,
};

function Flow(props) {
  return <ReactFlow {...props} />;
}

const Home: NextPage = () => {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore();

  console.log(
    'Home: rendered',
    'nodes: ', nodes,
    'edges: ', edges,
    )

  return (
    <Div100vh>
      {/* <nav className="fixed left-0 top-0 bottom-0 h-full flex w-[220px] bg-surface border-r border-r-stroke z-40">
          <header className="p-4">
            SVG Filter Lab
          </header>
        </nav> */}
      <ReactFlowProvider>
        <Flow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          connectionLineComponent={ConnectionLine}
          fitView
          panOnScroll
          // maxZoom={1}
          attributionPosition="bottom-center"
        />
      </ReactFlowProvider>
    </Div100vh>
  );
};

export default Home;
