import { Handle, Position, HandleType } from "reactflow";
import classNames from "classnames";
import * as Select from "@radix-ui/react-select";
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
    <Handle
      type={type}
      position={position}
      className={`bg-primary rounded-full w-[5px] h-6 flex-none !relative !top-auto !left-auto !right-auto !bottom-auto !translate-0 ${className}`}
      {...props}
    />
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
      className={`absolute top-0 py-7 h-full flex flex-col gap-y-4 ${positioningCns} ${className}`}
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

export function NodeHeader({ className, title, ...props }: NodeHeaderProps) {
  return (
    <div
      {...props}
      className={`flex items-center justify-between pl-4 pr-[16px] pt-3 pb-3 ${className}`}
    >
      <h4 className="font-sans font-medium text-primary cs-text-lg">{title}</h4>

      <div className="flex gap-x-2">
      {/* <button className="font-icon text-secondary cs-text hover:text-primary">􀁭</button> */}
      <button className="font-icon text-secondary cs-text font-extrabold hover:text-primary">􁊈</button>
      </div>
      {/* info button here 􁊈 */}
    </div>
  );
}

NodeHeader.defaultProps = {
  className: "",
  title: "Untitled",
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
      {/* preview button here 􀁭 */}
      {/* <div className="font-icon text-secondary cs-text">􀁭</div> */}
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

export function NodeNumberInput(props) {
  return (
    <div className="flex w-full items-center justify-center pl-2">
      <NodeFieldLabel>{props.label}</NodeFieldLabel>
      <input
        {...props}
        type="number"
        className={`w-full flex items-center h-8 px-2 rounded-lg bg-transparent cs-text text-primary ${props.className}`}
      />
    </div>
  );
}

NodeNumberInput.defaultProps = {
  className: "",
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
            <div className="text-secondary font-icon cs-text font-bold">􀆈</div>
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
          <div className="text-white cs-text font-icon user-select-none">􀆅</div>
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
      <div className={`flex flex-col border-stroke border rounded ${disabled ? 'opacity-50' : ''}`}>
        {[...Array(rows)].map((_, i) => {
          return (
            <div className="flex" key={props.label + "-" + "rows" + i}>
              {[...Array(cols)].map((_, j) => {
                const borderCns = classnames({
                  "border-r": j !== cols - 1,
                  "border-b": i !== rows - 1,
                })
                return (
                  <input 
                    disabled={disabled}
                    key={props.label + "-" + "rows" + i + "-" + "cols" + j}
                    className={`w-6 h-6 text-center text-middle font-mono bg-transparent cs-text-sm border-stroke text-primary ${className} ${borderCns}`}
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
};
