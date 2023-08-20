export const raisedBorder = `
<filter id="raised-border" height="200%" width="200%" x="-50%" y="-50%" data-name="Raised Border" data-category="Bevels" data-description="Strongly raised border around a flat surface" color-interpolation-filters="sRGB">
  <feGaussianBlur stdDeviation="4" result="result1" />
  <feComposite in="result1" in2="result1" result="result4" operator="in" />
  <feGaussianBlur stdDeviation="2" result="result6" in="result4" />
  <feComposite operator="xor" in="result6" in2="result4" result="result8" />
  <feComposite operator="atop" result="fbSourceGraphic" in="result4" in2="result8" />
  <feSpecularLighting specularExponent="10" specularConstant="1.3" surfaceScale="3" lighting-color="rgb(255,255,255)" result="result1" in="fbSourceGraphic">
    <feDistantLight azimuth="235" elevation="55" />
  </feSpecularLighting>
  <feComposite operator="atop" result="result2" in="result1" in2="fbSourceGraphic" />
  <feComposite k3="1" k2="1" operator="arithmetic" result="result4" in="fbSourceGraphic" in2="result2" />
  <feComposite operator="over" in="result4" in2="SourceGraphic" />
  <feBlend mode="multiply" in2="result2" />
</filter>
`
