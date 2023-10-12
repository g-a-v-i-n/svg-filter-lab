import clsx from "clsx";
import useStore from "../../state/store";

export type HeaderProps = {
	id: string;
	icon: string;
	title: string;
	mdn: string;
	className?: string;
	selected: boolean;
};

export function Header({
	id,
	icon = "􀭉",
	title,
	mdn,
	className = "",
	selected,
}: HeaderProps) {
	const deleteNode = useStore((state) => state.deleteNode);

	return (
		<div className={`flex items-center justify-between p-2 ${className}`}>
			<div className="flex gap-x-1 items-center">
				<div
					className={clsx(
						"flex gap-x-1 items-center font-medium transition-colors",
						{
							"text-1 text-inherit": selected,
							"text-2 text-inherit": !selected,
						},
					)}
				>
					<span className="cs-text">{icon}</span>
					<span className="cs-text">{title}</span>
				</div>
				<a
					href={mdn}
					rel="noreferrer"
					target="_blank"
					className="inline text-4 hover:text-1 text-xs font-bold rounded"
				>
					􁊈
				</a>
			</div>

			<div className="flex gap-x-2">
				<button
					type="button"
					onClick={() => deleteNode(id)}
					className="text-3 hover:text-1 h-4 w-4 rounded-full flex items-center justify-center"
				>
					<span className="font-extrabold">􀁡</span>
				</button>
			</div>
		</div>
	);
}
