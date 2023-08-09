import clsx from "clsx"
import { NumericFormat } from "react-number-format"
// import { UNSET, UnsetValue } from "../../lib/unset"
import FieldLabel from "./FieldLabel"

type MatrixInputProps = {
  rows: number
  cols: number
  hasValue: boolean
  hasError: boolean
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
  hasValue,
  hasError,
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
        className={`flex flex-col border borderPrimary divide-y dividePrimary rounded ${
          disabled ? "opacity-50" : ""
        }`}
      >
        {hasValue === false && (
          <div className="flex divide-x dividePrimary">
            <span>Unset</span>
          </div>
        )}
        {hasValue === true &&
          [...Array(rows)].map((_, i) => {
            return (
              <div
                className="flex divide-x dividePrimary"
                key={props.label + "-" + "rows" + "-" + i}
              >
                {[...Array(cols)].map((_, j) => {
                  const inputCns = clsx(
                    {
                      "rounded-tl-sm": i === 0 && j === 0,
                      "rounded-tr-sm": i === 0 && j === cols - 1,
                      "rounded-bl-sm": i === rows - 1 && j === 0,
                      "rounded-br-sm": i === rows - 1 && j === cols - 1,
                    },
                    "w-full h-6 text-center font-mono bg-transparent relative focus:z-10"
                  )
                  return (
                    <NumericFormat
                      key={props.label + "-" + "rows" + i + "-" + "cols" + j}
                      className={inputCns}
                      value={values[i][j]}
                      onChange={(e) => {
                        onValueChange(Number(e.target.value), i, j)
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
