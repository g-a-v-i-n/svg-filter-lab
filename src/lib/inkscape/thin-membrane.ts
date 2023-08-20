export const thinMembrane = `
<filter id="thin-membrane" height="200%" width="200%" x="-50%" y="-50%" data-name="Thin Membrane" data-category="Ridges" data-description="Thin like a soap membrane" color-interpolation-filters="sRGB">
  <feGaussianBlur stdDeviation="5" result="result1" />
  <feComposite in="result1" in2="result1" result="result4" operator="xor" />
  <feGaussianBlur stdDeviation="8" result="result6" />
  <feComposite operator="atop" in="result6" in2="SourceGraphic" result="result8" />
  <feComposite operator="in" result="fbSourceGraphic" in="result6" in2="result8" />
  <feColorMatrix result="fbSourceGraphicAlpha" in="fbSourceGraphic" values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 2 0 " />
  <feGaussianBlur result="result0" in="fbSourceGraphicAlpha" stdDeviation="2" />
  <feSpecularLighting specularExponent="25" specularConstant="2" surfaceScale="-5" lighting-color="rgb(255,255,255)" result="result1" in="result0">
    <fePointLight z="20000" y="-10000" x="-5000" />
  </feSpecularLighting>
  <feComposite operator="in" result="result2" in="result1" in2="fbSourceGraphicAlpha" />
  <feComposite k3="2" k2="1" operator="arithmetic" result="result4" in="fbSourceGraphic" in2="result2" />
  <feComposite operator="in" in="result4" result="result9" in2="result4" />
  <feBlend mode="multiply" in="result9" in2="result4" />
</filter>
`
