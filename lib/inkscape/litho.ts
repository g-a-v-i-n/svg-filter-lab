export const litho = `
<filter id="litho" height="200%" width="200%" x="-50%" y="-50%" data-name="Litho" data-category="Image Paint and Draw" data-description="Create a two colors lithographic effect" color-interpolation-filters="sRGB">
  <feGaussianBlur stdDeviation="0.01" />
  <feColorMatrix values="0" result="fbSourceGraphic" type="hueRotate" />
  <feColorMatrix result="fbSourceGraphic" in="fbSourceGraphic" values="0.21 0.72 0.072 0 0 0.21 0.72 0.072 0 0 0.21 0.72 0.072 0 0 0 0 0 50 0 " />
  <feComponentTransfer result="fbSourceGraphic" in="fbSourceGraphic">
    <feFuncR type="discrete" tableValues="0 1 1" />
    <feFuncG type="discrete" tableValues="0 1 1" />
    <feFuncB type="discrete" tableValues="0 1 1" />
  </feComponentTransfer>
  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -0.21 -0.72 -0.07 1 0 " in="fbSourceGraphic" result="result1" />
  <feFlood flood-color="rgb(144,7,7)" result="result3" flood-opacity="1" />
  <feBlend in2="fbSourceGraphic" mode="screen" in="result3" result="result4" />
  <feComposite in2="SourceGraphic" operator="in" in="result4" result="result2" />
</filter>
`
