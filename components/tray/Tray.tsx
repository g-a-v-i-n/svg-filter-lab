import Card from "./Card";


export const nodeIdentities = [
    {
      id: "blend",
      tagName: "feBlend",
      title: "Blend",
      icon: '',
    },
    {
      id: "colorMatrix",
      tagName: "feColorMatrix",
      title: "Color Matrix",
      icon: '',
    },
    {
      id: "componentTransfer",
      tagName: "feComponentTransfer",
      title: "Component Transfer",
      icon: '',
    },
    {
      id: "composite",
      tagName: "feComposite",
      title: "Composite",
      icon: '',
    },
    {
      id: "convolutionMatrix",
      tagName: "feConvolutionMatrix",
      title: "Convolution Matrix",
      icon: '',
    },
  ];

export function Tray() {
    return (
        <aside className="fixed bottom-0 left-0 w-full bg-[#eee] dark:bg-[#111] h-16 backdrop-blur-3xl flex gap-x-2 p-2">
        {
          nodeIdentities.map((identity) => {
            return (
                <Card key={identity.id} nodeIdentity={identity} />
            );
          })
        }

      </aside>
    )
}