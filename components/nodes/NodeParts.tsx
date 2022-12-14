import { Handle, Position, HandleType } from "reactflow";
import classNames from "classnames";
import * as Select from "@radix-ui/react-select";
import * as Switch from "@radix-ui/react-switch";
import * as Tooltip from "@radix-ui/react-tooltip";
import { forwardRef } from "react";
import "reactflow/dist/base.css";
import classnames from "classnames";

export type StyledHandleProps = {
  type: HandleType;
  position: Position;
  id?: string;
  title: string;
  className?: string;
};

export function StyledHandle({
  className,
  type,
  position,
  ...props
}: StyledHandleProps) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Handle
            type={type}
            position={position}
            className={`bg-primary rounded-full w-[5px] h-6 flex-none !relative !top-auto !left-auto !right-auto !bottom-auto !translate-0 ${className}`}
            {...props}
            title={undefined} // Removing the title because of custom tooltip
          />
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            side={position === Position.Left ? "left" : "right"}
            className="bg-primary rounded-lg p-3 cs-text text-white font-medium shadow-high"
            sideOffset={2}
          >
            {props.title}
            <Tooltip.Arrow asChild>
              <svg
                width="10"
                height="7"
                viewBox="0 0 10 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  transform="translate(0,-1)"
                  d="M6.45216 6.18543C5.82919 7.27153 4.17081 7.27152 3.54784 6.18542L0 0H10L6.45216 6.18543Z"
                  fill="#2B2F43"
                />
              </svg>
            </Tooltip.Arrow>
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

StyledHandle.defaultProps = {
  className: "",
};

