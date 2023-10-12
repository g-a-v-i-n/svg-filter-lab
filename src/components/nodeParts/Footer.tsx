export type FooterProps = {
	className?: string;
};

export function Footer({ className, ...props }: FooterProps) {
	return (
		<div
			{...props}
			className={`flex items-center justify-between p-1.5 ${className}`}
		>
			{/* <h4 className="font-sans text-primary cs-text">Preview</h4> */}
			{/* preview button here 􀁭 */}
			<div className="text-label3 cs-text">Animate 􀁭</div>
		</div>
	);
}

Footer.defaultProps = {
	className: "",
};
