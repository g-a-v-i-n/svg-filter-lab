import useStore, { State } from "../../state/store"

export type HeaderProps = {
  id: string
  metadata: any
  className?: string
}

export function Header({ className, metadata, id, ...props }: HeaderProps) {
  const deleteNode = useStore((state: State) => state.deleteNode)

  return (
    <div
      {...props}
      className={`flex items-center justify-between pl-4 pr-[16px] pt-4 pb-3 ${className}`}
    >
      <div className="flex gap-x-1 items-baseline">
        <span className="cs-text-lg font-medium">{metadata.icon}</span>
        <span className="cs-text-lg font-medium">{metadata.title}</span>
        <a
          href={metadata.mdn}
          rel="noreferrer"
          target="_blank"
          className="textTertiary hover:textPrimary font-extrabold cs-text rounded"
        >
          􀍢
        </a>
      </div>

      <div className="flex gap-x-2">
        {/* <button className="text-secondary cs-text hover:">􀁭</button> */}

        <button
          onClick={() => deleteNode(id)}
          className="textSecondary hover:textPrimary h-4 w-4 rounded-full flex items-center justify-center"
        >
          <span className="font-extrabold">􀁡</span>
        </button>
      </div>
    </div>
  )
}

Header.defaultProps = {
  className: "",
  title: "Untitled",
  icon: "􀭉",
}
