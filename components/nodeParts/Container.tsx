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
        "relative flex flex-col bg-surface dark:bg-inverseSurface rounded-2xl border border-stroke dark:border-inverseStroke outline-none transition-all backdrop-blur-lg",
        "group-focus-within:ring-4 group-focus-within:ring-theme dark:group-focus-within:ring-themeInverse/50",
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
