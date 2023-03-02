export const meltedJelly = `
<filter id="melted-jelly" height="200%" width="200%" x="-50%" y="-50%" data-name="Melted Jelly" data-category="Bevels" data-description="Glossy bevel with blurred edges" color-interpolation-filters="sRGB">
  <feComposite operator="arithmetic" in2="SourceGraphic" result="fbSourceGraphic" in="SourceGraphic" k2="0.9" />
  <feGaussianBlur result="result0" in="fbSourceGraphic" stdDeviation="6" />
  <feSpecularLighting specularExponent="25" specularConstant="1" surfaceScale="6" lighting-color="rgb(255,255,255)" result="result1" in="result0">
    <feDistantLight azimuth="235" elevation="55" />
  </feSpecularLighting>
  <feComposite k3="1.5" k2="1" operator="arithmetic" result="result4" in="result0" in2="result1" />
  <feComposite operator="atop" result="result2" in="result4" in2="result0" />
</filter>
`;
