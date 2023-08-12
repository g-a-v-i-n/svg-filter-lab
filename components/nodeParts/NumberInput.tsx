import clsx from "clsx"
import { NumericFormat } from "react-number-format"
import FieldLabel from "./FieldLabel"

export type NumberInputProps = {
  title: string
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
  title,
  onChange,
  step,
  precision,
  className,
  ...props
}: NumberInputProps) {
  return (
    <div className={"flex w-full px-2 h-8 items-center justify-between z-10"}>
      <FieldLabel className="">{title}</FieldLabel>
      <div className="field fieldDivX flex rounded h-5">
      <DetentButton 
        onClick={() => onChange((Number(props.value) - step).toFixed(precision))} 
        className="">􀅽</DetentButton>

      <NumericFormat
        className={clsx(
          "w-20 flex cs-text items-center text-right bg-transparent px-1",
          className
        )}
        value={props.value}
        onChange={(e) => onChange(Number(e.target.value))}
        allowNegative
      />

        <DetentButton 
          onClick={() => onChange((Number(props.value) + step).toFixed(precision))} 
          className="">􀅼</DetentButton>
      </div>
    </div>
  )
}

function DetentButton(props) {
  return (
    <button
      onClick={props.onClick}
      className={clsx("h-full w-full flex items-center justify-center px-1", props.className)}
  >
    <span className="cs-text-xs textTertiary text-center hover:textPrimary font-bold">
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
