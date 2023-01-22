export type HeaderProps = {
  title: string;
  className?: string;
  icon?: string;
  mdn?: string;
};

export function Header({ className, title, icon, mdn, ...props }: HeaderProps) {
  return (
    <div
      {...props}
      className={`flex items-center justify-between pl-4 pr-[16px] pt-4 pb-3 ${className}`}
    >
      <div className="flex gap-x-1 items-baseline">
        <span className="font-icon cs-text-lg font-medium">{icon}</span>
        <span className="font-sans font-medium cs-text-lg">{title}</span>
      </div>

      <div className="flex gap-x-2">
        {/* <button className="font-icon text-secondary cs-text hover:">􀁭</button> */}
        <a
          href={mdn}
          rel="noreferrer"
          target="_blank"
          className="font-icon text-secondary dark:text-inverseSecondary cs-text font-extrabold hover:text-primary dark:hover:text-inversePrimary"
        >
          􁊈
        </a>
      </div>
    </div>
  );
}

Header.defaultProps = {
  className: "",
  title: "Untitled",
  icon: "􀭉",
};
