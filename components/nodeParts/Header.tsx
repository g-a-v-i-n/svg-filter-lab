import useStore, { State } from "../../state/store";

export type HeaderProps = {
  id: string;
  title: string;
  className?: string;
  icon?: string;
  mdn?: string;
};

export function Header({
  className,
  title,
  icon,
  mdn,
  id,
  ...props
}: HeaderProps) {
  const deleteNode = useStore((state: State) => state.deleteNode);

  return (
    <div
      {...props}
      className={`flex items-center justify-between pl-4 pr-[16px] pt-4 pb-3 ${className}`}
    >
      <div className="flex gap-x-1 items-baseline">
        <span className="cs-text-lg font-medium">{icon}</span>
        <span className="cs-text-lg font-medium">{title}</span>
      </div>

      <div className="flex gap-x-2">
        {/* <button className="text-secondary cs-text hover:">􀁭</button> */}
        <a
          href={mdn}
          rel="noreferrer"
          target="_blank"
          className="textSecondary hover:textPrimary font-extrabold h-4 w-4 rounded flex items-center justify-center"
        >
          􁊈
        </a>

        <button
          onClick={deleteNode}
          className="textSecondary hover:textPrimary h-4 w-4 rounded-full flex items-center justify-center"
        >
          <span className="font-extrabold">􀁡</span>
        </button>
      </div>
    </div>
  );
}

Header.defaultProps = {
  className: "",
  title: "Untitled",
  icon: "􀭉",
};
