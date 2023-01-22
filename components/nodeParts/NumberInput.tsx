import clsx from "clsx";
import { NumericFormat } from "react-number-format";
import FieldLabel from "./FieldLabel";

export type NumberInputProps = {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
  step?: number;
  min?: number;
  max?: number;
  precision?: number;
  first?: boolean;
  last?: boolean;
  className?: string;
};

export function NumberInput({
  label,
  onChange,
  step,
  precision,
  className,
  ...props
}: NumberInputProps) {
  return (
    <div
      className={clsx(
        "flex w-full items-center justify-center relative z-10",
        className
      )}
    >
      <FieldLabel className="absolute left-2">{label}</FieldLabel>
      <NumericFormat
        className={clsx(
          "w-full flex items-center text-right h-8 px-2 bg-transparent",
          {
            "rounded-t-xl": props.first,
            "rounded-b-xl": props.last,
          }
        )}
        value={props.value}
        onChange={(e) => onChange(e)}
        allowNegative
      />
      {/* <div className="flex pr-1.5">
          <button
            onClick={() => {
              onChange({
                target: {
                  value: (Number(props.value) - step).toFixed(precision),
                },
              });
            }}
            className="font-icon text-secondary cs-text-sm font-medium hover:text-primary"
          >
            􀁏
          </button>
  
          <button
            onClick={() => {
              onChange({
                target: {
                  value: (Number(props.value) + step).toFixed(precision),
                },
              });
            }}
            className="font-icon text-secondary cs-text-sm font-medium hover:text-primary"
          >
            􀁍
          </button>
        </div> */}
    </div>
  );
}

NumberInput.defaultProps = {
  className: "",
  step: 1,
  precision: 0,
};
