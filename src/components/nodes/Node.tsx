import { memo } from "react"
import { NodeProps } from "reactflow";
import useStore, { State } from "@state/store"
// import { exporter } from "@state/exporter";
import { Container } from "../nodeParts/Container"
import { Select, SelectItem } from "../nodeParts/Select"
import { NodeDefinition } from "../../../types";
import { NumberInput } from "../nodeParts/NumberInput";
import { MatrixInput } from "../nodeParts/MatrixInput";
import { byOrdering } from "@lib/byOrdering";

type NodeState = NodeProps & {
    
}

export function nodeFactory(definition:NodeDefinition) {
    const {
        attributes,
        meta,
    } = definition;

    const selector = (state: State) => state[meta.nodeType];

    return memo((props:NodeState) => {
        const slice = useStore(selector);

        const { id, data, selected, dragging } = props
        const nodeId = id

        return (
            <Container
                id={id}
                metadata={meta} 
                selected={selected} 
                dragging={dragging}>
                {
                    Object
                    .values(attributes)
                    .sort((a, b) => byOrdering(a.key, b.key, meta.attributeOrder))
                    .map((attr, index) => {
                        return createAttrUI(
                            attr, // attr definition
                            index, 
                            data.attributes[attr.key], // state
                            (value:any) => slice[attr.key].set(nodeId, value) // setter
                        )
                    })
                }
                <div className="fixed pt-32 text-xs text-primary opacity-50 font-mono pl-3 flex flex-col pointer-events-none">
                    {id}
                    <pre>
                    {
                    JSON.stringify(data, null, 2)
                    }
                    </pre>
                </div>
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

type EnumProps = {
    title: string
    input: {
        type: string
        options: {
            key: string
            title: string
            cat: string
        }[]
    }
    data: {
        value: string
        hasValue: boolean
        hasError: boolean
    }
    set: (value: string) => void
    defaultValue: string
}

function Enum({title, input, data, set, defaultValue}:EnumProps) {
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

type NumberProps = {
    title: string
    input: {
        type: string
        min: number
        max: number
        step: number
    }
    data: {
        value: number
        hasValue: boolean
        hasError: boolean
    }
    set: (value: number) => void
    defaultValue: number
}

function Number({title, input, data, set, defaultValue}:NumberProps) {
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

type MatrixProps = {
    title: string
    input: {
        type: string
        rows: number
        cols: number
    }
    data: {
        value: number[][]
        hasValue: boolean
        hasError: boolean
    }
    set: (value: number[][], i:number, j:number) => void
    defaultValue: number[][]
}

function Matrix({title, input, data, set, defaultValue}:MatrixProps) {
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

