export const metallizedPaint = `
<filter id="metallized-paint" height="200%" width="200%" x="-50%" y="-50%" data-name="Metallized Paint" data-category="Materials" data-description="Metallized effect with a soft lighting, slightly translucent at the edges" color-interpolation-filters="sRGB">
  <feGaussianBlur stdDeviation="1" result="result1" />
  <feComposite in="result1" in2="result1" result="result4" operator="in" />
  <feBlend in="result1" mode="screen" result="result5" in2="result4" />
  <feGaussianBlur stdDeviation="8" result="result6" in="result5" />
  <feComposite operator="atop" in="result6" in2="result5" result="result8" />
  <feComposite operator="in" result="fbSourceGraphic" in="result6" in2="result8" />
  <feGaussianBlur result="result0" in="fbSourceGraphic" stdDeviation="2.5" />
  <feSpecularLighting specularExponent="45" specularConstant="1.5" surfaceScale="1" lighting-color="rgb(255,255,255)" result="result1" in="result0">
    <fePointLight z="21000" y="-9000" x="-6000" />
  </feSpecularLighting>
  <feComposite operator="in" result="result2" in="result1" in2="fbSourceGraphic" />
  <feComposite k3="1" k2="1" operator="arithmetic" result="result4" in="fbSourceGraphic" in2="result2" />
  <feComposite operator="in" in="result9" in2="result4" result="result91" />
  <feBlend mode="multiply" in2="result91" />
</filter>
`
