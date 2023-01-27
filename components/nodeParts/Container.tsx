import clsx from "clsx";

export type ContainerProps = {
  className?: string;
  children?: React.ReactNode;
};

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div
      {...props}
      className={clsx(
        "surfaceBase borderPrimary relative flex flex-col rounded-2xl border outline-none transition-all",
        "group-focus-within:ring-4 group-focus-within:ring-theme dark:group-focus-within:ring-inverseTheme/50",
        className
      )}
    >
      {children}
    </div>
  );
}

Container.defaultProps = {
  className: "",
};
