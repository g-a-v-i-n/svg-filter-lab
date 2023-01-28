export type FooterProps = {
  className?: string
}

export function Footer({ className, ...props }: FooterProps) {
  return (
    <div
      {...props}
      className={`flex items-center justify-between pl-4 pr-[16px] pb-2 ${className}`}
    >
      {/* <h4 className="font-sans text-primary cs-text">Preview</h4> */}
      {/* preview button here 􀁭 */}
      {/* <div className="text-secondary cs-text">􀁭</div> */}
    </div>
  )
}

Footer.defaultProps = {
  className: "",
}
