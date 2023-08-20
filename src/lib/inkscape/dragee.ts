export const dragee = `
<filter id="dragee" height="200%" width="200%" x="-50%" y="-50%" data-name="Dragee" data-category="Ridges" data-description="Gel Ridge with a pearlescent look" color-interpolation-filters="sRGB">
  <feGaussianBlur stdDeviation="0.01" result="result1" />
  <feBlend in="result1" mode="screen" result="result5" in2="result1" />
  <feGaussianBlur stdDeviation="6" result="result6" />
  <feComposite operator="xor" result="fbSourceGraphic" in="result6" in2="result6" />
  <feColorMatrix result="fbSourceGraphicAlpha" in="fbSourceGraphic" values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 2 0 " />
  <feGaussianBlur result="result0" in="fbSourceGraphicAlpha" stdDeviation="2" />
  <feSpecularLighting specularExponent="35" specularConstant="1" surfaceScale="3" lighting-color="rgb(255,255,255)" result="result1" in="result0">
    <feDistantLight azimuth="235" elevation="55" />
  </feSpecularLighting>
  <feComposite operator="in" result="result2" in="result1" in2="fbSourceGraphicAlpha" />
  <feComposite k3="1" k2="1" operator="arithmetic" result="result4" in="fbSourceGraphic" in2="result2" />
  <feComposite operator="out" in="result9" in2="result4" result="result91" />
  <feBlend mode="multiply" in2="result91" />
</filter>
`
