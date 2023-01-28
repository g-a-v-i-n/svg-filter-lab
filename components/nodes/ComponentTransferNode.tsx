import React, { memo } from "react"
import { Position } from "reactflow"
import useStore, { State } from "../../state/store"
import { Container } from "../nodeParts/Container"
import { ControlGroup } from "../nodeParts/ControlGroup"
import { Divider } from "../nodeParts/Divider"
import { Footer } from "../nodeParts/Footer"
import { Handle } from "../nodeParts/Handle"
import { HandlePositioner } from "../nodeParts/HandlePositioner"
import { Header } from "../nodeParts/Header"
import { MatrixInput } from "../nodeParts/MatrixInput"
import { NumberInput } from "../nodeParts/NumberInput"
import { Select, SelectItem, Separator } from "../nodeParts/Select"
import { Switch } from "../nodeParts/Switch"
import { SwitchRow } from "../nodeParts/SwitchRow"
import { NodeState, metadata } from "../../state/nodes/componentTransfer"
import clsx from "clsx"

const selector = (state: State) => state.componentTransferNode

type NodeProps = NodeState & {}

function ComponentTransferNode({ id, data, selected }: NodeProps) {
    const { red, green, blue, alpha } = useStore(selector)

    return (
        <Container className="w-[270px]" selected={selected}>
            <Header metadata={metadata} id={id} />
            <SwitchRow label="Red">
                <Switch
                    label="red-channel"
                    className={`${
                        data.red.isOn
                            ? "bg-red flex-row-reverse"
                            : "bg-tertiary flex-row"
                    } `}
                    checked={data.red.isOn}
                    onCheckedChange={() => red.updateIsOn(id, !data.red.isOn)}
                />
            </SwitchRow>

            {data.red.isOn && (
                <ChannelGroup id={id} channel="red" data={data} store={red} />
            )}

            <SwitchRow label="Green">
                <Switch
                    label="green-channel"
                    className={`${
                        data.green.isOn
                            ? "bg-green flex-row-reverse"
                            : "bg-tertiary flex-row"
                    } `}
                    checked={data.green.isOn}
                    onCheckedChange={() =>
                        green.updateIsOn(id, !data.green.isOn)
                    }
                />
            </SwitchRow>

            {data.green.isOn && (
                <ChannelGroup
                    id={id}
                    channel="green"
                    data={data}
                    store={green}
                />
            )}

            <SwitchRow label="Blue">
                <Switch
                    label="blue-channel"
                    className={`${
                        data.blue.isOn
                            ? "bg-blue flex-row-reverse"
                            : "bg-tertiary flex-row"
                    } `}
                    checked={data.blue.isOn}
                    onCheckedChange={() => blue.updateIsOn(id, !data.blue.isOn)}
                />
            </SwitchRow>

            {data.blue.isOn && (
                <ChannelGroup id={id} channel="blue" data={data} store={blue} />
            )}

            <SwitchRow label="Alpha">
                <Switch
                    label="alpha-channel"
                    className={`${
                        data.alpha.isOn
                            ? "bg-primary flex-row-reverse"
                            : "bg-tertiary flex-row"
                    } `}
                    checked={data.alpha.isOn}
                    onCheckedChange={() =>
                        alpha.updateIsOn(id, !data.alpha.isOn)
                    }
                />
            </SwitchRow>

            {data.alpha.isOn && (
                <ChannelGroup
                    id={id}
                    channel="alpha"
                    data={data}
                    store={alpha}
                />
            )}

            <Footer />

            <HandlePositioner left>
                <Handle
                    selected={selected} 
                    type="target"
                    id="in"
                    title="In"
                    position={Position.Left}
                />
            </HandlePositioner>

            <HandlePositioner right>
                <Handle
                    selected={selected} 
                    type="source"
                    id="result"
                    title="Result"
                    position={Position.Right}
                />
            </HandlePositioner>
        </Container>
    )
}

function ChannelGroup({ id, channel, label, data, store }) {
    return (
        <ControlGroup>
            <Select
                name="Type"
                value={data[channel].type}
                onValueChange={(val: string) => store.updateType(id, val)}
                className={clsx({
                    "rounded-b-xl": data[channel].type.key === "identity",
                })}
            >
                <SelectItem value="identity">Identity</SelectItem>
                <Separator />
                <SelectItem value="table">Table</SelectItem>
                <SelectItem value="linear">Linear</SelectItem>
                <SelectItem value="discrete">Discrete</SelectItem>
                <SelectItem value="gamma">Gamma</SelectItem>
            </Select>

            {data[channel].type.key === "linear" && (
                <>
                    <Divider />
                    <NumberInput
                        label="Slope"
                        value={data[channel].slope}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            store.updateSlope(id, e.target.value)
                        }
                    />
                    <Divider />
                    <NumberInput
                        last
                        label="Intercept"
                        value={data[channel].intercept}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            store.updateIntercept(id, e.target.value)
                        }
                    />
                </>
            )}

            {data[channel].type.key === "gamma" && (
                <>
                    <Divider />
                    <NumberInput
                        label="Amplitude"
                        value={data[channel].amplitude}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            store.updateAmplitude(id, e.target.value)
                        }
                    />
                    <Divider />
                    <NumberInput
                        label="Exponent"
                        value={data[channel].exponent}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            store.updateExponent(id, e.target.value)
                        }
                    />
                    <Divider />
                    <NumberInput
                        last
                        label="Offset"
                        value={data[channel].offset}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            store.updateOffset(id, e.target.value)
                        }
                    />
                </>
            )}

            {(data[channel].type.key === "table" ||
                data[channel].type.key === "discrete") && (
                <>
                    <Divider />
                    <MatrixInput
                        last
                        rows={4}
                        cols={4}
                        label="Table Values"
                        values={data[channel].tableValues}
                        onChange={(value: number, i, j) => {
                            const newValues = data.values.map(
                                (row: number[]) => [...row]
                            )
                            newValues[i][j] = value
                            store.updateTableValues(id, newValues)
                        }}
                    />
                </>
            )}
        </ControlGroup>
    )
}

export default memo(ComponentTransferNode)
