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
// import * as flood from './flood'
import * as dropShadow from './dropShadow'

import { createNodeCreator } from "../common";
import { createNodeExporter } from "../exporter";
import { NodeDefinition } from "@/types";

let nodeSpecifications = {
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
const nodeDefinitions = Object.entries(nodeSpecifications).reduce((acc, [key, { specification }]) => {
    return {
        ...acc,
        [key]: {
            specification,
            createData: createNodeCreator(specification),
            exportData: createNodeExporter(specification),
            importData: () => { },
        },
    };
}, {}) as { [key: string]: NodeDefinition };


export default nodeDefinitions;