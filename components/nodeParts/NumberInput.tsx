import clsx from "clsx"
import { NumericFormat } from "react-number-format"
import FieldLabel from "./FieldLabel"

export type NumberInputProps = {
  label: string
  onChange: (value:number) => void
  value: number
  step: number
  precision: number
  min?: number
  max?: number
  first?: boolean
  last?: boolean
  className?: string
}

export function NumberInput({
  label,
  onChange,
  step,
  precision,
  className,
  ...props
}: NumberInputProps) {
  return (
    <div className={"flex w-full px-2 h-8 items-center justify-between z-10"}>
      <FieldLabel className="">{label}</FieldLabel>
      <div className="field flex rounded h-6">
      <NumericFormat
        className={clsx(
          "w-20 flex items-center text-right bg-transparent",
          className
        )}
        value={props.value}
        onChange={(e) => onChange(Number(e.target.value))}
        allowNegative
      />
      <div className="w-6 flex flex-col h-full">
        <DetentButton onClick={() => onChange((Number(props.value) + step).toFixed(precision))} className="">􀅼</DetentButton>
        <DetentButton onClick={() => onChange((Number(props.value) - step).toFixed(precision))} className="">􀅽</DetentButton>
        {/* <button
          onClick={() => {
            onChange({
              target: {
                value: (Number(props.value) + step).toFixed(precision),
              },
            });
          }}
          className="h-full hover:text-primary"
        >
          <span className="text-sm textSecondary">􀅼</span>
        </button> */}

        {/* <button
          onClick={() => {
            onChange({
              target: {
                value: (Number(props.value) - step).toFixed(precision),
              },
            });
          }}
          className="h-full hover:text-primary"
        >
          <span className="text-sm textSecondary"></span>
        </button> */}
        </div>
      </div>
    </div>
  )
}

function DetentButton(props) {
  return (
    <button
      onClick={props.onClick}
      className="h-full w-full flex items-center justify-center"
  >
    <span className="cs-text-xs textSecondary text-center">
      {props.children}
    </span>
  </button>
  )
}

NumberInput.defaultProps = {
  className: "",
  step: 1,
  precision: 0,
}
