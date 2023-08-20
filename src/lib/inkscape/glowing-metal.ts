export const glowingMetal = `
<filter id="glowing-metal" height="200%" width="200%" x="-50%" y="-50%" data-name="Glowing Metal" data-category="Bevels" data-description="Glowing metal texture" color-interpolation-filters="sRGB">
  <feGaussianBlur stdDeviation="3" result="result10" />
  <feBlend in2="SourceGraphic" result="result5" mode="multiply" in="result10" />
  <feComposite in2="SourceGraphic" in="result5" result="fbSourceGraphic" operator="over" />
  <feGaussianBlur result="result9" stdDeviation="5" />
  <feSpecularLighting in="result9" result="result1" lighting-color="rgb(255,255,255)" surfaceScale="1" specularConstant="2.2" specularExponent="45">
    <fePointLight x="-5000" y="-10000" z="20000" />
  </feSpecularLighting>
  <feComposite in2="fbSourceGraphic" in="result1" result="result2" operator="in" />
  <feComposite in="result2" result="result4" operator="arithmetic" k2="2" k3="0.8" in2="fbSourceGraphic" />
  <feBlend in="result4" in2="result4" mode="multiply" />
</filter>
`
