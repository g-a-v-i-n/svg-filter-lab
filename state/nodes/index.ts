import * as blend from "./blend";
import * as colorMatrix from "./colorMatrix";
import * as gaussianBlur from "./gaussianBlur";
import * as image from "./image";

import * as composite from "./composite";
import * as offset from "./offset";
import * as source from "./source";
// import * as componentTransfer from "./componentTransfer";
import * as convolveMatrix from "./convolveMatrix";
// import * as specularLighting from "./specularLighting";
// import * as merge from "./merge";
import * as turbulence from "./turbulence";
import * as displacementMap from "./displacementMap";
import * as morphology from "./morphology";
import * as tile from "./tile";
import * as flood from './flood'
import * as dropShadow from './dropShadow'

import { createNodeCreator } from "../common";
import { createNodeExporter } from "../exporter";

let nodes = {
    blend,
    colorMatrix,
    gaussianBlur,
    image,
    composite,
    offset,
    // source,
    // componentTransfer,
    convolveMatrix,
    // specularLighting,
    turbulence,
    displacementMap,
    morphology,
    tile,
    dropShadow,
    source,
    // flood
};

// add createData and exportData to each node
nodes = Object.entries(nodes).reduce((acc, [key, node]) => {
    return {
        ...acc,
        [key]: {
            ...node,
            createData: createNodeCreator(node.definition),
            exportData: createNodeExporter(node.definition),
        },
    };
}, {});


export default nodes;