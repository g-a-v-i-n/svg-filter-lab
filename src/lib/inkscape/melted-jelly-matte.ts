export const meltedJellyMatte = `
<filter id="melted-jelly-matte" height="200%" width="200%" x="-50%" y="-50%" data-name="Melted Jelly Matte" data-category="Bevels" data-description="Matte bevel with blurred edges" color-interpolation-filters="sRGB">
  <feComposite operator="arithmetic" in2="SourceGraphic" result="fbSourceGraphic" in="SourceGraphic" k2="0.9" />
  <feGaussianBlur result="result0" in="fbSourceGraphic" stdDeviation="6" />
  <feSpecularLighting specularExponent="15" specularConstant="0.9" surfaceScale="6" lighting-color="rgb(255,255,255)" result="result1" in="result0">
    <feDistantLight azimuth="235" elevation="65" />
  </feSpecularLighting>
  <feComposite k3="0.1" k2="0.7" operator="arithmetic" result="result4" in="result1" in2="result0" k1="0.1" />
  <feComposite operator="atop" result="result2" in="result4" in2="result0" />
</filter>
`
