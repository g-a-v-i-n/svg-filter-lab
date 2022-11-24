import React, { useCallback, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Div100vh from "react-div-100vh";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  ReactFlowProvider,
  useReactFlow,
} from "reactflow";

import useStore from "../store/store";

import { initialNodes, initialEdges } from "../store/defaultState";
import CustomEdge from "../components/CustomEdge";
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
  convolutionMatrix: ConvolutionMatrix
};

const edgeTypes = {
  custom: CustomEdge,
};

function Flow(props) {
  return <ReactFlow {...props} />;
}

const Home: NextPage = () => {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore();

  return (
    <Div100vh>
      <ReactFlowProvider>
        <Flow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          fitView
          // maxZoom={1}
          // attributionPosition="bottom-left"
        />
      </ReactFlowProvider>
    </Div100vh>
  );
};

export default Home;
