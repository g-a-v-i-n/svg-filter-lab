import React, { memo } from "react"
import useStore, { State } from "../../state/store"
import { Container } from "../nodeParts/Container"
import { Select, SelectItem, Separator } from "../nodeParts/Select"
import { NodeDefinition } from "../../types";
import { NumberInput } from "../nodeParts/NumberInput";
import { MatrixInput } from "../nodeParts/MatrixInput";


export function nodeFactory(definition:NodeDefinition) {
    const {
        attributes,
        meta,
    } = definition;

    const selector = (state: State) => state[meta.nodeType];

    return memo((props) => {
        const slice = useStore(selector);

        const { id, data, selected, dragging } = props
        const nodeId = id

        const byAttrOrder = (a, b) => meta.attributeOrder.indexOf(a.key) - meta.attributeOrder.indexOf(b.key);

        return (
            <Container
                id={id}
                metadata={meta} 
                selected={selected} 
                dragging={dragging}>
                {
                    Object.values(attributes).sort(byAttrOrder).map(
                        (attr, index) => {
                            return createAttrUI(
                                attr, // attr definition
                                index, 
                                data.attributes[attr.key], // state
                                (value) => slice[attr.key].set(nodeId, value) // setter
                            )
                        }
                    )
                }
            </Container>
        )
    })
}

function createAttrUI(attr, index, data, set) {

    if (attr.input.type === 'enum') {
        return (
            <Enum {...attr} data={data} set={set} />
        )
    }
    if (attr.input.type === 'number') {
        return (
            <Number {...attr} data={data} set={set} />
        )
    }
    if (attr.input.type === 'matrix') {
        return (
            <Matrix {...attr}  data={data} set={set} />
        )
    }
    if (attr.input.type === 'color') {
        return (
            <Color {...attr} data={data} set={set} />
        )
    }
    if (attr.input.type === 'string') {
        return (
            <String {...attr} data={data} set={set} />
        )
    }
}

function Enum({title, input, data, set, defaultValue}) {
    const { options } = input
    return (
        <Select
        title={title}
          value={data.value}
          onValueChange={(val: string) => set(val)}
          hasValue={data.hasValue}
          hasError={data.hasError}
          defaultValue={defaultValue}
        >
        {
            options.map(({key, title, cat}, index) =>{
                return (
                    <SelectItem key={key} value={key}>{title}</SelectItem>
                )
            })
        }
        </Select>
    )
}

function Number({title, input, data, set, defaultValue}) {
    return (
        <NumberInput
        title={title}
              value={data.value}
              onChange={(value:number) => set(value)}
              min={input.min}
            max={input.max}
            step={input.step}
            hasValue={data.hasValue}
            hasError={data.hasError}
            defaultValue={defaultValue}
            />
    )
}

function Matrix({title, input, data, set, defaultValue}) {
    return (
        <MatrixInput
            title={title}
            value={data.value}
            rows={input.rows}
            cols={input.cols}
            onValueChange={(value:number[][], i, j) => set(value, i, j)}
            hasValue={data.hasValue}
            hasError={data.hasError}
            defaultValue={defaultValue}
        />
    )
}

function Color({title, input, data, set, defaultValue}) {
    return (
        <div/>
    )
}

function String() {
    return <div/>
}

