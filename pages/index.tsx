import React, { useCallback, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Div100vh from "react-div-100vh";
import ReactFlow, { useNodesState, useEdgesState, addEdge } from "reactflow";

import useStore from "../store/store";

import { initialNodes, initialEdges } from "../store/defaultState";
import CustomNode from "../components/nodes/CustomNode";
import CustomEdge from "../components/CustomEdge";
import BlendNode from "../components/nodes/BlendNode";
import ColorMatrix from "../components/nodes/ColorMatrixNode";

const nodeTypes = {
  custom: CustomNode,
  blend: BlendNode,
  colorMatrix: ColorMatrix,
};

const edgeTypes = {
  custom: CustomEdge,
};

const Home: NextPage = () => {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore();

  console.log("state", nodes);

  return (
    <Div100vh>
      <ReactFlow
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
      ></ReactFlow>
    </Div100vh>
  );
};

export default Home;
