import React, { memo } from "react"
import useStore, { State } from "../../state/store"
import { Container } from "../nodeParts/Container"
import { Select, SelectItem, Separator } from "../nodeParts/Select"
import nodes from '../../state/nodes/index'

export function nodeFactory(type) {

    const selector = (state: State) => state[type];

    return memo((props) => {
        const slice = useStore(selector);

        const { id, data, selected, dragging } = props

        const {definition} = nodes[type];

        return (
            <Container
                id={id}
                metadata={definition.meta} 
                selected={selected} 
                dragging={dragging}>
                {
                    Object.values(definition.attributes).map(
                        (attr, index) => {
                            // console.log(
                            //     attr,
                            //     index,
                            //     data.attributes[attr.key],
                            //     slice[attr.key].set
                            // )
                            return createAttrUI(
                                attr, 
                                index, 
                                data.attributes[attr.key], 
                                slice[attr.key].set
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
            <Matrix {...attr} data={data} set={set} />
        )
    }
    if (attr.input.type === 'string') {
        return (
            <String {...attr} data={data} set={set} />
        )
    }
}

function Enum({key, name, title, input, data, set}) {
    const { options } = input
    return (
        <Select
          name={title}
          value={data.value}
          onValueChange={(val: string) => set(key, val)}
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

function Number() {
    return <div/>
}

function Matrix() {
    return <div/>
}

function String() {
    return <div/>
}