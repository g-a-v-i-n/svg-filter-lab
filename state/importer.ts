import { uuid } from "../lib/uuid"
// import { allowedInputs } from "./allowedInputs"

export const reservedIds = [
    "SourceGraphic",
    "SourceAlpha",
    "BackgroundImage",
    "BackgroundAlpha",
    "FillPaint",
    "StrokePaint",
]

export function setInToIn1(node) {
    const in1 = node.attributes.in
    delete node.attributes.in
    node.attributes.in1 = in1
    return node
}

export function uniquify(tags) {
    const aliases = {
        // oldId: 'newId'
    }

    const newTags = tags.map(tag => {
        const in1 = tag.attributes.in1
        const in2 = tag.attributes.in2
        const result = tag.attributes.result

        if (result) {
            if (result in aliases) {
                // If this attribute has been seen before, assign the the id an alias in
                // both aliases and replace it with the new value in the tag
                const newId = uuid('n')
                tag.attributes.result = newId
                aliases[result] = newId
            } else {
                // If its a new id, add it to aliases but don't change it.
                // aliases[result] = result
                const newId = uuid('n')
                tag.attributes.result = newId
                aliases[result] = newId
            }
        }

        if (in1) {
            if (in1 in aliases) {
                // if this id has an alias, use the alias instead of the existing ID
                tag.attributes.in1 = aliases[in1]
            } else {
                // if this id has no result id at all, it may be an error, or it could be a reserved id.
                console.log(in1)
            }
        }

        if (in2) {
            if (in2 in aliases) {
                // if this id has an alias, use the alias instead of the existing ID
                tag.attributes.in2 = aliases[in2]
            } else {
                // if this id has no result id at all, it may be an error, or it could be a reserved id.
                console.log(in2)
            }
        }

        return tag
    })
    return newTags
}

export function infill(tags) {

    let lastUnsetResult = "SourceGraphic"

    const newTags = tags.map(tag => {

        const in1 = tag.attributes.in1
        const in2 = tag.attributes.in2
        const result = tag.attributes.result

        if (in1) {
            // noop
        } else {
            if (allowedInputs[tag.name].includes('in1')) {
                tag.attributes.in1 = lastUnsetResult
            }
        }

        if (in2) {
            // noop
        } else {
            if (allowedInputs[tag.name].includes('in2')) {

                tag.attributes.in2 = lastUnsetResult
            }
        }

        if (result) {
            // noop
        } else {
            const newId = uuid('n')
            tag.attributes.result = newId
            lastUnsetResult = newId
        }

        return tag
    })

    return newTags
}


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