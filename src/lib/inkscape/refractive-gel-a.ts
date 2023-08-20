export const refractiveGelA = `
<filter id="refractive-gel-a" height="200%" width="200%" x="-50%" y="-50%" data-name="Refractive Gel A" data-category="Ridges" data-description="Gel effect with light refraction" color-interpolation-filters="sRGB">
  <feOffset dx="7" dy="7" in="SourceAlpha" result="result3" />
  <feGaussianBlur stdDeviation="8" in="result3" result="result1" />
  <feComposite operator="in" in2="result1" in="SourceGraphic" result="result2" />
  <feComposite operator="out" result="fbSourceGraphic" in="result2" in2="result2" />
  <feColorMatrix result="fbSourceGraphicAlpha" in="fbSourceGraphic" values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0 0 0 0 4 0 " />
  <feGaussianBlur result="result0" in="fbSourceGraphicAlpha" stdDeviation="2" />
  <feSpecularLighting specularExponent="20" specularConstant="1.2" surfaceScale="3" lighting-color="rgb(255,255,255)" result="result1" in="result0">
    <feDistantLight azimuth="235" elevation="45" />
  </feSpecularLighting>
  <feComposite operator="in" result="result2" in="result1" in2="fbSourceGraphicAlpha" />
  <feComposite in="fbSourceGraphic" operator="arithmetic" k2="2" k3="2" in2="result2" result="result91" />
  <feBlend mode="multiply" in2="result91" />
</filter>
`
