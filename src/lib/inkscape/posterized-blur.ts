export const posterizedBlur = `
<filter id="posterized-blur" height="200%" width="200%" x="-50%" y="-50%" data-name="Posterized Blur" data-category="Morphology" data-description="Converts blurred contour to posterized steps" color-interpolation-filters="sRGB">
  <feComposite in2="SourceGraphic" result="result1" k4="1" operator="arithmetic" />
  <feGaussianBlur in="SourceAlpha" result="blur" stdDeviation="17" />
  <feComposite in2="blur" in="blur" result="composite3" operator="in" />
  <feBlend in2="result1" result="fbSourceGraphic" mode="multiply" />
  <feComponentTransfer result="component1" in="fbSourceGraphic">
    <feFuncR tableValues="0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1 1" type="discrete" />
    <feFuncG tableValues="0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1 1" type="discrete" />
    <feFuncB tableValues="0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1 1" type="discrete" />
  </feComponentTransfer>
  <feColorMatrix result="colormatrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 -0.2125 -0.7154 -0.0721 1 0 " />
  <feGaussianBlur stdDeviation="10" in="SourceGraphic" result="result2" />
  <feColorMatrix result="result3" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 50 0 " />
  <feComponentTransfer in="result3" result="component1">
    <feFuncR type="discrete" tableValues="0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1 1" />
    <feFuncG type="discrete" tableValues="0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1 1" />
    <feFuncB type="discrete" tableValues="0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1 1" />
  </feComponentTransfer>
  <feComposite in2="colormatrix" operator="in" />
</filter>
`
