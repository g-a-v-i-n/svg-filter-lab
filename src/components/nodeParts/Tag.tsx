export type MicroTagProps = {
	className?: string;
	children: React.ReactNode;
};

export function Tag({ className, children, ...props }: MicroTagProps) {
	return (
		<div
			{...props}
			className={`rounded border border-gray-50 bg-gray-50 text-gray-700 cs-text font-mono p-1 border-micro ${className}`}
		>
			{children}
		</div>
	);
}
