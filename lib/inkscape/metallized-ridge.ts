export const metallizedRidge = `
<filter id="metallized-ridge" height="200%" width="200%" x="-50%" y="-50%" data-name="Metallized Ridge" data-category="Ridges" data-description="Gel Ridge metallized at its top" color-interpolation-filters="sRGB">
  <feGaussianBlur stdDeviation="1" result="result1" />
  <feGaussianBlur stdDeviation="8" result="result6" in="result1" />
  <feComposite operator="atop" in="result6" in2="result1" result="result8" />
  <feComposite operator="xor" result="fbSourceGraphic" in="result6" in2="result8" />
  <feColorMatrix result="fbSourceGraphicAlpha" in="fbSourceGraphic" values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 2 0 " />
  <feGaussianBlur result="result0" in="fbSourceGraphicAlpha" stdDeviation="2.5" />
  <feSpecularLighting specularExponent="35" specularConstant="1" surfaceScale="4" lighting-color="rgb(255,255,255)" result="result1" in="result0">
    <fePointLight z="20000" y="-10000" x="-5000" />
  </feSpecularLighting>
  <feComposite operator="in" result="result2" in="result1" in2="fbSourceGraphicAlpha" />
  <feComposite k3="1" k2="1" operator="arithmetic" result="result4" in="fbSourceGraphic" in2="result2" />
  <feComposite operator="atop" in="result9" in2="result4" result="result91" />
  <feBlend mode="multiply" in2="result91" />
</filter>
`
