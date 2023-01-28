import clsx from "clsx"
import { NumericFormat } from "react-number-format"
import FieldLabel from "./FieldLabel"

type MatrixInputProps = {
    rows: number
    cols: number
    className?: string
    label: string
    disabled?: boolean
    onValueChange: (v: number, i: number, j: number) => void
    values: number[][]
}

export function MatrixInput({
    rows,
    cols,
    className,
    values,
    onValueChange,
    disabled,
    ...props
}: MatrixInputProps) {
    return (
        <div
            className={clsx(
                "flex w-full items-center justify-between p-2",
                className
            )}
        >
            <FieldLabel>{props.label}</FieldLabel>
            <div
                className={`flex flex-col borderPrimary border rounded ${
                    disabled ? "opacity-50" : ""
                }`}
            >
                {[...Array(rows)].map((_, i) => {
                    return (
                        <div
                            className="flex"
                            key={props.label + "-" + "rows" + "-" + i}
                        >
                            {[...Array(cols)].map((_, j) => {
                                const inputCns = clsx(
                                    {
                                        "border-r": j !== cols - 1,
                                        "border-b": i !== rows - 1,
                                        "rounded-tl-sm": i === 0 && j === 0,
                                        "rounded-tr-sm":
                                            i === 0 && j === cols - 1,
                                        "rounded-bl-sm":
                                            i === rows - 1 && j === 0,
                                        "rounded-br-sm":
                                            i === rows - 1 && j === cols - 1,
                                    },
                                    "w-8 h-5 text-center font-mono bg-transparent borderPrimary relative focus:z-10"
                                )
                                return (
                                    <NumericFormat
                                        key={
                                            props.label +
                                            "-" +
                                            "rows" +
                                            i +
                                            "-" +
                                            "cols" +
                                            j
                                        }
                                        className={inputCns}
                                        value={values[i][j]}
                                        onChange={(e) => {
                                            onValueChange(
                                                Number(e.target.value),
                                                i,
                                                j
                                            )
                                        }}
                                        allowNegative
                                    />
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

MatrixInput.defaultProps = {
    className: "",
    disabled: false,
}
