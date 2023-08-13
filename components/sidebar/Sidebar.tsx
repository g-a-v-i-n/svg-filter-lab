import nodes from '../../state/nodes/index'


const byAlpha = (a, b) => {
  if (a.definition.meta.nodeType[0] < b.definition.meta.nodeType[0]) return -1
  if (a.definition.meta.nodeType[0] > b.definition.meta.nodeType[0]) return 1
  return 0
}

  // conver the nodes import to a dictionary
  const nodesArray = Object.entries(nodes).map(([key, value]) => {
    return {
      definition: value.definition,
      create: value.create,
    }
  }).sort(byAlpha)


export function Sidebar() {
  return (
    <aside className="w-[220px] bg-white-900 dark:bg-black-900 border-r borderPrimary backdrop-blur-3xl flex flex-col gap-1 p-1 flex-none">
      <span className="p-2 font-semibold">Filter Elements</span>
      {nodesArray.map((n) => {
        return <Card key={n.definition.meta.nodeType} metadata={n.definition.meta} />
      })}
    </aside>
  )
}

type CardProps = {
  metadata: {
    type: string
    title: string
    icon: string
    mdn: string | null
  }
}

export default function Card({ metadata }: CardProps) {
  return (
    <div
      draggable
      onDragStart={(event) => {
        event.dataTransfer.setData("application/reactflow", metadata.nodeType)
        event.dataTransfer.effectAllowed = "move"
      }}
      className="rounded-lg flex items-center gap-x-2 p-2 cursor-grab"
    >
      <span className="select-none">{metadata.icon}</span>
      <span className="select-none">{metadata.title}</span>
    </div>
  )
}
