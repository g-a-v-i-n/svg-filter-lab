export const matteRidge = `
<filter id="matte-ridge" height="200%" width="200%" x="-50%" y="-50%" data-name="Matte Ridge" data-category="Ridges" data-description="Soft pastel ridge" color-interpolation-filters="sRGB">
  <feGaussianBlur stdDeviation="0.5" result="result1" />
  <feBlend in="SourceGraphic" mode="normal" result="result5" in2="result1" />
  <feGaussianBlur stdDeviation="3" result="result6" in="result5" />
  <feComposite operator="xor" in="result6" in2="result6" result="result8" />
  <feComposite operator="in" result="fbSourceGraphic" in="result6" in2="result8" />
  <feColorMatrix result="fbSourceGraphicAlpha" in="fbSourceGraphic" values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0 " />
  <feGaussianBlur result="result0" in="fbSourceGraphic" stdDeviation="0.5" />
  <feSpecularLighting specularExponent="55" specularConstant="2" surfaceScale="2" lighting-color="rgb(255,255,255)" result="result1" in="result0">
    <fePointLight z="20000" y="-10000" x="-5000" />
  </feSpecularLighting>
  <feComposite operator="arithmetic" result="result2" in="result1" in2="fbSourceGraphicAlpha" k1="1" />
  <feComposite k3="1" k2="0.5" operator="arithmetic" result="result4" in="fbSourceGraphic" in2="result2" />
  <feComposite operator="over" in="result9" in2="result4" result="result91" />
  <feBlend mode="screen" in2="result91" />
</filter>
`
