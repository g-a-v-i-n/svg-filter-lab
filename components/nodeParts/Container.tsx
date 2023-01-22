import clsx from "clsx";

export type ContainerProps = {
  className?: string;
  children?: React.ReactNode;
  selected: boolean;
};

export function Container({
  className,
  children,
  selected,
  ...props
}: ContainerProps) {
  return (
    <div
      {...props}
      className={clsx(
        "relative flex flex-col bg-surface dark:bg-inverseSurface rounded-card border border-stroke outline-none transition-all",
        // {"!border-theme !bg-themeSurface": selected},
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
