export type HeaderProps = {
  title: string;
  className?: string;
  icon?: string;
  mdn?: string;
  deleteNode?: () => void;
};

export function Header({ className, title, icon, mdn, deleteNode, ...props }: HeaderProps) {

  return (
    <div
      {...props}
      className={`flex items-center justify-between pl-4 pr-[16px] pt-4 pb-3 ${className}`}
    >
      <div className="flex gap-x-1 items-baseline">
        <span className="cs-text-lg font-medium">{icon}</span>
        <span className="font-sans font-medium cs-text-lg">{title}</span>
      </div>

      <div className="flex gap-x-2">
        {/* <button className="text-secondary cs-text hover:">􀁭</button> */}
        <a
          href={mdn}
          rel="noreferrer"
          target="_blank"
          className="text-secondary dark:text-inverseSecondary cs-text font-extrabold hover:text-primary dark:hover:text-inversePrimary h-4 w-4 rounded flex items-center justify-center"
        >
          􁊈
        </a>

        <button onClick={deleteNode} className="text-secondary dark:text-inverseSecondary hover:text-primary dark:hover:text-inversePrimary h-4 w-4 rounded-full flex items-center justify-center">
          <span className="cs-text font-extrabold">􀁡</span>
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
