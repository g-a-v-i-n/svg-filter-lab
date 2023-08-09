import { fromXml } from "xast-util-from-xml"
import { setInToIn1 } from "./setInToIn1"
import { uuid } from "../../lib/uuid"
import { uniquify } from "./uniquify"
import { infill } from "./infill"
import { reservedIds } from "./reservedIds"
import { parsers } from "./parsers"

function nodeProps(i) {
  return {
    position: {
      x: i * 300,
      y: 0,
    },
    positionAbsolute: {
      x: i * 300,
      y: 0,
    },
    width: 250,
    height: 104,
    selected: false,
    dragging: false,
  }
}

export function parse(str) {
  let errors = []

  const options = {
    space: "svg",
    fragment: true,
    verbose: true,
    onerror: (error) => {
      errors.push({ ...error })
    },
  }

  const ast = fromXml(
    str,
    // @ts-ignore
    options
  )

  const filterNodes = ast
    .children[0].children
    .filter((node) => node.type === "element")
    .map(setInToIn1)
  
  // these functions must run in order
  const normalizedTags = infill(
    uniquify(filterNodes)
  )

  const nodes = normalizedTags.reduce((acc, tag, i) => {

    const name = nodeTypesByTagName[tag.name]

    // only used to replace reserved ids
    const newId = uuid('n')

    const nodesToAdd = [
      {
        id: tag.attributes.result,
        type: name,
        data: parsers[name](tag),
        ...nodeProps(i)
      }
    ];

    if (reservedIds.includes(tag.attributes.in1)) {
      nodesToAdd[0].data.in1 = newId;
      nodesToAdd.push({
        id: newId,
        type: 'source',
        data: {
          source: tag.attributes.in1,
          result: newId
        },
        ...nodeProps(i)
      }
      )
    }

    if (reservedIds.includes(tag.attributes.in2)) {
      nodesToAdd[0].data.in2 = newId;
      nodesToAdd.push({
        id: newId,
        type: 'source',
        data: {
            source: tag.attributes.in2,
            result: newId
        },
        ...nodeProps(i)
      }
      )
    }

    return [...acc, ...nodesToAdd]

  }, [])


  const edges = nodes.reduce((acc, node, i) => {
    const edgeProps = {
      selected: false,
      type: "custom",
    }
    const in1Edges = nodes
      .filter(n => node.data.result === n.data.in1)
      .map(n => ({
          id: uuid("e"),
          source: node.id,
          sourceHandle: "result",
          target: n.id,
          targetHandle: "in1",
          ...edgeProps
      }))

    const in2Edges = nodes
      .filter(n => node.data.result === n.data.in2)
      .map(n => ({
          id: uuid("e"),
          source: node.id,
          sourceHandle: "result",
          target: n.id,
          targetHandle: "in2",
          ...edgeProps
      }))

    return [...acc, ...in1Edges, ...in2Edges]

  }, [])

  console.log(nodes, edges)

  return {
    nodes,
    edges,
  }
}


const nodeTypesByTagName = {
  // Util filter tags
  source: "source",
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
}
