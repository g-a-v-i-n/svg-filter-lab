
import { memo } from "react"
import { NodeProps } from "reactflow";
import useStore from "@state/store"
// import { exporter } from "@state/exporter";
import { Container } from "../nodeParts/Container"
import { Select, SelectItem } from "../nodeParts/Select"
import { AttributeDefinition, EnumOption, NodeSpecification, State } from '@/types';
import { NumberInput } from "../nodeParts/NumberInput";
import { MatrixInput } from "../nodeParts/MatrixInput";
import { SectionSwitch } from "../nodeParts/SectionSwitch";
import { StringInput } from "../nodeParts/StringInput";
import { byOrdering } from "@lib/byOrdering";

type NodeState = NodeProps & {
    
}

export function nodeFactory(specification:NodeSpecification) {
    const {
        attributes,
        meta,
    } = specification;

    const selector = (state: State) => state[meta.nodeType];

    return memo((props:NodeState) => {
        const slice = useStore(selector);

        const { id, data, selected, dragging } = props
        const state = data
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
                        .map((spec) => {

                            if (spec.isHidden) {
                                if (spec.isHidden(state)) return null
                            }

                            const attr = state.attributes[spec.key]
                            const subslice = slice[spec.key]

                            if (spec.input.type === 'enum') {
                                return (
                                    <Select
                                        title={spec.title}
                                        value={state.value}
                                        onValueChange={(value:string) => subslice.set(nodeId, value)}
                                        hasValue={state.hasValue}
                                        hasError={state.hasError}
                                        defaultValue={spec.defaultValue}
                                    >
                                        {
                                            attr.input.options.map(({key, title, cat}:EnumOption) =>{
                                                return (
                                                    <SelectItem key={key} value={key}>{title}</SelectItem>
                                                )
                                            })
                                        }
                                    </Select>
                                );
                            };

                            if (spec.input.type === 'number') {
                                return (
                                    <NumberInput
                                        title={spec.title}
                                        value={state.value}
                                        set={(value:number) => subslice.set(nodeId, value)}
                                        min={spec.input.min}
                                        max={spec.input.max}
                                        step={spec.input.step}
                                        precision={spec.input.precision}
                                        allowNegative={spec.input.allowNegative}
                                        hasValue={data.hasValue}
                                        hasError={data.hasError}
                                        defaultValue={spec.defaultValue}
                                    />
                                );
                            };

                            if (spec.input.type === 'matrix') {
                                return (
                                    <MatrixInput
                                        title={spec.title}
                                        value={data.value}
                                        rows={spec.input.rows}
                                        cols={spec.input.cols}
                                        set={(v:number, i, j) => slice[attr.key].set(nodeId, v, i , j)}
                                        hasValue={data.hasValue}
                                        hasError={data.hasError}
                                        defaultValue={spec.defaultValue}
                                    />
                                )
                            }

                            if (spec.input.type === 'color') {
                                return (
                                    <div/>
                                )
                            }

                            if (spec.input.type === 'string') {
                                return (
                                    <StringInput
                                        title={spec.title}
                                        value={data.value}
                                        set={(v:string) => slice[attr.key].set(nodeId, v)}
                                        hasValue={data.hasValue}
                                        hasError={data.hasError}
                                        defaultValue={spec.defaultValue}
                                    />
                                )
                            }

                            if (spec.input.type === 'sectionSwitch') {
                                return (
                                    <SectionSwitch
                                        title={spec.title}
                                        value={data.value}
                                        set={(v:boolean) => slice[attr.key].set(nodeId, v)}
                                        hasValue={data.hasValue}
                                        hasError={data.hasError}
                                        defaultValue={spec.defaultValue}
                                    />
                                )
                            }

                            console.error(`Unknown input type ${attr.input.type}`)
                        })
                }
                {/* <div className="fixed pt-32 text-xs text-primary opacity-50 font-mono pl-3 flex flex-col pointer-events-none">
                    {id}
                    <pre>
                    {
                    JSON.stringify(data, null, 2)
                    }
                    </pre>
                </div> */}
            </Container>
        )
    })
}

// type EnumProps = {
//     title: string
//     input: {
//         type: string
//         options: {
//             key: string
//             title: string
//             cat: string
//         }[]
//     }
//     data: {
//         value: string
//         hasValue: boolean
//         hasError: boolean
//     }
//     set: (value: string) => void
//     defaultValue: string
// }

// function Enum({title, input, data, set, defaultValue}:EnumProps) {
//     const { options } = input
//     return (
//         <Select
//             title={title}
//           value={data.value}
//           onValueChange={(val: string) => set(val)}
//           hasValue={data.hasValue}
//           hasError={data.hasError}
//           defaultValue={defaultValue}
//         >
//         {
//             options.map(({key, title, cat}, index) =>{
//                 return (
//                     <SelectItem key={key} value={key}>{title}</SelectItem>
//                 )
//             })
//         }
//         </Select>
//     )
// }

// type NumberProps = {
//     title: string
//     input: {
//         type: string
//         min: number
//         max: number
//         step: number
//     }
//     value: number
//     hasValue: boolean
//     hasError: boolean

//     set: (value: number) => void
//     defaultValue: number
// }

// function Number({title, input, data, set, defaultValue}:NumberProps) {
//     return (
//         <NumberInput
//             title={title}
//             value={data.value}
//             set={set}
//             min={input.min}
//             max={input.max}
//             step={input.step}
//             precision={input.precision}
//             allowNegative={input.allowNegative}
//             hasValue={data.hasValue}
//             hasError={data.hasError}
//             defaultValue={defaultValue}
//         />
//     )
// }

// type MatrixProps = {
//     title: string
//     input: {
//         type: string
//         rows: number
//         cols: number
//     }
//     data: {
//         value: number[][]
//         hasValue: boolean
//         hasError: boolean
//     }
//     set: (value: number[][], i:number, j:number) => void
//     defaultValue: number[][]
// }

// function Matrix({title, input, data, set, defaultValue}:MatrixProps) {
//     return (
//         <MatrixInput
//             title={title}
//             value={data.value}
//             rows={input.rows}
//             cols={input.cols}
//             set={set}
//             hasValue={data.hasValue}
//             hasError={data.hasError}
//             defaultValue={defaultValue}
//         />
//     )
// }

// function Color({title, input, data, set, defaultValue}) {
//     return (
//         <div/>
//     )
// }

// function String({title, input, data, set, defaultValue}) {
//     return <StringInput 
//         title={title}
//         value={data.value}
//         set={set}
//         hasValue={data.hasValue}
//         hasError={data.hasError}
//         defaultValue={defaultValue}
//     />
// }

