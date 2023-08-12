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
      className={`flex items-center justify-between pl-2 pr-2 pt-2 pb-2 border-b borderSecondary ${className}`}
    >
      <div className="flex gap-x-1 items-center">
        <span className="cs-text font-medium ">
          {metadata.icon}
        </span>
        <span className="cs-text font-medium">
          {metadata.title}
        </span>
        <a
          href={metadata.mdn}
          rel="noreferrer"
          target="_blank"
          className="inline textQuaternary hover:textPrimary text-xs font-bold rounded"
        >
          􁊈
        </a>
        {/* <a
          href={metadata.mdn}
          rel="noreferrer"
          target="_blank"
          className="textTertiary hover:textPrimary font-extrabold cs-text rounded"
        >
          􀍢
        </a> */}
      </div>

      <div className="flex gap-x-2">
        {/* <button className="text-secondary cs-text hover:">􀁭</button> */}
        <button
          onClick={() => deleteNode(id)}
          className="textTertiary hover:textPrimary h-4 w-4 rounded-full flex items-center justify-center"
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
