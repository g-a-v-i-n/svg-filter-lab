import nodes from '../../state/nodes/index'

  // conver the nodes import to a dictionary
  const nodesArray = Object.entries(nodes).map(([key, value]) => {
    return {
      definition: value.definition,
      create: value.create,
    }
  })


export function Sidebar() {
  return (
    <aside className="w-[220px] surfaceBase border-r borderPrimary backdrop-blur-3xl flex flex-col gap-1 p-2 flex-none">
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
      className="rounded-lg flex items-center gap-x-2 p-3 cursor-grab"
    >
      <span className="select-none">{metadata.icon}</span>
      <span className="select-none">{metadata.title}</span>
    </div>
  )
}
