import * as RS from "@radix-ui/react-select";
import clsx from "clsx";
import { forwardRef, Ref } from "react";
import FieldLabel from "./FieldLabel";

export type SelectProps = {
  className?: string;
  label: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
  value: string;
  first?: boolean;
  last?: boolean;
};

export function Select(props: SelectProps) {
  return (
    <div className={clsx("flex w-full items-center z-10", props.className)}>
      <RS.Root onValueChange={props.onValueChange}>
        <RS.Trigger
          className={clsx(
            {
              "rounded-t-lg": props.first,
              "rounded-b-lg": props.last,
            },
            "w-full flex justify-between items-center h-8 text-sm p-2 cursor-default"
          )}
          aria-label={props.label}
        >
          <FieldLabel>{props.label}</FieldLabel>
          <div className="flex items-center gap-x-1">
            <RS.Value>
              <span className="cs-text">{props.value}</span>
            </RS.Value>
            <span className="text-secondary dark:text-inverseSecondary cs-text-sm font-bold">
              􀆈
            </span>
          </div>
        </RS.Trigger>
        <RS.Portal>
          <RS.Content className="overflow-hidden bg-primary text-inversePrimary rounded-lg shadow-high backdrop-blur-lg">
            <RS.Viewport className="p-1">
              <RS.Group>{props.children}</RS.Group>
            </RS.Viewport>
          </RS.Content>
        </RS.Portal>
      </RS.Root>
    </div>
  );
}

export type SelectItemProps = {
  children: React.ReactNode;
  className?: string;
  value: string;
};

export const SelectItem = forwardRef(
  (
    { children, className = "", value, ...props }: SelectItemProps,
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <RS.Item
        className={clsx(
          "p-1 rounded w-full user-select-none cursor-pointer outline-none flex items-center relative px-8 hover:bg-themeInverse",
          className
        )}
        value={value}
        {...props}
        ref={ref}
      >
        <RS.ItemText>{children}</RS.ItemText>
        <RS.ItemIndicator className="absolute left-0 h-8 w-8 flex items-center justify-center">
          <span className="text-inversePrimary user-select-none">􀆅</span>
        </RS.ItemIndicator>
      </RS.Item>
    );
  }
);

type SeparatorProps = {
  className?: string;
};

export const Separator = forwardRef(
  ({ className = "", ...props }: SeparatorProps, ref: Ref<HTMLDivElement>) => {
    return (
      <RS.Separator
        ref={ref}
        className="w-full bg-inverseStroke h-[1px] my-1"
        {...props}
      />
    );
  }
);

export const Group = RS.Group;

export const SelectWithCategories = forwardRef(
  (
    { id, value, label, onChange, categories, className = "", ...props }: SelectProps,
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <Select
          value={value}
          label={label}
          className="rounded"
          onValueChange={onChange}
          {...props}
        >
          {
            categories.map((category, i) => {
              return (
                <Group key={'group-' + category.category} >
                  {
                    i !== 0 && (<Separator />)
                  }
                  {
                    category.items.map((item, i) => {
                      return (
                        <SelectItem key={id + "-" + item.key} value={item}>
                          <span>{item.label}</span>
                        </SelectItem>
                      )
                    })
                  }
                </Group>
              )
            })
            }
        </Select>
    )
  }
)
