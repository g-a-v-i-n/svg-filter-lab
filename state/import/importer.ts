import { fromHtml } from "hast-util-from-html";
import { fromXml } from "xast-util-from-xml";

export function importer(str) {
    let errors = [];

    const options = {
        space: "svg",
        fragment: true,
        verbose: true,
        onerror: (error) => {
          errors.push({ ...error });
        },
      };
    
      const ast = fromXml(
        str,
        // @ts-ignore
        options
      );

      console.log(ast)
    
      // Very simple. just a reduce function that vists each node of the tree
    //   visit(
    //     { nodes:[], edges:[] },
    //     ast, 
    //     (acc, node) => makeGraph(acc, node)
    // )

      const filterTag = ast.children[0]

      const filterStack = filterTag.children

      const nodes = filterStack
      .filter((node) => node.type === "element")
      .map((node) => {

        console.log(node)

        return {
            id: "source-3GIuHW8x",
            type: nodeTypesByTagName[node.name],
            position: {
              x: 0,
              y: 0
            },
            data: {
              ...node.attributes
            },
            // width: 250,
            // height: 104,
            selected: false,
            // positionAbsolute: {
            //   x: 0,
            //   y: 0
            // },
            dragging: false
          }
      })

      const edges = filterStack.map((node, i) => {

        return {
            source: '', // Node ID
            sourceHandle: 'result',
            target: '', // Node ID
            targetHandle: 'in2',
            data: {
                source: "SourceGraphic"
            },
            type: 'custom',
            id: `reactflow__edge-source-jDxqNyUEresult-blend-gu7ziBxUin2`
        }

      })



}

const nodeTypesByTagName = {
    // Util filter tags
    source: 'source',
    // SVG filter tags
    feBlend: "blend",
    feColorMatrix: "colorMatrix",
    feComponentTransfer: "componentTransfer",
    feComposite: "composite",
    feConvolveMatrix: "convolveMatrix",
    feDiffuseLighting: "diffuseLighting",
    feDisplacementMap: "displacementMap",
    feFlood: "flood",
    feGaussianBlur: "gaussianBlur",
    feImage: "image",
    feMerge: "merge",
    feMorphology: "morphology",
    feOffset: "offset",
    feSpecularLighting: "specularLighting",
    feTile: "tile",
    feTurbulence: "turbulence",
};

// function visit(acc, node, fn) {
//   acc = fn(acc, node);
//   if (node.children) {
//     for (const child of node.children) {
//       visit(acc, child, fn);
//     }
//   }
//   return acc
// }

// function makeGraph(acc, node) {
//   if (node.type === "element") {
//     const { tagName, properties } = node;
//     // const { id } = properties;
//     // acc[id] = { id, tagName, properties };
//   }
//   return acc;
// }