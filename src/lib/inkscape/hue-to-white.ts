export const hueToWhite = `
<filter id="hue-to-white" height="200%" width="200%" x="-50%" y="-50%" data-name="Hue to White" data-category="Color" data-description="Fades hue progressively to white" color-interpolation-filters="sRGB">
  <feColorMatrix values="1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 0 1 " type="matrix" result="r" in="SourceGraphic" />
  <feColorMatrix values="0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 1 " type="matrix" result="g" in="SourceGraphic" />
  <feBlend in="result13" mode="normal" result="result6" in2="SourceGraphic" />
  <feComposite result="result3" operator="in" in="result6" in2="SourceGraphic" />
</filter>
`
