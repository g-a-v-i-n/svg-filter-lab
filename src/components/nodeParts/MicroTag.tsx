export type MicroTagProps = {
	className?: string;
	children: React.ReactNode;
};

export function MicroTag({ className, children, ...props }: MicroTagProps) {
	return (
		<div
			{...props}
			className={`rounded-[3.25px] border border-gray-50 bg-gray-50 text-gray-700 cs-text-xxs font-mono p-1 border-micro ${className}`}
		>
			{children}
		</div>
	);
}