export type HandlePositionerProps = {
  left?: boolean;
  right?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function HandlePositioner({
  className,
  left,
  right,
  children,
  ...props
}: HandlePositionerProps) {
  const positioningCns = classNames({
    "left-[-3px]": left,
    "right-[-3px]": right,
  });

  return (
    <div
      {...props}
      className={`absolute top-0 py-8 h-full flex flex-col gap-y-4 ${positioningCns} ${className}`}
    >
      {children}
    </div>
  );
}

HandlePositioner.defaultProps = {
  className: "",
};

export type NodeContainerProps = {
  className?: string;
  children?: React.ReactNode;
};

export function NodeContainer({
  className,
  children,
  ...props
}: NodeContainerProps) {
  return (
    <div
      {...props}
      className={`relative flex flex-col bg-surface rounded-card border border-stroke ${className}`}
    >
      {children}
    </div>
  );
}

NodeContainer.defaultProps = {
  className: "",
};

export type NodeHeaderProps = {
  title: string;
  className?: string;
};

export function NodeHeader({
  className,
  title,
  icon,
  ...props
}: NodeHeaderProps) {
  return (
    <div
      {...props}
      className={`flex items-center justify-between pl-4 pr-[16px] pt-3 pb-3 ${className}`}
    >
      <div className="flex gap-x-1 items-baseline">
        <h4 className="font-icon cs-text-lg font-medium text-primary">
          {icon}
        </h4>
        <h4 className="font-sans font-medium text-primary cs-text-lg">
          {title}
        </h4>
      </div>

      <div className="flex gap-x-2">
        {/* <button className="font-icon text-secondary cs-text hover:text-primary">????</button> */}
        <button className="font-icon text-secondary cs-text font-extrabold hover:text-primary">
          ????
        </button>
      </div>
      {/* info button here ???? */}
    </div>
  );
}

NodeHeader.defaultProps = {
  className: "",
  title: "Untitled",
  icon: "????",
};

export type NodeControlTrayProps = {
  className?: string;
  children: React.ReactNode;
};

export function NodeControlTray({
  className,
  children,
  ...props
}: NodeControlTrayProps) {
  return (
    <div {...props} className={`flex flex-col px-2 ${className}`}>
      <div className="flex flex-col w-full rounded-xl bg-white border border-stroke shadow-field">
        {children}
      </div>
    </div>
  );
}

NodeControlTray.defaultProps = {
  className: "",
};

export type PreviewFooterProps = {
  className?: string;
};

export function PreviewFooter({ className, ...props }: PreviewFooterProps) {
  return (
    <div
      {...props}
      className={`flex items-center justify-between pl-4 pr-[16px] pb-2 ${className}`}
    >
      {/* <h4 className="font-sans text-primary cs-text">Preview</h4> */}
      {/* preview button here ???? */}
      {/* <div className="font-icon text-secondary cs-text">????</div> */}
    </div>
  );
}

PreviewFooter.defaultProps = {
  className: "",
};

export function NodeRule() {
  return <div className="w-full h-[1px] bg-stroke" />;
}

export type NodeFieldLabelProps = {
  className?: string;
  children: React.ReactNode;
};

export default function NodeFieldLabel({
  className,
  children,
  ...props
}: NodeFieldLabelProps) {
  return (
    <label
      {...props}
      className={`font-sans text-secondary cs-text w-16 flex-none text-left ${className}`}
    >
      {children}
    </label>
  );
}

NodeFieldLabel.defaultProps = {
  className: "",
};

export type NodeTextInputProps = {
  className?: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
};

export function NodeTextInput({
  className,
  label,
  onChange,
  ...props
}: NodeTextInputProps) {
  return (
    <div className="flex w-full items-center justify-center pl-2">
      <NodeFieldLabel>{label}</NodeFieldLabel>
      <input
        type="text"
        onChange={(event) => onChange(event)}
        className={`w-full flex items-center h-8 px-2 rounded-lg bg-transparent cs-text text-primary ${className}`}
      />
    </div>
  );
}

NodeTextInput.defaultProps = {
  className: "",
};

export type NodeNumberInputProps = {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
  step?: number;
  min?: number;
  max?: number;
  precision?: number;
};


export function NodeNumberInput({
  label,
  onChange,
  step,
  precision,
  ...props
}:NodeNumberInputProps) {
  return (
    <div className="flex w-full items-center justify-center pl-2">
      <NodeFieldLabel>{label}</NodeFieldLabel>
      <input
        {...props}
        onChange={(e) => {
          const re = /^[0-9\b]+$/;
          if (e.target.value === "" || re.test(e.target.value)) {
            onChange(e);
          }
        }}
        type="text"
        className={`w-full flex items-center text-right h-8 px-2 rounded-lg bg-transparent cs-text text-primary ${props.className}`}
      />
      <div className="flex pr-1.5">
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
          ????
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
          ????
        </button>
      </div>
    </div>
  );
}

NodeNumberInput.defaultProps = {
  className: "",
  step: 1,
  precision: 0,
};

export type NodeSelectProps = {
  className?: string;
  label: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
  value: string;
};

export function NodeSelect(props: NodeSelectProps) {
  return (
    <div className="flex w-full items-center">
      <Select.Root onValueChange={props.onValueChange}>
        <Select.Trigger
          className="w-full flex justify-between items-center h-8 text-sm p-2 cursor-default "
          aria-label={props.label}
        >
          <NodeFieldLabel>{props.label}</NodeFieldLabel>
          <div className="flex items-center gap-x-1">
            <Select.Value>
              <div className="cs-text">{props.value}</div>
            </Select.Value>
            <div className="text-secondary font-icon cs-text-sm font-bold">
              ????
            </div>
          </div>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="overflow-hidden bg-primary text-white rounded-lg shadow-high">
            <Select.Viewport className="p-1">
              <Select.Group>{props.children}</Select.Group>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}

NodeSelect.defaultProps = {
  className: "",
};

export const SelectItem = forwardRef(
  ({ children, className = "", ...props }, forwardedRef) => {
    return (
      <Select.Item
        className="p-1 rounded w-full cs-text flex items-center relative px-8 hover:bg-white/20"
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText className="cs-text user-select-none">
          {children}
        </Select.ItemText>
        <Select.ItemIndicator className="absolute left-0 h-8 w-8 flex items-center justify-center">
          <div className="text-white cs-text font-icon user-select-none">????</div>
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

export type NodeTextAreaProps = {
  className?: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
};

export function NodeTextArea({
  className,
  label,
  onChange,
  ...props
}: NodeTextAreaProps) {
  return (
    <div className="flex w-full items-center justify-center pl-2">
      <NodeFieldLabel>{label}</NodeFieldLabel>
      <div className="p-2">
        <input
          type="textarea"
          onChange={(event) => onChange(event)}
          className={`w-full flex items-center h-16 px-2 bg-transparent cs-text text-primary border border-stroke rounded ${className}`}
        />
      </div>
    </div>
  );
}

NodeTextArea.defaultProps = {
  className: "",
};

type NodeMatrixInputProps = {
  rows: number;
  columns: number;
  className?: string;
  label: string;
  disabled?: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number,
    j: number
  ) => void;
  values: number[][];
};

export function NodeMatrixInput({
  rows,
  cols,
  className,
  values,
  onChange,
  disabled,
  ...props
}: NodeMatrixInputProps) {
  return (
    <div className="flex w-full items-center justify-between p-2">
      <NodeFieldLabel>{props.label}</NodeFieldLabel>
      <div
        className={`flex flex-col border-stroke border rounded ${
          disabled ? "opacity-50" : ""
        }`}
      >
        {[...Array(rows)].map((_, i) => {
          return (
            <div className="flex" key={props.label + "-" + "rows" + i}>
              {[...Array(cols)].map((_, j) => {
                const borderCns = classnames({
                  "border-r": j !== cols - 1,
                  "border-b": i !== rows - 1,
                });
                return (
                  <input
                    disabled={disabled}
                    key={props.label + "-" + "rows" + i + "-" + "cols" + j}
                    className={`w-8 h-5 text-center text-middle font-mono bg-transparent cs-text border-stroke text-primary outline-none focus:ring-2 focus:ring-theme ${className} ${borderCns}`}
                    onChange={(event) => onChange(event.target.value, i, j)}
                    value={values[i][j]}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

NodeMatrixInput.defaultProps = {
  className: "",
  disabled: false,
};

export function NodeSwitch({ className, ...props }) {
  return (
    <Switch.Root
      className={`w-7 h-[18px] rounded-full flex p-[1px] ${className}`}
      {...props}
    >
      <Switch.Thumb className="bg-white w-[16px] h-[16px] rounded-full content-none" />
    </Switch.Root>
  );
}

export function NodeSwitchRow({ label, className, children, ...props }) {
  return (
    <div className="flex w-full items-center justify-between py-2 px-4">
      <label
        {...props}
        className={`font-sans text-primary cs-text w-16 flex-none text-left ${className}`}
      >
        {label}
      </label>
      {children}
    </div>
  );
}
