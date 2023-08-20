export const plasticine = `
<filter id="plasticine" height="200%" width="200%" x="-50%" y="-50%" data-name="Plasticine" data-category="Bumps" data-description="Matte modeling paste emboss effect" color-interpolation-filters="sRGB">
  <feGaussianBlur result="result3" stdDeviation="4" in="SourceGraphic" />
  <feComponentTransfer in="result3" result="result1">
    <feFuncR tableValues="0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1" type="discrete" />
    <feFuncG tableValues="0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1" type="discrete" />
    <feFuncB tableValues="0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1" type="discrete" />
  </feComponentTransfer>
  <feGaussianBlur stdDeviation="2" result="result5" />
  <feBlend in2="result1" mode="lighten" result="result6" />
  <feColorMatrix result="result2" type="luminanceToAlpha" in="result6" />
  <feDiffuseLighting lighting-color="#ffffff" in="result2" diffuseConstant="0.7" result="result1" surfaceScale="-15">
    <feDistantLight azimuth="225" elevation="20" />
  </feDiffuseLighting>
  <feComposite in2="result6" k2="0.5" result="result3" k3="0.8" k1="0.2" in="result1" operator="arithmetic" />
  <feComposite in2="SourceGraphic" result="result7" operator="in" k2="1" in="result3" />
</filter>
`
