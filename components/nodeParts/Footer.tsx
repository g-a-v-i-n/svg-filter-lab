export type FooterProps = {
  className?: string
}

export function Footer({ className, ...props }: FooterProps) {
  return (
    <div
      {...props}
      className={`flex items-center justify-between p-2 ${className}`}
    >
      {/* <h4 className="font-sans text-primary cs-text">Preview</h4> */}
      {/* preview button here 􀁭 */}
      {/* <div className="text-tertiary cs-text">Preview 􀁭</div> */}
    </div>
  )
}

Footer.defaultProps = {
  className: "",
}
