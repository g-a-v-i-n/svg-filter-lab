import useStore from "../../state/store";

export type HeaderProps = {
	id: string;
	icon: string;
	title: string;
	mdn: string;
	className?: string;
};

export function Header({
	id,
	icon = "􀭉",
	title,
	mdn,
	className = "",
}: HeaderProps) {
	const deleteNode = useStore((state) => state.deleteNode);

	return (
		<div
			className={`flex items-center justify-between p-2 border-b borderSecondary ${className}`}
		>
			<div className="flex gap-x-1 items-center">
				<span className="cs-text font-medium ">{icon}</span>
				<span className="cs-text font-medium">{title}</span>
				<a
					href={mdn}
					rel="noreferrer"
					target="_blank"
					className="inline textQuaternary hover:textPrimary text-xs font-bold rounded"
				>
					􁊈
				</a>
			</div>

			<div className="flex gap-x-2">
				<button
					type="button"
					onClick={() => deleteNode(id)}
					className="textTertiary hover:textPrimary h-4 w-4 rounded-full flex items-center justify-center"
				>
					<span className="font-extrabold">􀁡</span>
				</button>
			</div>
		</div>
	);
}
