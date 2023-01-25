export type ControlGroupProps = {
  className?: string;
  children: React.ReactNode;
};

export function ControlGroup({
  className,
  children,
  ...props
}: ControlGroupProps) {
  return (
    <div {...props} className={`flex flex-col px-2 ${className}`}>
      <div className="flex flex-col w-full rounded-lg bg-elevatedSurface dark:bg-inverseElevatedSurface border border-stroke dark:border-inverseStroke shadow-field nodrag">
        {children}
      </div>
    </div>
  );
}

ControlGroup.defaultProps = {
  className: "",
};
