export const moltenMetal = `
<filter id="molten-metal" height="200%" width="200%" x="-50%" y="-50%" data-name="Molten Metal" data-category="Bevels" data-description="Melting parts of object together, with a glossy bevel and a glow" color-interpolation-filters="sRGB">
  <feGaussianBlur stdDeviation="5" result="result1" />
  <feColorMatrix result="result10" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 5 -4 " />
  <feComposite operator="atop" in="result10" in2="result10" result="result8" />
  <feComposite operator="in" result="fbSourceGraphic" in="result1" in2="result8" />
  <feGaussianBlur result="result0" in="fbSourceGraphic" stdDeviation="5" />
  <feSpecularLighting specularExponent="55" specularConstant="2.5" surfaceScale="2" lighting-color="rgb(255,255,255)" result="result1" in="result0">
    <feDistantLight azimuth="225" elevation="60" />
  </feSpecularLighting>
  <feComposite operator="in" result="result2" in="result1" in2="fbSourceGraphic" />
  <feComposite k3="1" k2="1" operator="arithmetic" result="result4" in="fbSourceGraphic" in2="result2" />
  <feComposite operator="in" in="result9" in2="result4" result="result9" />
  <feBlend mode="multiply" in="result9" in2="result9" />
</filter>
`
