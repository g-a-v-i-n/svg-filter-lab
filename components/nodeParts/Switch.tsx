import * as RS from "@radix-ui/react-switch";
import clsx from "clsx";

export type SwitchProps = {
  className?: string;
};

export function Switch({ className, ...props }: SwitchProps) {
  return (
    <RS.Root
      className={clsx("w-6 h-[14px] rounded-full flex p-[1px] ", className)}
      {...props}
    >
      <RS.Thumb className="bg-inversePrimary dark:bg-inversePrimary w-[12px] h-[12px] rounded-full content-none" />
    </RS.Root>
  );
}
